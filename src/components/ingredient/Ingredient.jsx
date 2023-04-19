

export const Ingredient = ({fileName, name, effect, page}) => {
  return (
    <>
      <div className={`ingredient__image-container ${page == "drink" && "ingredient__image-container__drink"}`}>
        <img src={`src/assets/icons/${fileName}.png`} alt="Gin" className="ingredient__image"/>
        <p className={`ingredient__name ${page == "drink" && "ingredient__name__drink"}`}>{name}</p>
      </div>
      {
        (effect) && <p className="ingredient__effect">"{effect}"</p>
      }
    </>
  )
}
