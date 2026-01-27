import './App.css'
import Header from './Header'
import Users from './Users'
import Products from './Products'
import About from './About'
import Home from './Home'
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
 

  return (
    <>
    <BrowserRouter>
     <Header></Header>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/users" element={<Users />}/>
      <Route path="/products" element={<Products />}/>
      <Route path="/about" element={<About />}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
