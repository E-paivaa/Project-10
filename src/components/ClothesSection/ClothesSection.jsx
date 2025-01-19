import "./ClothesSection.css";
import { ClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({onCardClick}){
    return (
        <div className="clothes-section">
            <div className="clothes__section-content">
        <p className="clothes__section-text">Your items</p>
        <button 
        type="button"
        className="clothes__section-add">
        {" "}
        + Add new
        </button>
    </div>
    <ul className="cards__list">
          {ClothingItems.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={onCardClick}
              />
            );
          })}
        </ul>
    </div>
);
}

export default ClothesSection;