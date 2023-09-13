import React, { Component } from 'react';
import imgHomeLogo from '../imagem/Webysther_20160322_-_Logo_UnB_(sem_texto).svg';


export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <h1>Sistemas de Eventos</h1>
            <h3> Under construction</h3>
            <img src={imgHomeLogo} />
      </div>
    );
  }
}
