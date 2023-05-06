import { useState } from "react";
import BasketItem from "./BasketItem";

function Basket({ basket,resetBasket, total,products }) {
  return (
    <>
     <div className="basket-container container">
      <h3>Warenkorb</h3>
     <ul className="insgesamt">{basket.map((item) => (
        <BasketItem
          item={item}
          product={products.find((p) => p.id === item.id)}
        />
      ))}</ul>
      <div className="betrag">
        Betrag: ${total}
      </div>
      <button onClick={resetBasket}>restart</button>
     </div>
     <style jsx>{`
     .basket-container{
      padding:20px;
      background:	#faf0e6;
      border:1px solid #ddd;
}
.basket-container h3{
  font-size:20px;
  margin-bottom:15px;
}
.basket-container ul{
  font-size:13px solid ;
  border-bottom:1px solid #ddd;
  padding-top:10px;
  margin-top:10px;
 
}
.basket-container .betrag{
  text-align:right;
  color:#17ba17;
  font-size:13px solid ;
}

`}
      
      </style> 
       </>
  );
}

export default Basket;
