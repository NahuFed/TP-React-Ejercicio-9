import React from 'react';
import { Card, Button, Col} from 'react-bootstrap';

const Cards = ({objeto}) => {
    return (
<Col xs={12} md={6} lg={4} className='mb-4' >
        <Card>
          <Card.Header>
            <Card.Title>Mascota: {objeto.mascota}</Card.Title>
            <Card.Subtitle>Dueño: {objeto.duenio}</Card.Subtitle>
          </Card.Header>
          <Card.Body >
          <div>
            <p><b>Fecha:</b> {objeto.fecha}</p>
            <p><b>Hora:</b> {objeto.hora}</p>
            <p><b>Sintomas:</b> {objeto.sintomas}</p>
          </div>
            
          </Card.Body>
          <Card.Footer className="d-flex justify-content-end">
            <Button variant="danger">
              Borrar
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    );
};

export default Cards;