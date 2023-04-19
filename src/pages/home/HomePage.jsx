import { Slider } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';
import { Ingredients } from 'src/components/ingredients/Ingredients';
import { CyanButton } from 'src/components/cyan-button/CyanButton';
import { Hr } from 'src/components/hr/Hr';

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
      <div className="home__background-image"></div>
      <Row className="home__slider-row">
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
      <Hr />
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
