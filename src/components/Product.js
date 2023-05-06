import React, { useState } from "react";

function Product({ product, total, money, basket, setbasket }) {
  const basketItem = basket.find((item) => item.id === product.id);
  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    //ürün daha önce eklenmis
    if (checkBasket) {
      checkBasket.amount += 1;
      setbasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setbasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };
  const removeBasket = () => {
    const currentBasket = basket.find((item) => item.id === product.id);
    const basketwithoutCurrent = basket.filter(
      (item) => item.id !== product.id
    );
    currentBasket.amount -= 1;
    //ürün daha önce eklenmis
    if (currentBasket.amount === 0) {
      setbasket([...basketwithoutCurrent]);
    } else {
      setbasket([...basketwithoutCurrent, currentBasket]);
    }
  };
  return (
    <>
      <div className="product">
        <img src={product.image} alt=""/>
        <h3>{product.title}</h3>
        <h3>${product.price}</h3>
        <div className="actions">
          <button className="sell-btn" disabled={!basketItem} onClick={removeBasket}>
            remove{" "}
          </button>
          <span className="amount">
            {(basketItem && basketItem.amount) || 0}
          </span>
          <button className="buy-btn" disabled={total + product.price > money} onClick={addBasket}>
            buy{" "}
          </button>
         
        </div>
        <style jsx="true">{`
          .product {
            padding: 15px;  
            background: #fff;
            border: 2px solid #ddd;
            margin-bottom: 20px;
            width: 33%;
          }
          .product img {
            width:100%;
          }
          .product h6 {
            font-size:20px;
            margin-bottom:10px;
            text-align:center;
          }
          .product .price {
            font-size: 20px;
            color: #61dafb;
          }
          .product .actions{
            display:flex;
            align-items:center;
            margin-top:15px;
            
          }
          .actions button{
            height:40px;
            padding:0 30px;
            flex:1;
            cursor: pointer;
          }
          .actions .buy-btn{
            background: #61dafb;
            font-size: 15px;
            font-weight:500;
            border-radius: 0 4px 4px 0  ;
          }
          .actions .sell-btn{
            background: #333;
            font-size: 15px;
            color:#fff;
            font-weight:500;
            border-radius: 4px 0 0 4px ;
          }
          .actions .amount{
            border:1px solid #ddd;
            height:40px;
            width:33px;
            text-align:center;
            align.items:center;
            justify-content:center;
            font-size:18px;
            display:flex;
            padding-top: 8px;
            color:#555;

          }
         
        `}</style>
      </div>
    </>
  );
}
export default Product;
