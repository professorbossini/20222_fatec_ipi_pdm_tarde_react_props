const Cartao = (props) => {
  return(
    <div className="card">
      {/* cabeçalho do cartão */}
      <div className="card-header text-muted">
        {props.cabecalho}
      </div>
      <div className="card-body">
        {props.children}  
      </div>
    </div>
  )
}

export default Cartao

// <Cartao cabecalho="alguma coisa">
//   <div className="">
//     <p>oi</p>
//   </div>
// </Cartao>