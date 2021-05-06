import React, { Component } from "react"
import { Link } from 'react-router-dom'

export class FetchEvento extends Component {
    static displayName = "Evento";

    constructor() {
        super();
        this.state = { eventos: [], loading: true }
    }

    componentDidMount() {
        this.populaEventoData();
    }

    static handleEdit(id) {
        window.location.href = "/evento/edit/" + id;
    }

    static handleDelete(id) {
        if (!window.confirm("Você deseja deletar o evento : " + id)) {
            return;
        }
        else {
            fetch('api/eventos/' + id, { method: 'delete' })
                .then(json => {
                    window.location.href = "fetch-evento";
                    alert('Deletado com Sucesso!');
                })
        }
    }

    static renderEventosTabela(eventos) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel" >
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Data</th>
                        <th>Presente</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {eventos.map(prod =>
                        <tr key={prod.id}>
                            <td>{prod.id}</td>
                            <td>{prod.descricao}</td>
                            <td>{prod.nome}</td>
                            <td>{prod.quantidade}</td>
                            <td>
                                <button className="btn btn-success" onClick={(id) => this.handleEdit(prod.id)}>Edit</button> &nbsp;
                                <button className="btn btn-danger" onClick={(id) => this.handleDelete(prod.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        );

    }

    render() {
        let contents = this.state.loading
            ? <p><em> Carregando... </em> </p>
            : FetchEvento.renderEventosTabela(this.state.eventos);

        return (
            <div>
                <h1 id="tabelLabel" >Eventos</h1>
                <p>Tela de Listagem de Eventos</p>
                <p>
                <Link to="/add-evento">Cadastrar Evento</Link>
                </p>
                {contents}
            </div>
        );
    }

    async populaEventoData() {
        const response = await fetch('api/Eventos');
        const data = await response.json();
        this.setState({ eventos: data, loading: false });
    }

}