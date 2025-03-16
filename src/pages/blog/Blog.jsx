import React from "react";
import "./Blog.css";
import Btn from "../../components/btn/Btn";
import Categori from "../../components/categori/Categori";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Join from "../../components/join/Join";
function Blog({data}) {
  return (
    <div>
  <div className="hero_blog">
    <div className="container">
      <div className="herobg_cards">
        <div className="herobg_card">
          <h3>Featured Post</h3>
          <h1>Step-by-step guide to choosing great font pairs</h1>
          <p>By <span>John Doe</span>   l   May 23, 2022 </p>
          <p className="hero_p">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        <Btn/>
        </div>
        <div className="heroImg_card">
          <img src="/public/imgs/herobg_bkog.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <main>
    <section className="All_post">
      <div className="container">
        <h1>All posts</h1>
        <br /><hr />
        <div className="allpost_cards">
          <div className="allpost_card">
          <img src="/public/imgs/blogImg1.png" alt="" />
          <div className="starup">
            <h3>Startup</h3>
            <h1>Design tips for designers that cover everything you nee</h1>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
          </div>
          <div className="allpost_card">
          <img src="/public/imgs/blogImg2.png" alt="" />
          <div className="starup">
           <h3>BUSINESS</h3>
           <h1>How to build rapport with your web design clients</h1>
           <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
          </div>
          <div className="allpost_card">
          <img src="/public/imgs/blogImg3.png" alt="" />
          <div className="starup">
            <h3>Startup</h3>
            <h1>Logo design trends to avoid in 2022</h1>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
          </div>
          <div className="allpost_card">
          <img src="/public/imgs/blogImg4.png" alt="" />
          <div className="starup">
          <h3>TECHNOLOGY</h3>
          <h1>8 Figma design systems you can download for free today</h1>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
          </div>
          <div className="allpost_card">
          <img src="/public/imgs/blogImg1.png" alt="" />
          <div className="starup">
            <h3>Startup</h3>
            <h1>Design tips for designers that cover everything you nee</h1>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
          </div>
        </div>
        <div className="prev_next">
          <div className="prev">
          <FaChevronLeft/>
            <span>Prev</span>
          </div>
          <div className="next">
          <span>Next</span><FaChevronRight/>
          </div>
        </div>
      </div>
    </section>
    <section className="categotiy">
      <div className="container">
        <h1>All Categories</h1>
        <Categori data={data} />
      </div>
    </section>

    <section className="join_sec">
      <div className="container">
        <Join/>
      </div>
    </section>
  </main>
  </div>
  );
}

export default Blog;
