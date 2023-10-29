import { useEffect } from "react"

const WeatherScreen = () => {

  // {mode: "no-cors"}
    const getApi = async () => {
        try {
          const response = await fetch("http://api.weatherapi.com/v1/current.json?key=a95144281d174bbabd5192652232310&q=London", {headers: {'Content-Type': 'application/json'}});
          const data = await response.json();
          console.log( data )
        }
        catch (e) {
          console.log(e)
        }
      }

    useEffect(  () => {
        getApi()
    },[])


  return (
    <section className="flex justify-center mx-auto paddingYScreens max-w-[80rem] flex-wrap lg:flex-nowrap">
        <section className="flex flex-col items-center p-2 lg:w-1/2 margins">
        <h4 className="mb-2 text-right text-bold bounceTitles">
          Rafael Vendramini - Weather 
        </h4>





        </section>

        <section className="flex flex-col p-2 items-left margins animate-pingText">
        <p className="text-center whitespace-normal text-bold">
          Server Side - Host (Render) uses Cold Start (first access may take a few seconds to start)
        </p>
        <br /><br /><br />
        <p>Project developed from scratch
          <br /><br />
          •	JavaScript<br />
          •	Node<br />
          •	TypeScript<br />
          •	Mongo(Atlas for Prod) local for Dev<br />
          •	Express<br /><br />
          •	Private and Public Routes<br />
          •	Error handling<br />
          •	Authentication<br />
          •	Access level<br />
          •	Middleware, Hashers and Json Web Tokens<br />
          •	ErrorLog<br /><br />
        </p>
      </section>
    </section>
  )
}

export default WeatherScreen



// const url = 'https://exemplo.com/seu-endpoint';
// const data = { chave: 'valor' };

// const requestOptions = {
//   method: 'POST', // ou 'GET', 'PUT', 'DELETE', etc., dependendo da sua necessidade
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer seuToken', // Se necessário, adicione um token de autenticação
//     'Outro-Cabecalho': 'Valor-Outro-Cabecalho', // Adicione cabeçalhos personalizados conforme necessário
//   },
//   body: JSON.stringify(data), // Converte o objeto JSON em uma string JSON
// };

// fetch(url, requestOptions)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data); // Faça algo com a resposta JSON recebida
//   })
//   .catch(error => {
//     console.error('Erro:', error);
//   });