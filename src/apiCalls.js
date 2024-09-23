export const getOrders = () => {
  return fetch("http://localhost:3001/api/v1/orders").then((response) => response.json());
};

export const addOrdersApi = (newOrder) => {
  return fetch('http://localhost:3001/api/v1/orders', {
    method: 'POST',
    body: JSON.stringify(newOrder),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if(!res.ok) {
      throw new Error('something something bad')
    } else {
      return res.json()
    }
  }).catch(err => console.log(err))
}