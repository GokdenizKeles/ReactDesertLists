import { useState } from 'react'
import './App.css'
import './reset.css'

const data = [
  {
    id: 1,
    name: 'Waffle',               
    category: 'Waffle with Berries', 
    price: '$6.50',               
    src: '/assets/img/waffle.jpg', 
    
  },
  {
    id: 2,
    name: 'Crème Brûlée',
    category: 'Vanilla Bean Crème Brûlée',
    price: '$7.00',
    src: '/assets/img/crème-brûlée.jpg',
  },
  {
    id: 3,
    name: 'Macaron',
    category: 'Macaron Mix of Five',
    price: '$8.00',
    src: '/assets/img/macaron.jpg',
  },
  {
    id: 4,
    name: 'Tiramisu',
    category: 'Classic Tiramisu',
    price: '$5.50',
    src: '/assets/img/tiramisu.jpg',
  },
  {
    id: 5,
    name: 'Baklava',
    category: 'Pistachio Baklava',
    price: '$4.00',
    src: '/assets/img/baklava.jpg',
  },
  {
    id: 6,
    name: 'Pie',
    category: 'Lemon Meringue Pie',
    price: '$5.00',
    src: '/assets/img/pie.jpg',
  },
  {
    id: 7,
    name: 'Cake',
    category: 'Red Velvet Cake',
    price: '$4.50',
    src: '/assets/img/cake.jpg',
  },
  {
    id: 8,
    name: 'Brownie',
    category: 'Salted Caramel Brownie',
    price: '$5.50',
    src: '/assets/img/brownie.jpg',
  },
  {
    id: 9,
    name: 'Panna Cotta',
    category: 'Vanilla Panna Cotta',
    price: '$6.50',
    src: '/assets/img/panna-cotta.jpg',
  }
];

function App() {
 
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>Desserts</h1>
      <div className='container-inner'>
       <Main />
       <OrderCollector />
      </div>
     </div>
  )
}


function Main() {
  const dataItem =  data.map(x => <MainItem name = {x.name}  category = {x.category} src = {x.src} price = {x.price} key = {x.id}/> )
 
  
  return (
  <main>
   
   {dataItem}
  
  </main>
   
  )
}

function MainItem({name , category , price , src}) {
  function HandleClick() {
    console.log(name)
  }

  return (
     
     <div onClick={HandleClick} className='cart'>
      <img src = {src} alt = {name} />
      <button><img src="/assets/img/shop-car.svg" alt="" />Add to Cart</button>
      <h3>{name}</h3>
      <h5>{category}</h5>
      <h4>{price}</h4>
   </div>
    
   )
}

function OrderCollector() {
  return (
   <div className='order-section'>
     <h3>Your Cart(<span>0</span>)</h3>
     <img src="/assets/img/empty-order-section.png" alt="" />
     <p>Your added items will appear here</p>
   </div>
   
  )
}

export default App
