import React, { useState } from "react";
import productsData from "../Global Components/AllProductsObjects";
import "../../Styles/AllClothesPageStyles/ClothesCardStyle.css";
const ClothesCard = () => {
  const [clothes, setClothes] = useState(productsData);

  const handleChooseColor = (id, color) => {
    setClothes((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          let newCheckImg = {};

          //change all checkImg to false but keep color to true
          Object.keys(item.checkImg).map((img) => {
            item.checkImg[img] = false;
            newCheckImg = { ...item.checkImg, [color]: true };
            console.log(item.checkImg[color]);
            return null;
          });
          return { ...item, checkImg: newCheckImg };
        } else {
          return item;
        }
      });
    });
  };
  return (
    <div className="Products-Container">


          {clothes.map((item) => (
            <div key={item.id} className="card">
              <div className="Image-Container">
                {Object.keys(item.checkImg).map((img) => {
                  if (item.checkImg[img]) {
                    return <img src={item.imgFront[img]} className="img" />;
                  } else {
                    return null;
                  }
                })}
              </div>
              <div className="colors">
                {/*Render Img*/}
                {/*if checkImg property is true, render img with that property*/}
                {item.colors.map((color) => (
                  <p
                    key={color}
                    className={` ${item.checkImg[color] && "active"} `}
                    style={{
                      backgroundColor: color,
                      width: "1rem",
                      height: "1rem",
                      borderRadius: "50%",
                      margin: "0.2rem",
                      cursor: "pointer",
                    }}
                    onClick={() => handleChooseColor(item.id, color)}
                  ></p>
                ))}
              </div>
              <p>{item.name}</p>
            </div>
          ))}


    </div>
  );
};

export default ClothesCard;
