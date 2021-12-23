const array = [
    {
    "ID": 2,
    "Descrição": "Importação de dados da Base Legada",
    "Data Maxima de conclusao": "2019-11-11 12:00:00",
    "Tempo estimado de execucao em horas": 4,
    },
    {
    "ID": 1,
    "Descrição": "Importação de arquivos de fundos",
    "Data Maxima de conclusao": "2019-11-10 12:00:00",
    "Tempo estimado de execucao em horas": 2,
    },
    {
    "ID": 3,
    "Descrição": "Importação de dados de integração",
    "Data Maxima de conclusao": "2019-11-11 08:00:00",
    "Tempo estimado de execucao em horas": 6,
    },
  ]
  
  const dataMinima = new Date("2019-11-10 09:00:00")
  const dataMaxima = new Date("2019-11-11 12:00:00")
  
  let arrayFinal = []
  function calculaTempoExecucaoJobs (jobsSorteados) {

    let jobsSorteadosCopia = [...jobsSorteados]
    let contadorDeHoras = 0
    let arrayTemporario = []
  
    jobsSorteadosCopia.map( (job, index) => {
      contadorDeHoras = contadorDeHoras + job['Tempo estimado de execucao em horas']
  
      arrayTemporario.push(job)
  
      if(contadorDeHoras < 8) {
        jobsSorteadosCopia.splice(index, 1)
        return false
      }
  
      if(contadorDeHoras == 8) {
        jobsSorteadosCopia.splice(index, 1)
        arrayFinal.push(arrayTemporario)
        calculaTempoExecucaoJobs(jobsSorteadosCopia)
      }
  
      if(contadorDeHoras > 8) {
        arrayTemporario.pop()
        arrayFinal.push(arrayTemporario)
        calculaTempoExecucaoJobs(jobsSorteadosCopia)
      }
    })
    console.log(arrayFinal)
}

  function returnJobs() {
    // verifica se o job está dentro do periodo de execução
    let jobsDentroDoPeriodo = array.map((item) => {
      let data = new Date(item["Data Maxima de conclusao"])
  
      if(data >= dataMinima && data <= dataMaxima) {
        return item
      }
    })
  
    // faz um sort dos jobs de acordo com a data limite de conclusão
    let jobsSorteados = jobsDentroDoPeriodo.sort((a,b)=>{
      return new Date(a["Data Maxima de conclusao"]) - new Date(b["Data Maxima de conclusao"]);
    });
  
    calculaTempoExecucaoJobs(jobsSorteados)
  
  }
  function chamaFuncoes() {
    returnJobs()
    return arrayFinal
}