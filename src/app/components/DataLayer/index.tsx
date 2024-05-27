import React, { useEffect } from "react";

interface Props {
  type_page: string;
  type_content: string;
  operacao: string;
  versao_pico: string;
  id_produto: string;
}

function DataLayer({
  type_page,
  type_content,
  operacao,
  versao_pico,
  id_produto,
}: Props) {
  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        (window as any).dataLayer.push({
          event: "dtrtg",
          type_page: type_page,
          // Exemplo:
          //'geral','captura','confirme','confirmado','cpl','venda','blog'

          type_content: type_content,
          // Exemplos:
          //(captura): 'isca','webnario','bot','pico','aula'
          //(cpl):	'aovivo','gravado'
          //(blog):	'resultados','conteúdo'
          //(venda):'curta','longa'

          operacao: operacao,
          // Exemplo: 'pico','ppt'

          versao_pico: versao_pico,
          // Exemplo: 'L1','L2','L3','L...'

          id_produto: id_produto,
          // Exemplo: '12345', 'abcde'
        });
      }
    }, 1500);
  }, [type_page, type_content, operacao, versao_pico, id_produto]);
  return null;
}

export default DataLayer;
