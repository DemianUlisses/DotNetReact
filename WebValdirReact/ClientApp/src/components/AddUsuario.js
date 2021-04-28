import React, { Component } from 'react';

export class Usuario {
    constructor() {
        this.id = 0;
        this.nome = "";
        this.email = "";
        this.sexo = "";
    }
}

export class AddUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "", usuario: new Usuario(), loading: true };
        this.intialize();

        this.handleSalve = this.handleSalve.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    async intialize() {

        var id = this.props.match.params["id"];
        if (id > 0) {
            const response = await fetch('api/Usuarios/' + id);
            const data = await response.json();
            this.setState({ title: "Edit", usuario: data, loading: false });
        }
        else {

            this.state = { title: "Create", usuario: new Usuario(), loading: false };
        }
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm();

        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3>Usuário</h3>
                {contents}
            </div>
        );
    }


    handleSalve(event) {
        event.preventDefault();

        const data = new FormData(event.target);

        if (this.state.usuario.id) {
            const response1 = fetch('api/Usuarios/' + this.state.usuario.id, { method: 'PUT', body: data });
            this.props.history.push('/fetch-usuario');
        }
        else {
            const response2 = fetch('api/Usuarios/', { method: 'POST', body: data });
            this.props.history.push('/fetch-usuario');
        }
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.history.push('/fetch-usuario');
    }

    renderCreateForm() {
        return (
            <form onSubmit={this.handleSalve}>
                <div className="form-group row">
                    <input type="hidden" name="id" value={this.state.usuario.id} />
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <p>Nome</p>
                        <input className="form-control" type="text" name="Usuario" defaultValue={this.state.usuario.nome} required />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <p>Email</p>
                        <input className="form-control" type="text" name="Email" defaultValue={this.state.usuario.email} required />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <p>Sexo</p>
                        <input className="form-control" type="text" name="Sexo" defaultValue={this.state.usuario.sexo} required />
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success" value={this.state.usuario.id}>Salvar</button>
                    <button className="btn btn-danger" onClick={this.handleCancel}>Cencelar</button>
                </div>
            </form>

        );
    }

}


