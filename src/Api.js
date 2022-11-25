import { useEffect, useState } from 'react';
import Formulario from './Formulario';
import Tabela from './Tabela';
import './Api.css';

function Api() {

  const registro = {
    codigo: 0,
    nome: '',
    nota: ''
  }

  const [objRegistro, setObjRegistro] = useState(registro)
  const [btnRegistrar, setBtnRegistrar] = useState(true)
  const [registros, setRegistros] = useState([])

  useEffect(()=>{
     fetch("http://localhost:8080/listar")
     .then(retorno => retorno.json())
     .then(retorno_convert => setRegistros(retorno_convert))
  }, [])

  const typing = (e) => {
    setObjRegistro({...objRegistro, [e.target.name]:e.target.value})
  }

  const registrar = () => {
    fetch('http://localhost:8080/registrar', {
      method: 'post',
      body: JSON.stringify(objRegistro),
      headers: {
        'Content-type' : 'application/json',
        'Accept' : 'application/json',
      }
    })

    .then(retorno => retorno.json())
    .then(retorno_convert => {
      if(retorno_convert.message !== undefined){
        alert(retorno_convert.message)

      }else{
        setRegistros([...registros, retorno_convert])
        clearForm()
      }
    })
  }

  const clearForm = (e) => {
    setObjRegistro(registro)
  }

  const selectRegistro = (i) => {
    setObjRegistro(registros[i])
    setBtnRegistrar(false)
  }

  const cancelRegistro = (e) => {
    setObjRegistro(registro)
    setBtnRegistrar(true)
  }

  const removerRegistro = () =>{
    fetch('http://localhost:8080/remover/' + objRegistro.codigo, {
      method: 'delete',
      headers: {
        'Content-type' : 'application/json',
        'Accept' : 'application/json',
      }
    })

    .then(retorno => retorno.json())

    let vetorTemp = [...registros]
    let i = vetorTemp.findIndex((r) => {return r.codigo === objRegistro.codigo})

    vetorTemp.splice(i, 1)
    setRegistros(vetorTemp)
    setObjRegistro(registro)
    setBtnRegistrar(true)

  }

  const alterarRegistro = () =>{
    fetch('http://localhost:8080/alterar', {
      method: 'put',
      body: JSON.stringify(objRegistro),
      headers: {
        'Content-type' : 'application/json',
        'Accept' : 'application/json',
      }
    })

    .then(retorno => retorno.json())
    .then(retorno_convert => {
      if(retorno_convert.message !== undefined){
        alert(retorno_convert.message)

      }else{
        let vetorTemp = [...registros]
        let i = vetorTemp.findIndex((r) => {return r.codigo === objRegistro.codigo})
        vetorTemp[i] = objRegistro
        setRegistros(vetorTemp)
        clearForm()
        setBtnRegistrar(true)
      }
    })
  }

  return (
    <div>
      <div className="header-home">
          <div className="title-home">
            <h1>Satoru</h1>
          </div>
        <div class="btn-header-home">
          <a href="index.html" target="_self"><div class="btns">Início</div></a>
          <div class="space-home"></div>
          <a href="myapi" target="_self"><div class="btns">Heleno</div></a>
          <div class="space-home"></div>
          <a href="index.html" target="_self"><div class="btns">Sobre</div></a>
          <div class="space-home"></div>
        </div>
      </div>
     
      <div>
        <Formulario botao={btnRegistrar} 
                    keyboardEvent={typing} 
                    registrar={registrar} 
                    obj={objRegistro} 
                    cancel={cancelRegistro}
                    remove={removerRegistro}
                    alterar={alterarRegistro}
        />
        <Tabela vetor={registros} select={selectRegistro} />
      </div>
    </div>
  );
}

export default Api;