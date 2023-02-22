import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import carta from "./carta.jpg"
import "./bootstrap.css"

function Carta() {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="imagen" src={carta} />
      <Card.Body>
       
        <Card.Title>Carta Astral</Card.Title>
        <Card.Text>
         Con tu fecha, lugar y hora de nacimiento tenés la posibilidad de conocer más de vos.
        </Card.Text>
        <Button variant="primary"> Quiero!</Button>
      </Card.Body>
    </Card>
  );
}

export default Carta;