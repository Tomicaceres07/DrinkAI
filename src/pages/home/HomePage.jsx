import { Slider } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';
import { Ingredients } from '../../components/ingredients/Ingredients';
import { CyanButton } from '../../components/cyan-button/CyanButton';

export const HomePage = () => {
  return (
    <Container fluid className="home__container">
      <div className="home__header">
        <h1 className="home__header-title"><img src="src/assets/icons/cocktail.png" alt="Cocktail" className="home__header-cocktail"/>Drink<strong>IA</strong></h1>
      </div>
      <div className="home__selected-ingredients">
        {/* Put here the selected ingredients  */}
        <p>Put here the selected ingredients</p>
        {/* TODO: If there isn't selected ingredients, put text saying "No selected ingredients", otherwise, show ingredients. */}
      </div>
      <img src="src/assets/background/homeDrink.png" alt="Background Drinks" className="home__background-image"/>
      <Row className="mw-100">
        <Col className="home__slider-container">
          <Row>
            <Col className="home__col-slider-name"><span className="home__slider-name">Pega poco</span></Col>
            <Col className="home__col-slider-name"><span className="home__slider-name">Pega mucho</span></Col>
          </Row>
          {/* TODO: Change state when change */}
          <Slider
            className="home__slider-level"
            size="small"
            step={1}
            min={1}
            max={5}
            defaultValue={2}
            aria-label="Small"
          />
        </Col>
        <Col className="home__slider-container px-0 ps-1 pe-2">
          <Row>
            <Col className="home__col-slider-name"><span className="home__slider-name">Más amargo</span></Col>
            <Col className="home__col-slider-name"><span className="home__slider-name">Más dulce</span></Col>
          </Row>
          {/* TODO: Change state when change */}
          <Slider
            className="home__slider-level"
            size="small"
            step={1}
            min={1}
            max={5}
            defaultValue={4}
            aria-label="Small"
    
          />
        </Col>
      </Row>
      <hr className="home__hr"/>
      <Ingredients 
        title="Recomendados"
      />
      <Ingredients 
        title="Licores"
      />
      <Ingredients 
        title="Licores"
      />
      <Ingredients 
        title="Licores"
      />
      <Ingredients 
        title="Licores"
      />
      <div className="home__end"></div>
      <CyanButton 
        title="Generar trago"
      />
    </Container>
  )
}
