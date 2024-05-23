import React from "react";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

interface Props {
  label?: string;
  handleShowModal?: () => void;
}

function ButtonCustom({
  label = "Entre para o Light Copy",
  handleShowModal,
}: Props) {
  const handleClick = () => {
    if (handleShowModal) {
      handleShowModal();
    }
  };
 
  return (
    <button onClick = { handleClick } className="py-6 sm:py-[.86rem] max-w-[43.375rem] w-full bg-[#F7F7F7] rounded-lg text-[#120E17] text-[1.375rem] sm:text-[0.90044rem] font-bold hover:scale-105">
      <p>
        Quero assistir o vídeo
      </p>
    </button>
  );
}

export default ButtonCustom;
