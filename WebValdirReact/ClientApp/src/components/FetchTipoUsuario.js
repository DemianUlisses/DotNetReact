import React, { Component } from "react"
import { Link } from 'react-router-dom'

export class FetchTipoUsuario extends Component {
    static displayName = "TipoUsuarios";

    constructor() {
        super();
        this.state = { tipousuarios: [], loading: true }
    }

    componentDidMount() {
        this.populaUsuarioData();
    }

    static handleEdit(id) {
        window.location.href = "/tipousuario/edit/" + id;
    }

    static handleDelete(id) {
        if (!window.confirm("Você deseja deletar o usuario : " + id)) {
            return;
        }
        else {
            fetch('api/tipousuarios/' + id, { method: 'delete' })
                .then(json => {
                    window.location.href = "fetch-tipousuario";
                    alert('Deletado com Sucesso!');
                })
        }
    }

    static renderUsuariosTabela(tipousuarios) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel" >
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {tipousuarios.map(prod =>
                        <tr key={prod.id}>
                            <td>{prod.id}</td>
                            <td>{prod.descricao}</td>
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
            : FetchTipoUsuario.renderUsuariosTabela(this.state.tipousuarios);

        return (
            <div>
                <h1 id="tabelLabel" >Tipo Usuários</h1>
                <p>Tela de Listagem de Usuários</p>
                <p>
                    <Link to="/add-tipousuario">Cadastrar Tipo de Usuários</Link>
                </p>
                {contents}
            </div>
        );
    }

    async populaUsuarioData() {
        const response = await fetch('api/TipoUsuarios');
        const data = await response.json();
        this.setState({ tipousuarios: data, loading: false });
    }

}