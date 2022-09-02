import React from 'react'
import ReactDOM from 'react-dom'
import Pedido from './Pedido'
import Cartao from './Cartao'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
const App = () => {
  return (
    // componente principal
    <div class='container border rounded mt-2'>
      <div className='row border-bottom m-2'>
        <h1 className='display-5 text-center'>Seus pedidos</h1>
      </div>
      {/* linha para o primeiro pedido */}
      <div className="row">
        <div className="col-sm-8 col-md-6 m-2">
          {/* aqui vai entrar o primeiro pedido */}
          <Cartao
            cabecalho="22/04/2021">
            <Pedido 
              icone="fa-solid fa-hdd fa-2x" 
              titulo="SSD" 
              descricao="SSD Kingston A400 - SATA"/>
          </Cartao>
        </div>
      </div>

      {/* linha para o segundo pedido */}
      <div className="row">
        <div className="col-sm-8 col-md-6 m-2">
          {/* aqui vai ficar o segundo pedido */}
          <Cartao
            cabecalho="22/04/2022">
            <Pedido 
              icone="fa-solid fa-book fa-2x"
              titulo="Livro" 
              descricao="Concrete Mathematics - Donald Knuth"
            />
          </Cartao>
        </div>
      </div>

      {/* linha para o terceiro pedido */}
      <div className="row">
        <div className="col-sm-8 col-md-6 m-2">
          {/* aqui vai ficar o terceiro pedido */}
          {/* Cartao[cabecalho=22/05/2022] */}
          <Cartao cabecalho="22/05/2022">
            <Pedido 
              icone="fa-solid fa-laptop fa-2x"
              titulo="Notebook" 
              descricao="Notebook Dell - 8Gb - i5"
            />
          </Cartao>
        </div>
      </div>

    </div>
    
  )
}


ReactDOM.render(
  <App />,
  document.querySelector('#root')
)