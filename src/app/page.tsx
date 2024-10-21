import Image from "next/image";
import banner from "@/img/bannerGamer.jpg";

export default function Home() {
  return (
    <main>
    <Image src={banner} alt="" className=' w-full h-[500px]' />

  {/* Cards  */}

<section className="container mx-20 p-6 mb-32">
  <div className="grid grid-cols-3 gap-6">
      <div className="bg-[#4B3F3F] p-4 rounded w-[300px]">
          <h2 className="text-2xl font-semibold mb-3 text-center text-[#4CF214]">JOGO-1</h2>
          <Image src={banner} alt="" className='w-[200px] h-[150px] mx-6' />
          <p className="tex-center text-[#4CF214]">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
          <button className="bg-[#4CF214] text-black font-bold text-xl  w-[150px] h-[40px] rounded mt-6 inline-block mx-16">Saiba mais</button>
      </div>

      <div className="bg-[#4B3F3F] p-4 rounded w-[300px]">
          <h2 className="text-2xl font-semibold mb-3 text-center text-[#4CF214]">JOGO-2</h2>
          <Image src={banner} alt="" className='w-[200px] h-[150px] mx-6' />
          <p className="tex-center text-[#4CF214]">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
          <button className="bg-[#4CF214] text-black font-bold text-xl w-[150px] h-[40px] rounded mt-6 inline-block mx-16">Saiba mais</button>
      </div>

      <div className="bg-[#4B3F3F] p-4 rounded w-[300px]">
          <h2 className="text-2xl font-semibold mb-3 text-center text-[#4CF214]">JOGO-3</h2>
          <Image src={banner} alt="" className='w-[200px] h-[150px] mx-6' />
          <p className="tex-center text-[#4CF214]">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
          <button className="bg-[#4CF214] text-black font-bold text-xl  w-[150px] h-[40px] rounded mt-6 inline-block mx-16">Saiba mais</button>
      </div>
  
  </div>
</section>     
</main>
  );
}
