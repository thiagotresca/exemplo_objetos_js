const array = 
[
{
"ID": 1,
"Descricao": "Importacao de arquivos de fundos",
"Data Maxima de conclusao": "2019-11-10 12:00:00",
"Tempo estimado": "2 horas",
},
{
"ID": 2,
"Descricao": "Importacao de dados da Base Legada",
"Data Maxima de conclusao": "2019-11-11 12:00:00",
"Tempo estimado": "4 horas",
},
{
"ID": 3,
"Descricao": "Importacao de dados de integracao",
"Data Maxima de conclusao": "2019-11-11 08:00:00",
"Tempo estimado": "6 horas",
},
]

const dataMinima = new Date("2019-11-10 09:00:00")
const dataMaxima = new Date("2019-11-11 12:00:00")
function returnJobs() {
    array.map((item) => {
      let data = new Date(item["Data Maxima de conclusao"])
  
      if(data >= dataMinima && data <= dataMaxima) {
        console.log('esta dentro do limite')
      }
    })
}