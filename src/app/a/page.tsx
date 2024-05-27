"use client";
import Image from "next/image";
import LadeiraSection from "../components/LadeiraSection";
import SvgL from "public/svg-left.svg"
import SvgR from "public/svg-right.svg"
import SvgLm from "public/svg-left-mobi.svg"
import SvgRm from "public/svg-right-mobi.svg"
import Logo from "public/logo.svg"
import { useState } from "react";
import ButtonCustom from "../components/ButtonCustomCaptura";
import FormInfusion from "../components/FormInfusionCaptura";
import DataLayer from "@/app/components/DataLayer";
import React, { ReactNode } from 'react';

interface ModalProps {
    show: boolean;
    setShow: (show: boolean) => void;
    children: ReactNode;
}



const Modal: React.FC<ModalProps> = ({ show, setShow, children }) => {
    const handleClose = () => setShow(false);

    return show ? (
        <div
            className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50"
            onClick={handleClose}
        >
            <div className="absolute -z-50 sm:top-auto sm:hidden">
                <div className="w-[28.42381rem] h-[18.31038rem] rounded-full bg-[#9C12F1] blur-[155.71298217773438px] "></div>
                <div className="w-[28.42381rem] h-[18.31038rem] rounded-full bg-[#F11268] blur-[155.71298217773438px] "></div>
            </div>
            <div
                className="bg-top rounded-xl shadow-lg max-w-lg w-full relative border border-[#45345e] bg-black"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-4 text-white text-[3rem]"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    ) : null;
};

export default function PageA() {
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
        setShowModal(true);
    };

    return (
        <main className="relative z-0 overflow-y-hidden bg-black">
            <DataLayer
                type_page="captura"
                id_produto="1817832"
                operacao="ppt"
                type_content="isca"
                versao_pico="ppt"
            />
            <section className=" w-full pt-[12.81rem] sm:pt-[5.06rem]">
                <section className="max-w-[55.5rem] sm:max-w-[20.75rem] mx-auto rounded-[1.25rem] gradient-top p-[1px] ">
                    <div className="p-[4.38rem] sm:px-[1.68rem] w-full bg-[#000] rounded-[1.25rem] pb-[6.37rem] sm:pb-[1.59rem]">
                        <Image className=" w-fit sm:w-[14.08406rem] mx-auto -mt-[5.9rem] sm:-mt-[5.3rem] px-8 sm:px-6 bg-logo" src={Logo} alt="" />
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
                    <div className="flex justify-center relative z-50">
                        <ButtonCustom handleShowModal={handleShowModal} />
                    </div>
                </section>
            </section>
            <div className="relative z-20">
                <LadeiraSection />
            </div>
            <Image className="absolute top-0 sm:hidden  h-full" src={SvgL} alt="" />
            <Image className="absolute bottom-0 right-0 sm:hidden" src={SvgR} alt="" />
            <Image className="absolute top-0 sm:block hidden " src={SvgLm} alt="" />
            <Image className="absolute bottom-0 right-0 sm:block hidden " src={SvgRm} alt="" />
            <Modal show={showModal} setShow={setShowModal}>
                <div className="w-full flex flex-col">
                    <div className="px-10 py-12">
                        <Image src={Logo} className="lg:w-auto w-[126px]" alt="Logo" />
                        <div>
                            <p className="text-[1.25rem] sm:text-[1rem] text-white mt-5 font-semibold">
                                Coloque seu e-mail para assistir a aula
                            </p>
                        </div>
                        <FormInfusion />
                    </div>
                </div>
            </Modal>
        </main>
    );
}