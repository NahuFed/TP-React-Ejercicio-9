import React from 'react';
import Cards from './Cards';
import { Row } from 'react-bootstrap';

const GrillaCards = ({arrayObjetos}) => {
    return (
        <>
        <Row className='mt-5'>
            {
                arrayObjetos.map((objeto,indiceObjeto)=><Cards objeto={objeto} key={indiceObjeto} ></Cards>)
            }

        </Row>
           
        </>
    );
};

export default GrillaCards;