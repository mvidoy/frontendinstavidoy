//PORTA DA APLICAÇÃO
/*
TUDO IRÁ RODAR JAVA SCRIPT.

yarn create react-app frontend
Apagar os arquivos: App.css, App.test.js, index.css, logo.svg, serviceWorker.js.
<div id="root"></div> => Todo o codigo react vai ficar dentro dessa <div>.

yarn start => Inicializa e Carrega a aplicação no Navegador.
yarn add react-router-dom => Responsável por tratar as rotas da apliacação.

yarn add axios ==> Trata os dados vindo da API (backend)

yarn add socket.io-client ==> Tratar as atualização em tempo real.

*/

import React from 'react';
import ReactDOM from 'react-dom'; //Integração do React com Navegador (Browser), arvore de elementos.
//import './index.css';
import App from './App';
import './global.css'; //importa o arquivo global da styles, que nós criamos.
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root')); //coloca o ReactDOM dentro da DOM.

//serviceWorker.unregister();