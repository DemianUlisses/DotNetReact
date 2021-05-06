import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchProduto } from './components/FetchProduto';
import { AddProduto } from './components/AddProduto';
import { FetchUsuario } from './components/FetchUsuario';
import { AddUsuario } from './components/AddUsuario';
import { FetchTipoUsuario } from './components/FetchTipoUsuario';
import { AddTipoUsuario } from './components/AddTipoUsuario';
import { FetchEvento } from './components/FetchEvento';
import { AddEvento } from './components/AddEvento';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/fetch-produto' component={FetchProduto} />
                <Route path='/add-produto' component={AddProduto} />
                <Route path='/produto/edit/:id' component={AddProduto} />
                <Route path='/fetch-usuario' component={FetchUsuario} />
                <Route path='/add-usuario' component={AddUsuario} />
                <Route path='/usuario/edit/:id' component={AddUsuario} />
                <Route path='/fetch-tipoUsuario' component={FetchTipoUsuario} />
                <Route path='/add-tipousuario' component={AddTipoUsuario} />
                <Route path='/tipoUsuario/edit/:id' component={AddTipoUsuario} />
                <Route path='/fetch-evento' component={FetchEvento} />
                <Route path='/add-evento' component={AddEvento} />
                <Route path='/evento/edit/:id' component={AddEvento} />
            </Layout>
        );
    }
}
