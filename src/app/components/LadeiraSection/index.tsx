import Image from "next/image";
import Leandro from "public/leandro.webp"
import LeandroM from "public/leandro-mobile.webp"
import star from "public/star.svg"
import Logo from "public/logo-ready-to-go.svg"

export default function LadeiraSection() {
    return (
        <main className=" pt-[12.19rem] sm:pt-[2.32rem] sm:px-[1.56rem] relative z-0">

            <div className="flex sm:flex-col items-center justify-center gap-[5.91rem] sm:gap-[1.23rem] z-10 pb-[7.75rem] sm:pb-[2rem]">
                <Image className="sm:hidden" src={Leandro} alt="" />
                <div className="absolute mr-[38rem] -z-50 sm:top-auto sm:hidden">
                    <div className="w-[22.42381rem] h-[15.31038rem] rounded-full bg-[#9C12F1] blur-[155.71298217773438px] "></div>
                    <div className="w-[22.42381rem] h-[15.31038rem] rounded-full bg-[#F11268] blur-[155.71298217773438px] "></div>
                </div>
                <div className="max-w-[34.5rem]">
                    <h1 className="text-white text-[3rem] sm:text-[1.875rem] leading-[4rem] sm:leading-[2.68256rem] font-bold">
                        Quem é <br /> {" "} Leandro Ladeira?
                    </h1>
                    <div className="w-fit mt-2 px-4 py-1 bg-[#FCFCFC] rounded-lg flex gap-1 font-medium text-[#666666] sm:hidden">
                        <Image src={star} alt="" />
                        <p>
                            Criador do Método VTSD
                        </p>
                    </div>
                    <div className="text-[#F7F7F7] sm:text-[0.875rem] leading-[1.75rem] mt-[1.69rem] sm:mt-[.89rem]">
                        <p>
                            Leandro Ladeira é uma das mentes por trás de um dos maiores negócios digitais do Brasil. Tudo começa em 2014, quando iniciou um negócio despretensiosamente para lançar o curso online da fisioterapeuta pélvica Cátia Damasceno.
                        </p>
                        <p>
                            Começaram do zero, sem audiência, sem dinheiro e sem recursos. De lá para cá, criaram o maior canal de relacionamento do mundo no Youtube, com mais de 9 milhões de inscritos, e fizeram mais de 200 mil vendas do curso. É o único desse nicho &quot;pouco convencional&quot; que está entre os 30 maiores da Hotmart no mundo.
                        </p>
                    </div>
                </div>
                <Image className="sm:block hidden" src={LeandroM} alt="" />
            </div>
            <footer className="text-white text-[.75rem] flex sm:flex-col sm:items-center sm:gap-6 justify-between px-20 sm:px-0 py-8 sm:bg-transparent bg-[#363636]  opacity-30">
                <p>
                    © 2023 Ready To Go. Todos os direitos reservados.
                </p>
                <div className="flex gap-[.44rem]">
                    <p>
                        Designed by
                    </p>
                    <Image src={Logo} alt="" />
                </div>
            </footer>
        </main>
    );
}