import React from 'react';
import { Container, Row, Col} from 'reactstrap';

const AboutSection = () => {
  return (
    <Container>
        <h1 className='about-title'> About Elite Homes</h1>
    <Row className='about-section' role="row">
      
      <Col lg="3" className='about-col'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam fuga quo ipsum, pariatur perferendis quae?</p>
      </Col>
      <Col lg="3" className='about-col'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic corporis ipsum odio nesciunt magnam cum.</p>
      </Col>
      <Col lg="3" className='about-col'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, placeat.</p>
      </Col>
      <Col lg="3" className='about-col'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, illum inventore eos vitae eveniet perspiciatis?
        </p>
      </Col>
    </Row>
  </Container>
  );
}

export default AboutSection;
