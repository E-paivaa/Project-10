import {useEffect, useState} from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";
import Footer from "../Footer/Footer";

function App() {
  const [weatherData, setWeatherData] = useState({ 
    type:"",
    city: "", 
    temp: { F:333},
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState ({});

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  }

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect (() => {
    getWeather(coordinates, APIkey)
    .then((data) => {
      const filteredData = filterWeatherData(data);
      setWeatherData(filteredData);
    })
    .catch(console.error);
  },
  []);

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick= {handleAddClick} weatherData={weatherData}/>
        <Main weatherData= {weatherData} handleCardClick={handleCardClick}/>
        <Footer/>
      </div>
      <ModalWithForm 
      submitButton="Add Garment" 
      title="New Garment"
      activeModal= {activeModal}
      onClose= {closeActiveModal}
      >
      <label htmlFor="name" className="modal__label">
                Name{""}
                <input 
                type="text"
                className="modal__input"
                id="name"
                placeholder="Name"
                />
            </label>
            <label htmlFor="imageUrl" className="modal__label">
                Image{""}
                <input 
                type="url"
                className="modal__input"
                id="imageUrl"
                placeholder="Image URL"
                />
            </label>
            <fieldset className="modal__radio-buttons">
            <legend className="modal__legend"> Select Weather Type:</legend>
            <label htmlFor="hot" className="modal__label modal__label_type_radio">
                <input type="radio" value="hot" className="modal__radio-input" id="hot"/>
                {""}Hot
            </label>
            <label htmlFor="warm" className="modal__label modal__label_type_radio">
                <input type="radio" value="warm" className="modal__radio-input" id="warm"/>
                {""}Warm
            </label>
            <label htmlFor="cold" className="modal__label modal__label_type_radio">
                <input type="radio" value="cold" className="modal__radio-input" id="cold"/>
                {""}Cold
            </label>
            </fieldset>
      </ModalWithForm>
      <ItemModal 
      activeModal={activeModal} 
      card={selectedCard} 
      onClose={closeActiveModal}/>
    </div>
  );
}

export default App;
