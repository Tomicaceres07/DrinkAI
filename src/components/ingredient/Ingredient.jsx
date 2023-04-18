

export const Ingredient = ({fileName, name}) => {
  return (
    <>
      <div className="ingredient__image-container">
        <img src={`src/assets/icons/${fileName}.png`} alt="Gin" className="ingredient__image"/>
        <p className="ingredient__name">{name}</p>
      </div>
    </>
  )
}
