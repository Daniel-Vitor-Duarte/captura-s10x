import Image from "next/image";
import HeadA from "../components/heads/a";
import LadeiraSection from "../components/LadeiraSection";
import SvgL from "public/svg-left.svg"
import SvgR from "public/svg-right.svg"
import SvgLm from "public/svg-left-mobi.svg"
import SvgRm from "public/svg-right-mobi.svg"


export default function PageA() {
    return (
        <main className="relative z-0 overflow-y-hidden bg-black">
                <HeadA />
            <div className="relative z-20">
                <LadeiraSection />
            </div>
            <Image className="absolute top-0 sm:hidden  h-full" src={SvgL} alt="" />
            <Image className="absolute bottom-0 right-0 sm:hidden" src={SvgR} alt="" />
            <Image className="absolute top-0 sm:block hidden " src={SvgLm} alt="" />
            <Image className="absolute bottom-0 right-0 sm:block hidden " src={SvgRm} alt="" />
        </main>
    );
}