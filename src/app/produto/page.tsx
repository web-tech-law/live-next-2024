"use client";
import { TipoProduto } from "@/types/types";
import Image from "next/image";
import { useState } from "react"

export default function Produto() {


    const [produto, setProduto] = useState<TipoProduto>({
        id: 0,
        nome: "",
        desc: "",
        dtLanc:"",
        valor: 0.0,
        multi:"não",
        imagem: "",
    });

    const [previewImage, setPreviewImage] = useState<string>("https://placehold.co/200x200.png"); // Para armazenar a URL da imagem

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const{name,value} = e.target;
        setProduto({...produto,[name]:value});
    }
    
    const [message, setMessage] = useState<string>("");
    const handleChangeIimage = (e:React.ChangeEvent<HTMLInputElement>)=>{
        
        if(e.target.files && e.target.files.length > 0){
            const file = e.target.files[0];
            setProduto({ ...produto, imagem: file });// Criando uma URL para o arquivo selecionado para pré-visualização
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl); // Armazenando a URL da imagem para usar no <img>
          }
        };

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
        
            const formData = new FormData();
            formData.append("nome", produto.nome);
            formData.append("desc", produto.desc);
            formData.append("dtLanc", produto.dtLanc);
            formData.append("valor", produto.valor.toString());
            formData.append("multi", produto.multi);
            formData.append("imagem", produto.imagem); // Adiciona o arquivo de imagem
            
            try {
              const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
              });
        
              if (response.ok) {
                setMessage("Produto cadastrado com sucesso!");
              } else {
                setMessage("Erro ao cadastrar o produto.");
              }
            } catch (error) {
              console.error("Erro ao enviar dados:", error);
              setMessage("Erro ao enviar os dados.");
            }
          };

    return (
        <main className="flex flex-col items-center justify-center p-8 bg-green-400/30">
            <div  className=" bg-[#4B3F3F] p-6 rounded-lg w-4/6">
                    <h2 className="text-[#4CF214] text-center text-3xl mb-6">CADASTRO DE PRODUTOS</h2>
            <div className="flex">
                <form onSubmit={handleSubmit}>
                    <div className="my-3 flex items-center justify-between">
                        <label className="text-[#4CF214]" htmlFor="idNmJogo">NOME DO JOGO</label>
                        <input className="p-2 text-gray-800 placeholder:text-gray-600" type="text"
                            id="idNmJogo"
                            name="nome"
                            placeholder="digite o nome do jogo..."
                            value={produto.nome}
                            onChange={(e)=>handleChange(e)}
                            required />
                    </div>
                    <div className="my-3 flex items-center justify-between">
                        <label className="text-[#4CF214]" htmlFor="idDescJogo">DESCRIÇÃO DO JOGO</label>
                        <input className="p-2 text-gray-800 placeholder:text-gray-600" type="text"
                            id="idDescJogo"
                            name="desc"
                            placeholder="digite a descrição do jogo..."
                            value={produto.desc}
                            onChange={(e)=>handleChange(e)}
                            required />
                    </div>
                    <div className="my-3 flex items-center justify-between">
                        <label className="text-[#4CF214]" htmlFor="idDtLanc">DATA DE LANÇAMENTO</label>
                        <input className="p-2 text-gray-800 placeholder:text-gray-600" type="date"
                            id="idDtLanc"
                            name="dtLanc"
                            value={produto.dtLanc}
                            onChange={(e)=>handleChange(e)}
                            required />
                    </div>
                    <div className="my-3 flex items-center justify-between">
                        <label className="text-[#4CF214]" htmlFor="idValor">VALOR DO JOGO</label>
                        <input className="p-2 text-gray-800 placeholder:text-gray-600" type="number"
                            id="idValor"
                            name="valor"
                            placeholder="digite o valor do jogo..."
                            value={produto.valor}
                            onChange={(e)=>handleChange(e)}
                            required min={0} />
                    </div>
                    <div className="my-3 flex items-center justify-between">
                        <fieldset className="text-[#4CF214]">
                            <legend>MULTIPLAYER</legend>
                        <label htmlFor="idMultiTrue"> SIM </label>
                        <input type="radio" id="idMultiTrue" name="multi" value="sim" checked={produto.multi == "sim"} onChange={(e)=> handleChange(e)} />
                        <label htmlFor="idMultiFalse"> NÃO </label>
                        <input type="radio" id="idMultiFalse" name="multi" value="não" checked={produto.multi == "não"} onChange={(e)=> handleChange(e)} />
                        </fieldset>
                    </div>
                    <div className="my-3 flex items-center justify-between">
                        <label className="text-[#4CF214]" htmlFor="idImagem">IMAGEM</label>
                        <input className="p-2 text-[#4CF214]" type="file"
                            id="idImagem"
                            name="imagem"
                            onChange={(e)=> handleChangeIimage(e)}
                            required />
                    </div>
                    <div>
                        <button type="submit" 
                        className="block ms-auto me-6 bg-[#4CF214] hover:bg-[#4CF214] text-white font-bold py-2 px-4 rounded">CADASTRAR</button>
                    </div>

                </form>
                <div className="p-6 w-full">{/* Área da Imagem */}
                    <div className="w-48 h-48 bg-white m-auto">
                        <Image src={previewImage} alt="foto" width={200} height={200}/>
                    </div>
                </div>
                </div>
            </div>
        </main >
    )
}