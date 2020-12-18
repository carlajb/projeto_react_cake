import Menu from './Components/Menu/index';
import {BrowserRouter} from 'react-router-dom'
import {container} from 'react-bootstrap';
import Rotas from './rotas';
import './App.css';





function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Menu />
       
        </header>
          <main>
             <table />
             <img />
            <container fluid>
              <Rotas />
               
            </container>
          </main>
      
         
    </div>
    </BrowserRouter>
  );
}

export default App;
