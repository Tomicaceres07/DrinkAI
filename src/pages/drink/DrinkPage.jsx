import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Hr } from 'src/components/hr/Hr';
import { Ingredient } from 'src/components/ingredient/Ingredient';
import { CyanButton } from 'src/components/cyan-button/CyanButton';


export const DrinkPage = () => {
  return (
    <Container fluid className="drink__container">
      <div className="drink__header">
        <Link to="/home" className="drink__header-link"><img src="src/assets/icons/back.png" alt="Back arrow" className="drink__header-back-arrow"/>Volver al inicio</Link>
      </div>
      <img src="src/assets/background/generatedDrink.png" alt="Generated Drink" className="drink__image-background"/>
      <div className="drink__details-div">
        <div className="drink__details-header">
          {/* TODO: Fill with ingredient data from API */}
          <h1 className="drink__details-name">El Kaiser</h1>
          <h4 className="drink__details-new">Nuevo trago creado!</h4>
          <div className="text-center">
            <h4 className="drink__details-probability">58% probable que te guste</h4>
            <p className="drink__details-description">"El Kaiser" es un trago fresco y afrutado, perfecto para disfrutar en una tarde de verano mientras ves la puesta de sol.</p>
          </div>
        </div>
        <Hr extraClass="drink__hr"/>
        <div className="drink__details-recommended">
          <h4 className="drink__details-recommended-title">Prueba añadir estos ingredientes</h4>
          {/* TODO: Fill with recommended ingredients from API */}
          <Row>
            <Col className="drink__details-recommended-col">
              <Ingredient 
                fileName="vodka"
                name="Vodka"
                effect="Para más pega"
              />
            </Col>
            <Col className="drink__details-recommended-col">
              <Ingredient 
                fileName="lemon"
                name="Limón"
                effect="Para más amargor"
              />
            </Col>
          </Row>
          <CyanButton
            title="Añadir al trago"
            page="drink"
          />
        </div>
        <Hr extraClass="drink__hr"/>
        <div className="drink__details-recipe">
          <h4 className="drink__details-recipe-title">Preparación</h4>
          <p className='drink__details-recipe-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere dolorum, laudantium vel eveniet cumque placeat corporis tempore at similique amet illum praesentium eius quae earum velit exercitationem. Delectus, fuga itaque!
          Dignissimos architecto necessitatibus praesentium laborum similique. Fuga laborum distinctio rem enim nostrum voluptates atque commodi quaerat omnis, ex doloribus aperiam eius nam voluptatem. Amet, quas doloribus ducimus enim sed quidem?
          Vitae fuga adipisci repellat nemo reiciendis explicabo iste iure iusto rem corporis dignissimos minus quos eligendi nostrum, illo ipsa ab voluptatibus modi fugiat odio sit ducimus quod! Quo, soluta facere?
          Recusandae corrupti neque odit possimus repellendus culpa accusantium quidem distinctio provident, magni vitae minus earum corporis sint soluta? Minima corrupti fugiat rerum voluptates ipsa illum ipsum repellendus quod odit fugit?</p>
        </div>
      </div>
    </Container>
  )
}
