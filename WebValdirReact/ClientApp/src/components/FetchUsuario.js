import React, { Component } from "react"
import { Link } from 'react-router-dom'

export class FetchUsuario extends Component {
    static displayName = "Usuarios";

    constructor() {
        super();
        this.state = { usuarios: [], loading: true }
    }

    componentDidMount() {
        this.populaUsuarioData();
    }

    static handleEdit(id) {
        window.location.href = "/usuario/edit/" + id;
    }

    static handleDelete(id) {
        if (!window.confirm("Você deseja deletar o usuario : " + id)) {
            return;
        }
        else {
            fetch('api/usuarios/' + id, { method: 'delete' })
                .then(json => {
                    window.location.href = "fetch-usuario";
                    alert('Deletado com Sucesso!');
                })
        }
    }

    static renderUsuariosTabela(usuarios) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel" >
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Sexo</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(prod =>
                        <tr key={prod.id}>
                            <td>{prod.id}</td>
                            <td>{prod.nome}</td>
                            <td>{prod.email}</td>
                            <td>{prod.sexo}</td>
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
            : FetchUsuario.renderUsuariosTabela(this.state.usuarios);

        return (
            <div>
                <h1 id="tabelLabel" >Usuarios</h1>
                <p>Tela de Listagem de Usuarioss</p>
                <p>
                    <Link to="/add-usuario">Cadastrar Usuario</Link>
                </p>
                {contents}
            </div>
        );
    }

    async populaUsuarioData() {
        const response = await fetch('api/Usuarios');
        const data = await response.json();
        this.setState({ usuarios: data, loading: false });
    }

}