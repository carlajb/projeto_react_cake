/*import React from 'react';
import Menu from './Components/Menu/index';
import {BrowserRouter} from 'react-router-dom'
import {container} from 'react-bootstrap';
import Rotas from './rotas';
import './App.css';

import Tabela from './Tabela';

export default class App extends React.Component{

    constructor(){
        super();
        this.state=({
            db: []
        });

        this.exibirProdutos();
    }

    exibirProdutos(){
        fetch("http://localhost/projeto/final_projeto/cakes/src/api/")
        .then((response)=>response.json())
        .then((responseJson)=>
        {
            this.setState({
                db: responseJson
            });
            
        })
    }

        <div>
              <tabela arrayprodutos="{this.state.db}"></tabela>
        </div>


<BrowserRouter>
<div className="App">
  <header>
    <Menu />
 
  </header>
    <main>
       <table />
      <container fluid>
        <Rotas />
         
      </container>
    </main>

   
</div>
</BrowserRouter>
        );
    }
}*/