import { useState, useEffect } from "react";
import "./App.css";
import products from "./products.json";
import Product from "./components/Product";
import Basket from "./components/Basket";
import Header from "./Header";

function App() {
  const [money, setMoney] = useState(1000);
  const [basket, setbasket] = useState([]);
  const [total, setTotal] = useState(0);
  const resetBasket = () => {
    setbasket([]);
  };

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);
  return (
    <>
      <Header total={total} money={money} />
      <div className="container products">
        {" "}
        {products.map((product) => (
          <Product
            key={product.id}
            total={total}
            money={money}
            basket={basket}
            setbasket={setbasket}
            product={product}
          />
        ))}
      </div>
      {total > 0 && (
        <Basket
          resetBasket={resetBasket}
          products={products}
          total={total}
          basket={basket}
        />
      )}
    </>
  );
}

export default App;
