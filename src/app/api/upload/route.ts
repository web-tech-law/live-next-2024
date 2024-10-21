import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false, // Desabilitar o bodyParser para lidar com arquivos grandes
  },
};

export default async function POST(req: Request, res: Response) {
  if (req.method === 'POST') {
    const chunks: any[] = [];

    req.on('data', (chunk) => {
      chunks.push(chunk);
    });

    req.on('end', () => {
      const buffer = Buffer.concat(chunks);
      const uploadsDir = path.join(process.cwd(), 'public/uploads'); // Diretório 'uploads'

      // Verifica se a pasta 'uploads' existe, se não, cria a pasta
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }

      const filePath = path.join(uploadsDir, 'image.png'); // Define o caminho do arquivo

      fs.writeFileSync(filePath, buffer); // Salva o arquivo
      res.status(200).json({ message: 'File uploaded successfully' });
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
