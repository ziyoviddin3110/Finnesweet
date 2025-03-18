import React from "react";
import "./Home.css";
import Categori from "../../components/categori/Categori";
import Join from "../../components/join/Join";
function Home({ data }) {
  console.log("Home Page data:", data);
  return (
    <>
      <div className="hero_bg">
        <div className="hero_bg1">
          <div className="container">
            <div className="hero">
              <h3>Posted on startup</h3>
              <h1>Step-by-step guide to choosing great font pairs</h1>
              <p>
                By <span>James West</span> | May 23, 2022
              </p>
              <p className="hero_text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident.
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>

      <main>
        <section className="post">
          <div className="container">
            <div className="sec_feauture">
              <h1>Featured Post</h1>
              <h1>All Posts</h1>
              <h3>View All</h3>
            </div>
            <div className="feature_cards">
              <div className="feature_card">
                <img src="/imgs/feature.png" alt="" />
                <p>
                  By <span>John Doe</span> l May 23, 202
                </p>
                <h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </h1>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore <br />
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                  non proident
                </p>
                <button>Read More </button>
              </div>
              <div className="feature_card1">
                <div className="feature_tex">
                  <p>
                    By <span>John Doe</span> l Aug 23, 2021{" "}
                  </p>
                  <h1>
                    8 Figma design systems that <br /> you can download for free{" "}
                    <br /> today.
                  </h1>
                </div>
                <div className="feature_tex">
                  <p>
                    By <span>John Doe</span> l Aug 23, 2021{" "}
                  </p>
                  <h1>
                    8 Figma design systems that <br /> you can download for free{" "}
                    <br /> today.
                  </h1>
                </div>
                <div className="feature_tex">
                  <p>
                    By <span>John Doe</span> l Aug 23, 2021{" "}
                  </p>
                  <h1>
                    8 Figma design systems that <br /> you can download for free{" "}
                    <br /> today.
                  </h1>
                </div>
                <div className="feature_tex">
                  <p>
                    By <span>John Doe</span> l Aug 23, 2021{" "}
                  </p>
                  <h1>
                    8 Figma design systems that <br /> you can download for free{" "}
                    <br /> today.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about_sec">
          <div className="container">
            <div className="col_about">
              <p></p>
              <span></span>
            </div>
            <div className="about_cards">
              <div className="about_card">
                <h3>ABOUT U</h3>
                <h1>
                  We are a community of <br />
                  content writers who share their <br /> learning
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <h4>Read More </h4>
              </div>
              <div className="about_card">
                <h3>Our mision</h3>
                <h2>
                  Creating valuable content for <br />
                  creatives all around the world
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="choose_sec">
          <div className="container">
            <h1>Choose A Catagory</h1>
            <Categori data={data} />
            <div className="choose_block">
              <div className="box_choose">
                <img src="/imgs/imgs111.png" alt="" />
              </div>
              <div className="box_choose1">
                <h3>Why we started</h3>
                <h1>
                  It started out as a simple idea and evolved into our passio
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip
                </p>
                <button>Discover our story </button>
              </div>
            </div>
          </div>
        </section>
        <section className="set_sec">
          <div className="container">
            <h1>List of Authors</h1>
            <div className="set_cards">
              <div className="set_card">
                <img src="/imgs/list1.png" alt="" />
                <h2>Floyd Miles</h2>
                <p>Content Writer @Company</p>
                <div className="list_icons">
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-linkedin"></i>
                </div>
              </div>
              <div className="set_card">
                <img src="/imgs/list2.png" alt="" />
                <h2>Dianne Russell</h2>
                <p>Content Writer @Company</p>
                <div className="list_icons">
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-linkedin"></i>
                </div>
              </div>
              <div className="set_card">
                <img src="/imgs/list3.png" alt="" />
                <h2>Jenny Wilson</h2>
                <p>Content Writer @Company</p>
                <div className="list_icons">
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-linkedin"></i>
                </div>
              </div>
              <div className="set_card">
                <img src="/imgs/list4.png" alt="" />
                <h2>Leslie Alexander</h2>
                <p>Content Writer @Company</p>
                <div className="list_icons">
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-linkedin"></i>
                </div>
              </div>
            </div>
            <div className="wear1_set">
              <img src="/imgs/Featured in.png" alt="" />
              <img src="/imgs/Logo 1.png" alt="" />
              <img src="/imgs/Logo 2.png" alt="" />
              <img src="/imgs/Logo 3.png" alt="" />
              <img src="/imgs/Logo 4.png" alt="" />
              <img src="/imgs/Logo 5.png" alt="" />
            </div>
            <div className="testimon_cards">
              <div className="testimon_card">
                <h3>TESTIMONIALs</h3>
                <h2>
                  What people say <br /> about our blog
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit, sed do eiusmod tempor.
                </p>
              </div>
              <span></span>
              <div className="testimon_card1">
                <h3>
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit, sed do <br /> eiusmod
                  tempor incididunt ut labore et <br />
                  dolore magna aliqua.
                </h3>
                <div className="porfolio_icons">
                  <img src="/imgs/Profile.png" alt="" />
                  <div className="left_rigthIcons">
                    <i className="fa-solid fa-arrow-left-long"></i>
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </div>
                </div>
              </div>
            </div>
            <Join />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
