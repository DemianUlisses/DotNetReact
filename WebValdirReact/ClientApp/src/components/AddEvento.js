import React, { Component } from 'react';

export class Evento {
    constructor() {
        this.id = 0;
        this.descricao = "";
        this.quantidade = 0;
           }
}

export class AddEvento extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "", evento: new Evento(), loading: true };
        this.intialize();

        this.handleSalve = this.handleSalve.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    async intialize() {

        var id = this.props.match.params["id"];
        if (id > 0) {
            const response = await fetch('api/Eventos/' + id);
            const data = await response.json();
            this.setState({ title: "Edit", evento: data, loading: false });
        }
        else {

            this.state = { title: "Create", evento: new Evento(), loading: false };
        }
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm();

        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3>Eventos</h3>
                {contents}
            </div>
        );
    }


    handleSalve(event) {
        event.preventDefault();

        const data = new FormData(event.target);

        if (this.state.evento.id) {
            const response1 = fetch('api/Eventos/' + this.state.evento.id, { method: 'PUT', body: data });
            this.props.history.push('/fetch-evento');
        }
        else {
            const response2 = fetch('api/Eventos/', { method: 'POST', body: data });
            this.props.history.push('/fetch-evento');
        }
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.history.push('/fetch-evento');
    }

    renderCreateForm() {
        return (
            <form onSubmit={this.handleSalve}>
                <div className="form-group row">
                    <input type="hidden" name="id" value={this.state.evento.id} />
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <p>Evento</p>
                        <input className="form-control" type="text" name="descricao" defaultValue={this.state.evento.descricao} required />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <p>Data Evento</p>
                        <input className="form-control" type="datetime-local" name="nome" defaultValue={this.state.evento.nome} required />
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-md-6">
                        <p>Quantidade</p>
                        <input className="form-control" type="text" name="quantidade" defaultValue={this.state.evento.quantidade} required />
                    </div>
                </div>
                
                <div className="form-group">
                    <button type="submit" className="btn btn-success" value={this.state.evento.id}>Salvar</button>
                    <button className="btn btn-danger" onClick={this.handleCancel}>Cencelar</button>
                </div>
            </form>

        );
    }

}


