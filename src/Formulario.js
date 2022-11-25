function Formulario({botao, keyboardEvent, registrar, obj, cancel, remove, alterar}){
    return(
        <div className="card-body">

            <h5 className="card-text">Avaliação do professor Heleno</h5>

            <form>
                <input value={obj.nome} onChange={keyboardEvent} name="nome" type="text" placeholder="Nome"  className="form-control" />
                <input value={obj.nota} onChange={keyboardEvent} name="nota" type="text" placeholder="Nota" className="form-control" />

                {
                    botao
                    ?
                    <input type="button" value="Registrar" className="btn btn-primary" onClick={registrar} />
                    :
                    <div>
                        <input type="button" value="Alterar"   className="btn btn-warning" onClick={alterar} />
                        <input type="button" value="Remover"   className="btn btn-danger" onClick={remove} />
                        <input type="button" value="Cancelar"  className="btn btn-secondary" onClick={cancel} />
                    </div>
                }
                
                
            </form>

        </div>
    )
}

export default Formulario;