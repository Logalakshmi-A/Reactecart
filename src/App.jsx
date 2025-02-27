
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Shop from './Pages/Shop'
import ProductDetails from './Pages/ProductDetails'
import Notfound from './Pages/Notfound'
import { CartProvider } from './Context/CartContext'

function App() {
  

  return (
    <>
    <CartProvider>
      <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />}/>
      <Route path='/shop' element={<Shop />}/>
      <Route path='/Cart' element={<Cart/ >}/>
      <Route path='/Product/:id' element={<ProductDetails/ >}/>
      <Route path='*' element={<Notfound/ >}/>
    
    </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
