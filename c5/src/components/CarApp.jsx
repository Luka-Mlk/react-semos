import React, { useEffect, useState } from "react";
import { CarList } from "./CarList";
export const CarApp = () => {
  // prettier-ignore
  const [cars, setCars] = useState([
    {id:Date.now().toString().slice(-5), car: "Benz"},
  ]);
  const [addCar, setAddCar] = useState("");
  const addNewCar = (e) => {
    // e.preventDefault();
    let newCar = {
      id: Date.now().toString().slice(-5),
      car: addCar,
    };
    newCar.car === ""
      ? alert("All fields are mandatory")
      : setCars([...cars, newCar]);
    // console.log(cars);
    setAddCar("");
    // console.log(newCar);
  };
  const deleteById = (something) => {
    const { id } = something.target;
    // cars.filter((car) => car.id !== id);
    // console.log(something.target.id);
    // listOfCars.forEach((car) => {
    //   if (id === car.id) {
    //     console.log(listOfCars.indexOf(car));
    //     let sellCar = listOfCars.indexOf(car);
    //     listOfCars.splice(sellCar, 1);
    //   }
    //   //   console.log(car.id);
    //   console.log(listOfCars);
    // });
  };
  return (
    <>
      <div>
        <button
          onClick={() => {
            console.log(cars);
          }}
        >
          Check cars
        </button>
        <h2>Cars for sale</h2>
        <form className="input--form">
          <input
            className="input--form--input"
            type="text"
            placeholder="Enter new car"
            value={addCar}
            onChange={(e) => {
              setAddCar(e.target.value);
            }}
          />
          <button className="input--form--submit" onClick={addNewCar}>
            Add car
          </button>
        </form>
        <CarList listOfCars={cars} deleteById={deleteById} />
      </div>
    </>
  );
};
