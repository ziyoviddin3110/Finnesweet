import React from 'react'
import "./Categori.css"
import { Link } from 'react-router-dom'

function Categori({ data }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div className="choose_cards">
        {data?.map((item) => (
          <div className="choose_card" key={item.id} >  
            <Link to={`/categoriss/${item.id}`} onClick={scrollToTop}>
              <div className="imgs_choose">
                <img src={item.imgs} alt="" />
              </div>
              <h2>{item.name}</h2>
              <p>{item.titel}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categori;
