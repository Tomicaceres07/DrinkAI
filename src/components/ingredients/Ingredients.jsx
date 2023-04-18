import { Ingredient } from 'src/components/ingredient/Ingredient';

export const Ingredients = ({title}) => {

  // TODO: In a future, I'll make petition to API depending on category (Recommended, Liquors, etc)

  let category = "";

  let recommended = [
    {
      fileName: "ginebra",
      name: "Ginebra"
    },
    {
      fileName: "orange",
      name: "Naranja"
    },
    {
      fileName: "strawberry",
      name: "Frutilla"
    },
    {
      fileName: "ice",
      name: "Hielo"
    },
    {
      fileName: "gin",
      name: "Gin"
    },
    {
      fileName: "beer",
      name: "Cerveza"
    },
    {
      fileName: "whiskey",
      name: "Whiskey"
    },
    {
      fileName: "vodka",
      name: "Vodka"
    },
  ];

  let liquors = [
    {
      fileName: "gancia",
      name: "Gancia"
    },
    {
      fileName: "wine",
      name: "Vino tinto"
    },
    {
      fileName: "vodka",
      name: "Vodka"
    },
    {
      fileName: "whiskey",
      name: "Whiskey"
    },
    {
      fileName: "gin",
      name: "Gin"
    },
    {
      fileName: "ginebra",
      name: "Ginebra"
    }
  ];

  switch (title) {
    case "Recomendados":
      category = recommended
      break;
    case "Licores":
      category = liquors
      break;
    default:
      category = "unknown"
      break;
  }

  return (
    <div className="home__ingredients-div">
        <h3 className="home__recommended-title">{title}</h3>
        <div className="home__recommended-div">
          {/* TODO: Fill ingredients from API */}
          {
            (category !== "unknown")
            ? (
              category.map((drink, index) => {
                return (
                  <Ingredient 
                    key={index}
                    fileName={drink.fileName}
                    name={drink.name}
                  />
                )
              })
            )
            : (
              <h4>Category not found</h4>
            )
          }
        </div>
      </div>
  )
}
