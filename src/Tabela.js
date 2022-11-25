function Tabela({vetor, select}){
    return(
        <table className="table" id="tableitens">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Nota</th>
                    <th>Selecionar</th>
                </tr>
            </thead>

            <tbody>
                {
                    vetor.map((obj, i) => (
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.nota}</td>
                            <td><button onClick={() => {select(i)}} className="btn btn-sucess">Selecionar</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Tabela;