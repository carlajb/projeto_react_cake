import {Switch, Route, Router} from 'react-router-dom';
import Produtos from './pages/produtos';
import Pedidos from './pages/pedidos';
import Pagina from './pages/pginicial';





function Rotas() {
    return (
       
        <Switch>
          
            <Route exact path="/produtos" component={Produtos} />
      
            <Route exact path="/Pedidos" component={Pedidos} />

            <Route exact path="/Pginicial" component={Pagina} />

            
          
           
            
        </Switch>
      
    );
}  

export default Rotas; 




/*import {Switch, Route} from 'react-router-dom';
import Produtos from './pages/produtos';
import Pedidos from './pages/pedidos';

function Rotas(){
    return(
        <Switch>
            <Route exact path="/" component={Produtos} />
            <Route exact path="/" component={Pedidos} />
        </Switch>
    );
}

export default Rotas;*/