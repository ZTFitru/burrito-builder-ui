import { useEffect, useState } from "react";
import "./App.css";
import { getOrders } from "../../apiCalls";
import Orders from "../../components/Orders/Orders";
import OrderForm from "../../components/OrderForm/OrderForm";

function App() {

  const [apiOrders, setApiOrders] = useState([])



  useEffect(() => {
    getOrders()
    // .then(data => console.log(data.orders))
    .then(data => setApiOrders(data.orders))
    .catch((err) => console.error("Error fetching:", err));
  }, []);

  function addOrder(newOrder) {
    setApiOrders([...apiOrders, newOrder])
  }

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm addOrder={addOrder}/>
      </header>

      <Orders orders={apiOrders} />
    </main>
  );
}

export default App;
