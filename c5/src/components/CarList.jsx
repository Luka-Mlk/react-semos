import React from "react";
export const CarList = ({ listOfCars, deleteById }) => {
  //   const deleteById = (something) => {
  //     const { id } = something.target;

  //     // console.log(something.target.id);
  //     // listOfCars.forEach((car) => {
  //     //   if (id === car.id) {
  //     //     console.log(listOfCars.indexOf(car));
  //     //     let sellCar = listOfCars.indexOf(car);
  //     //     listOfCars.splice(sellCar, 1);
  //     //   }
  //     //   //   console.log(car.id);
  //     //   console.log(listOfCars);
  //     // });
  //   };
  return (
    <ol className="car--list">
      {listOfCars.map((car, i) => {
        return (
          <li className="car--list--item" key={i}>
            <span>{car.car}</span>
            <button onClick={deleteById} id={car.id}>
              Sell
            </button>
          </li>
        );
      })}
    </ol>
  );
};
