import React, { Component } from 'react';

export class TipoUsuario {
    constructor() {
        this.id = 0;
        this.descricao = "";
    }
}

export class AddTipoUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "", tipousuario: new TipoUsuario(), loading: true };
        this.intialize();

        this.handleSalve = this.handleSalve.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    async intialize() {

        var id = this.props.match.params["id"];
        if (id > 0) {
            const response = await fetch('api/TipoUsuarios/' + id);
            const data = await response.json();
            this.setState({ title: "Edit", tipousuario: data, loading: false });
        }
        else {

            this.state = { title: "Create", tipousuario: new TipoUsuario(), loading: false };
        }
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm();

        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3>Tipo</h3>
                {contents}
            </div>
        );
    }



    handleSalve(event) {
        event.preventDefault();

        const data = new FormData(event.target);

        if (this.state.tipousuario.id) {
            const response1 = fetch('api/TipoUsuarios/' + this.state.tipousuario.id, { method: 'PUT', body: data });
            this.props.history.push('/fetch-tipousuario');
        }
        else {
            const response2 = fetch('api/TipoUsuarios/', { method: 'POST', body: data });
            this.props.history.push('/fetch-tipousuario');
        }
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.history.push('/fetch-tipousuario');
    }

    renderCreateForm() {
        return (
            <form onSubmit={this.handleSalve}>
                <div className="form-group row">
                    <input type="hidden" name="id" value={this.state.tipousuario.id} />
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <input className="form-control" type="text" name="descricao" defaultValue={this.state.tipousuario.descricao} required />
                    </div>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-success" value={this.state.tipousuario.id}>Salvar</button>
                    <button className="btn btn-danger" onClick={this.handleCancel}>Cencelar</button>
                </div>
            </form>

        );
    }

}
