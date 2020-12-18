
import { Form, Col, Row, Button, body, section, div, onclick } from 'react-bootstrap';


function Pedidos() {
 return (




   <Form.Group>
     <Form.Control type="text" placeholder="ESCOLHA SEU BOLO" readOnly />
     <Form.Control as="select" size="lg">
       <option placeholder="" />
       <option>Bolo de limao</option>
       <option>Bolo de laranja</option>
       <option>Bolo de coco</option>
       <option>Bolo de maracuja</option>
     </Form.Control>
     <br /><br /><br /><br /><br /><br /><br />

     <Form>
       <Form.Row>
         <Col xs={3}>
           <Form.Control type="text" placeholder="valor unidade  bolo R$10,00" readOnly />
         </Col>

         <Col xs={1}>
           <Form.Control as="select" size="lg" placeholder="Qtd" adOnly>
             <option placeholder="Qtd" adOnly />
             <option>1</option>
             <option>2</option>
             <option>3</option>
             <option>4</option>
           </Form.Control>
         </Col>

         <Col xs={1}>
           <Form.Control type="text" placeholder="R$" readOnly />
         </Col>
       </Form.Row>
     </Form>

     <Form.Row>
     </Form.Row>

     <br />
     <Button variant="primary" type="submit">
       Enviar
     </Button>

   
   </Form.Group>




 );
}




export default Pedidos







