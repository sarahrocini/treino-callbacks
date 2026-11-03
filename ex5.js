//Exercício 5: Primeira Callback Assíncrona com setTimeout ⏳

function simularDownload(nomeArquivo, callbackConclusao) {
  console.log(`Iniciando download de ${nomeArquivo}...`);

  setTimeout(() => {
    callbackConclusao();
  }, 1500);
}

simularDownload("dados_clientes.csv", () => {
  console.log("Download finalizado com sucesso no disco!");
});