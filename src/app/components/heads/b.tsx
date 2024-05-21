import Image from "next/image"
import Logo from "public/logo.svg"

export default function HeadB() {
    return (
        <main className=" w-full pt-[8.31rem] sm:pt-[5.06rem] bg-b">
            <section className="max-w-[55.5rem] sm:max-w-[20.75rem] mx-auto rounded-[1.25rem] p-[1px] ">
                <div className="p-[4.38rem] sm:px-[1.68rem] w-full  pb-[6.37rem] sm:pb-[1.59rem] border-fade z-10">
                    <div className="relative ">
                        <Image className=" w-fit sm:w-[14.08406rem] mx-auto -mt-[5.9rem]  sm:-mt-[5.3rem] px-8 sm:px-6 bg-logo" src={Logo} alt="" />
                    </div>
                    <h1 className="text-[#FF348D] text-[2.25rem] sm:text-[1.3235rem] font-bold leading-[2.75rem] sm:leading-[1.76469rem] mt-[4rem] sm:mt-[2rem]">
                        Aprenda como aumentar consideravelmente o número de visualizações dos seus stories, e deixar a sua audiência viciada em você.
                    </h1>
                    <p className="text-[#DFDFDF] text-[1.5rem] sm:text-[0.875rem] mt-[1.44rem] sm:mt-[.96rem] leading-8 sm:leading-[1.125rem] font-bold">
                        E consequentemente {" "} <span className="text-[#FF348D]">melhorar</span> o engajamento e se conectar
                        de verdade com seu público e conseguir fazer mais vendas.
                    </p>
                    <p className="text-[#DFDFDF] text-[1.5rem] sm:text-[0.875rem] font-bold mt-12 sm:mt-[1.06rem]">
                    Assista ao vídeo e descubra como bombar o seu Instagram
                    </p>
                </div>
                    <div className="w-[52.8125rem] h-[35.6875rem] rotate-[-17.451deg] shrink-0 absolute top-0 bg-black blur-[104.9000015258789px] rounded-[52.8125rem]"></div>
                <div className="flex justify-center relative">
                    <button className="py-6 sm:py-[.86rem] max-w-[43.375rem] w-full bg-[#F7F7F7] rounded-lg text-[#120E17] text-[1.375rem] sm:text-[0.90044rem] font-bold hover:scale-105">
                        <p>
                        Quero assistir o vídeo
                        </p>
                    </button>
                </div>
            </section>
        </main>
    );
}
