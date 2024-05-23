"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import SelectCustom from "../SelectCustom";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

interface FormState {
  name: string;
  email: string;
  phonenumber: string;
  whatsapp: string;
  ddi: string;
}

function CallToAction() {
  const [telReady, setTelReady] = useState("");
  const pathname = useSearchParams();
  const pathpage = usePathname();
  const conversion = pathname.get("conversion");
  const utm_campaign = pathname.get("utm_campaign");
  const utm_content = pathname.get("utm_content");
  const utm_medium = pathname.get("utm_medium");
  const utm_source = pathname.get("utm_source");
  const utm_term = pathname.get("utm_term");

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phonenumber: "",
    whatsapp: "",
    ddi: "+55",
  });

  const handleDdi = (ddi: any) => {
    setForm({
      ...form,
      ddi: ddi,
    });
  };

  const phoneMask = (value: any) => {
    if (!value) return "";

    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  };

  const handlePhone = (whatsapp: any) => {
    let input = whatsapp.target;
    input.value = phoneMask(input.value);

    setForm({
      ...form,
      whatsapp: whatsapp.target.value,
    });
  };

  function getCookie(name: string) {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      let parts = cookie.split("=");
      if (parts[0] === name) {
        return parts[1];
      }
    }
    return null;
  }

  const ck_xid = getCookie("_#9r2r6a");

  useEffect(() => {
    const phone_number = form.ddi + form.whatsapp;
    setTelReady(phone_number.replace(/\D/g, ""));
  }, [form.ddi, form.whatsapp, telReady]);

  return (
    <form
      className="flex flex-col justify-center items-center "
      method="POST"
      action="https://readytogo59637.activehosted.com/proc.php"
    >
      <input type="hidden" name="act" value="sub" />
      <input type="hidden" name="f" value="10" />
      <input type="hidden" name="or" value="0b2a0fe8b618557e119630b0091d6aa9" />
      <input type="hidden" name="field[10]" value={utm_campaign ?? ""} />
      <input type="hidden" name="field[11]" id="utm_source" value={utm_source ?? ""} />
      <input type="hidden" name="field[12]" id="utm_medium" value={utm_medium ?? ""} />
      <input type="hidden" name="field[13]" id="utm_content" value={utm_content ?? ""} />
      <input type="hidden" name="field[14]" id="utm_term" value={utm_term ?? ""} />
      <input type="hidden" name="field[15]" id="conversion" value={conversion ?? ""} />
      <input type="hidden" name="field[16]" id="sigla_produto" value="S10X" />
      <input type="hidden" name="field[17]" id="versao_pico" value="L2" />
      <input type="hidden" name="field[18]" id="pathpage" value={pathpage ?? ""} />
      <input type="hidden" name="field[19]" id="url_redirect" value="/" />
      <input type="hidden" name="field[20]" id="type_redirect" value="/" />
      <input type="hidden" name="field[24]" id="ck_xid" value={ck_xid ?? ""} />
      <div className="w-full flex flex-col gap-4 lg:gap-5 py-5">
        <input
          className="h-[40px] lg:h-[50px] text-black px-3 lg:px-5 rounded-lg w-full"
          type="text"
          required
          name="name"
          id="name"
          placeholder="Nome completo *"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="h-[40px] lg:h-[50px] text-black px-3 lg:px-5 rounded-lg w-full"
          type="email"
          required
          name="email"
          id="email"
          placeholder="Insira seu melhor E-mail *"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <div className="flex gap-[.5rem]">
          <SelectCustom handleDdi={handleDdi} />
          <input
            type={"tel"}
            placeholder="Seu WhatsApp"
            className="p-4 w-full rounded-lg text-black"
            maxLength={15}
            onChange={(e) => handlePhone(e)}
            required
          />
          <input type="hidden" value={telReady} name="phone" />
        </div>
      </div>
      <div className="max-w-[50rem] w-full p-4 ">
        <button
          type="submit"
          className="py-6 sm:py-[.86rem] max-w-[43.375rem] w-full bg-[#F7F7F7] rounded-lg text-[#120E17] text-[1.375rem] sm:text-[0.90044rem] font-bold hover:scale-105"
        >
          <p className={sora.className}>
            Quero assistir o vídeo
          </p>
        </button>
      </div>
    </form>
  );
}

export default CallToAction;
