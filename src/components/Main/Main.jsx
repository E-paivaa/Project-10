import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import { ClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function Main({ weatherData, handleCardClick }) {
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp.F}°F / You may want to wear:
        </p>
        <ul className="cards__list">
          {ClothingItems.filter((item) => {
            return item.weather === weatherData.type;
          }).map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
