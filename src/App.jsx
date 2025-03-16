import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import Privaci from './pages/privaci/Privaci'
import Categori from './components/categori/Categori'
import { useState } from 'react'
import Categoriss from './pages/home/categoriss/Categoriss'

function App() {
  const [data, setData] = useState([
    {
      id: 0,
      imgs: "/imgs/Icon.svg", 
      name: "Business",
      titel: "Business is the activity of producing, buying, and selling goods profitably."
    },
    {
      id: 1,
      imgs: "/imgs/Icon (1).svg",
      name: "Startup",
      titel: "A startup is a newly established business focused on innovation and growth."
    },
    {
      id: 2,
      imgs: "/imgs/economy (1).png",
      name: "Economy",
      titel: "Economy is the system of production, consumption, and trade of goods and services."
    },
    {
      id: 3,
      imgs: "/imgs/cyborg.svg",
      name: "Technology",
      titel: "Technology is the application of scientific knowledge for practical purposes."
    },
  ]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home data={data} />} />
        <Route path='Blog' element={<Blog data={data} />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='About' element={<About />} />
        <Route path='Privaci' element={<Privaci />} />
        <Route path='categoriss/:id' element={<Categoriss data={data}/>} />
        <Route path='categori' element={<Categori data={data} />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

