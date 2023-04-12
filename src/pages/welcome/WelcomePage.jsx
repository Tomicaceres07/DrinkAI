import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

export const WelcomePage = () => {
  return (
    <Container fluid className="welcome__container">
      <h1 className="welcome__title">Bienvenido a <br /> <img src="src/assets/drinks/cocktail.png" alt="Cocktail" className="welcome__title-cocktail"/>Drink<strong className="welcome__strong">AI</strong></h1>
      <h4 className="welcome__subtitle">Crea tus propios tragos con lo que tienes en tu casa, sin necesidad de saber de bartendería</h4>
      <Row className="welcome__row text-center">
        <Col className="welcome__col">
          <img src="src/assets/drinks/Gin.png" alt="Gin" className="welcome__drink-image"/>
          <p className="welcome__drink-name">Gin Tonic</p>
        </Col>
        <Col className="welcome__col">
          <img src="src/assets/drinks/Fernet.png" alt="Fernet" className="welcome__drink-image"/>
          <p className="welcome__drink-name">Fernet con Coca</p>
        </Col>
        <Col className="welcome__col">
          <img src="src/assets/drinks/Campari.png" alt="Campari" className="welcome__drink-image"/>
          <p className="welcome__drink-name">Campari con Naranja</p>
        </Col>
      </Row>
      <Row className="welcome__row text-center">
        <Col className="welcome__col">
          <img src="src/assets/drinks/Cerveza.png" alt="Cerveza" className="welcome__drink-image"/>
          <p className="welcome__drink-name">Cerveza</p>
        </Col>
        <Col className="welcome__col">
          <img src="src/assets/drinks/Vermut.png" alt="Vermut" className="welcome__drink-image"/>
          <p className="welcome__drink-name">Vermut</p>
        </Col>
        <Col className="welcome__col">
          <img src="src/assets/drinks/Whiskey.png" alt="Whiskey" className="welcome__drink-image"/>
          <p className="welcome__drink-name">Whiskey con hielo</p>
        </Col>
      </Row>
      <Row className="welcome__row text-center">
        <Col className="welcome__col">
          <img src="src/assets/drinks/Daikiri.png" alt="Daikiri" className="welcome__drink-image"/>
          <p className="welcome__drink-name">Daikiri</p>
        </Col>
        <Col className="welcome__col">
          <img src="src/assets/drinks/Vodka.png" alt="Vodka" className="welcome__drink-image"/>
          <p className="welcome__drink-name">Vodka con energizante</p>
        </Col>
        <Col className="welcome__col">
          <img src="src/assets/drinks/Aperol.png" alt="Aperol" className="welcome__drink-image"/>
          <p className="welcome__drink-name">Aperol Spritz</p>
        </Col>
      </Row>
      <p className="welcome__text-select">Selecciona los tragos que te gustan para que la Inteligencia Artificial pueda hacer mejores recomendaciones</p>
      <Link to="home" className="welcome__button-start">Comenzar</Link>
    </Container>
  )
}
