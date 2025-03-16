import React, { useState } from "react";
import "./Categoriss.css";
import { useParams } from "react-router-dom";



function Categoriss({ data }) {



    const{id}=useParams()
    const [produks, setProducs]= useState(data.filter((item)=>{
        return item.id==id;
    }))
  return (
    <>
      <div className="categoriss">
        <div className="container">
          <div className="categoris_text">
            <h1>{produks[0].name}</h1>
            <p>
           {produks[0].titel}
            </p>
            <h2>Blog <span>{produks[0].name}</span></h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="categoriss_cards">
          <div className="categori_blockk">
            <div className="caregoriss_card">
              <img src="/public/imgs/blogImg1.png" alt="" />
              <div className="text_cate">
                <h3>Business</h3>
                <h1>Top 6 free website mockup tools 2022</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Non blandit massa enim nec.
                </p>
              </div>
            </div>
            <div className="caregoriss_card">
              <img src="/public/imgs/blogImg1.png" alt="" />
              <div className="text_cate">
                <h3>Business</h3>
                <h1>Top 6 free website mockup tools 2022</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Non blandit massa enim nec.
                </p>
              </div>
            </div>
            <div className="caregoriss_card">
              <img src="/public/imgs/blogImg1.png" alt="" />
              <div className="text_cate">
                <h3>Business</h3>
                <h1>Top 6 free website mockup tools 2022</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Non blandit massa enim nec.
                </p>
              </div>
            </div>
            <div className="caregoriss_card">
              <img src="/public/imgs/blogImg1.png" alt="" />
              <div className="text_cate">
                <h3>Business</h3>
                <h1>Top 6 free website mockup tools 2022</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Non blandit massa enim nec.
                </p>
              </div>
            </div>
          </div>
          <div className="categoriss_card1">
            <h1>Categories</h1>
            <div className="starus_img">
              <div className="imgs">
                <img src="/public/imgs/Icon (1).svg" alt="" />
              </div>
              <h2>Startup</h2>
            </div>
            <div className="starus_img">
              <div className="imgs">
                <img src="/public/imgs/Icon.svg" alt="" />
              </div>
              <h2>Business</h2>
            </div>
            <div className="starus_img">
              <div className="imgs">
                <img src="/public/imgs/economy (1).png" alt="" />
              </div>
              <h2>Economy</h2>
            </div>
            <div className="starus_img">
              <div className="imgs">
                <img src="/public/imgs/cyborg.svg" alt="" />
              </div>
              <h2>Technology</h2>
            </div>
            <h4>All Tags</h4>
            <div className="status_btn">
              <span>Business</span>
              <span>Experience</span>
              <span>Screen</span>
              <span>Technology</span>
              <span>Marketing</span>
              <span>Life</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categoriss;
