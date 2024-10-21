import facebook from '@/img/facebook.png'
import instagram from '@/img/instagram.png'
import xtwiter from '@/img/twitterx.png'
import Image from 'next/image';



export default function Rodape() {
    return (
        <>

            <footer className="bg-white dark:bg-[#19AE06] ">
                <div className="mx-auto w-full max-w-screen-xl">
                    <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-1 h-60">
                        <h1 className='flex justify-center items-center text-4xl text-white mx-'>GAME STORE</h1>
                        <div className='flex mx-[40%] gap-3'>
                            <Image src={facebook} alt="" className='w-[100px] h-[50px]' />
                            <Image src={instagram} alt="" className='w-[100px] h-[50px]' />
                            <Image src={xtwiter} alt="" className='w-[100px] h-[50px]' />
                        </div>
                        <h6 className='text-white flex justify-center font-semibold'>@2024-direitos reservados</h6>
                    </div>
                </div>
            </footer>


        </>
    )
}