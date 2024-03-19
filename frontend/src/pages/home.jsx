import React from 'react'
import Img1 from '../assets/images/img1.jpeg'
import { Container, Row, Col, Button } from "reactstrap";
import {  } from "module";
import Img2 from '../assets/images/img2.jpg'
import './home.css'
const home = () => {
  return (
    <>
    <Container>
      <Row>
      <div className='home_img'>
        <img src={Img1} alt="" />
      </div>
      </Row>
      </Container>
      <Row>
      <Col lg='6'>
        <h1 className='home_title1'>Des services<br/> professionnels et un<br/> centre de contact<br/> intelligent</h1>
      </Col>
      <Col lg='6'>
        <p className='home_title2'>Profficiis offre des services professionnels de haute qualité et un centre<br/> de contact intelligent pour répondre aux besoins de votre entreprise.<br/> Nous sommes là pour vous aider à réussir.</p>
        
        <div className="btns d-flex  gap-3">
          <Button className='btn1'>Découvrir</Button>
          <Button className='btn2'>En savoir plus</Button>
        </div>
      </Col>
    </Row>
    <div className="horizontal-line">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

    <Container>
      <Row>
    <Col lg='6'>
    <div className='home_img2'>
        <img src={Img2} alt="" />
      </div>

     
    </Col>
    
      <Col lg='6'>
      <h1 className='home_title3'>Notre Mission: Fournir des services professionnels de qualité</h1>
      <p className='home_par'>Profficiis est une entreprise spécialisée dans les services professionnels et le centre de contact intelligent.
         Nous nous engageons à fournir des solutions de haute qualité pour répondre aux besoins de nos clients.
          Avec notre expertise et notre technologie de pointe, nous aidons les entreprises à atteindre leurs objectifs et à se démarquer de la concurrence.</p>
          <div className="btns d-flex  gap-3">
      <Button className='btn1'>En savoir plus</Button>
      <Button className='btn3'>Inscrivez-vous {'>'} </Button>
      </div>
    </Col>
    </Row>
    </Container>
    <Container>
    <Row>
      <div className="cards">
      <Col lg='3'>
      
   <div className="card_body">
      <h5 className="card_title"><i className="ri-archive-fill"></i></h5>
      <h6 className="card_subtitle "> Découvrez nos services professionnels  </h6>
      <h6 className="card_subtitles ">  de qualité </h6>
      
      <p className="card-text">Profficiis offre une large gamme de services professionnels pour répondre à vos besoins spécifiques. Que vous ayez besoin d'une assistance administrative,
       de services de centre d'appels ou de solutions de gestion de la relation client, nous sommes là pour vous aider.</p>
    </div>
</Col>
<Col lg='3'>
      
      <div className="card_body">
         <h5 className="card_title"><i className="ri-archive-fill"></i></h5>
         <h6 className="card_subtitle "> Optimisez votre relation client avec notre   </h6>
         <h6 className="card_subtitles ">  centre de contact intelligent </h6>
         
         <p className="card-text">Notre centre de contact intelligent utilise les dernières technologies pour offrir une expérience client exceptionnelle. Grâce à notre chatbot et à notre équipe d'experts, nous sommes en mesure de répondre rapidement et efficacement aux besoins de vos clients.</p>
       </div>
   </Col>
   <Col lg='3'>
      
      <div className="card_body">
         <h5 className="card_title"><i className="ri-archive-fill"></i></h5>
         <h6 className="card_subtitle ">Restez informé avec notre section  </h6>
         <h6 className="card_subtitles ">  de blog </h6>
         
         <p className="card-text">Notre section de blog est remplie d'articles et d'actualités pertinents pour vous tenir au courant des dernières tendances et des meilleures pratiques dans le domaine des services professionnels. Rejoignez notre communauté et ne manquez aucune mise à jour.</p>
       </div>
   </Col>
   </div>
    </Row>
    </Container>

    
    </>
  )
}

export default home
