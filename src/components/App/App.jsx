import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";
import Footer from "../Footer/Footer";
import CurrentTemperatureUnitContext from "../../context/CurrentTemperatureUnit";
import AddItemModal from "../AddItemModal/AddItemModal";
import { ClothingItems } from "../../utils/constants";
import Profile from "../Profile/Profile";
import api from "../../utils/api";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    city: "",
    temp: { F: 333, C:333 },
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItem, setClothingItem] = useState(ClothingItems);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleAddItemModalSubmit = ({ name, imageUrl, weather }) => {
    api
      .addItems(name, imageUrl, weather)
      .then((values) => {
        setClothingItem([values, ...clothingItem]);
        closeActiveModal();
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteItem = (id) => {
    api
      .deleteItems(id)
      .then(() => {
        setClothingItem(clothingItem.filter((item) => item._id !== id));
        closeActiveModal();
      })
      .catch((error) => console.log(error));
  };
  

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    api
      .getItems()
      .then((data) => {
        setClothingItem(data);
      })
      .catch(console.error);
  }, []);


  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route 
            path="/" 
            element={<Main 
            weatherData={weatherData} 
            handleCardClick={handleCardClick} 
            clothingItem={clothingItem}/>}/>
            <Route 
            path="/profile" 
            element={<Profile onCardClick={handleCardClick}/>}/>
          </Routes>
          <Footer />
        </div>
        <AddItemModal
          isOpen={activeModal === "add-garment"}
          onClose={closeActiveModal}
          onAddItemModalSubmit={handleAddItemModalSubmit}
        />
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          onClose={closeActiveModal}
          isOpen={activeModal === "preview"}
          onDeleteItem={handleDeleteItem}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
