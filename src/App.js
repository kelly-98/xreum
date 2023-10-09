import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import logo from "./assets/img/logo.png";
import intro from "./assets/img/intro.png";
import info from "./assets/img/info.png";
import "./App.scss";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <header className="header">
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
        <div className="header-menu">
          <a>UNISWAP</a>
          <a>DEXTOOLS</a>
          <a>TELEGRAM</a>
          <a>TWITTER</a>
        </div>
      </header>

      <main>
        <section className="section-1" data-aos="fade-up">
          <div className="section-1-left">
            <div
              className="section-1-logo"
              style={{
                position: "relative",
                zIndex: 999,
              }}
              data-aos="fade-right"
              data-aos-delay="200">
              <img src={logo} alt="" />
            </div>
            <p
              data-aos="fade-right"
              data-aos-delay="300"
              style={{
                position: "relative",
                zIndex: 999,
                backgroundColor: "black",
              }}>
              The development of XREUM is driven by the collaborative efforts of
              thousands of individuals and communities who share a passion for
              cryptocurrencies. Our vision is rooted in the pursuit of freedom,
              privacy, and financial independence for all. Whether you're a
              novice or an experienced investor, XREUM welcomes you to join us
              as we explore the future of digital currency. Long live XREUM!
            </p>
            <div
              className="section-1-contract"
              data-aos="fade-right"
              data-aos-delay="400">
              <span>Contract Address</span>
              <span>0x000000000000</span>
            </div>
          </div>
          <div className="section-1-right" data-aos="fade-left">
            <img src={intro} alt="" />
          </div>
        </section>
        <section className="section-2">
          <div className="section-2-left" data-aos="fade-right">
            <img src={info} alt="" />
          </div>
          <div className="section-2-right">
            <h3
              className="section-2-right-title"
              data-aos="fade-left"
              data-aos-delay="200">
              TOKENOMICS OF $XREUM.
            </h3>
            <p
              className="section-2-right-desc"
              data-aos="fade-left"
              data-aos-delay="300">
              $ELONREUM utilizes a RENOUNCED contract to ensure security for
              investors, Locked liquidity as well as low taxes to prevent MEV
              bots from taking your hard earned eth!
            </p>
            <div className="info" data-aos="fade-left" data-aos-delay="400">
              <span className="info-title">Total Supply</span>
              <span className="info-box info-box-center">100.000.000</span>
            </div>
            <div className="info" data-aos="fade-left" data-aos-delay="500">
              <span className="info-title">Taxes</span>
              <div className="info-box">
                <span>Buy 0%</span>
                <span>Sell 0%</span>
              </div>
            </div>
            <span
              className="info-title"
              data-aos="fade-left"
              data-aos-delay="600">
              Liquidity Burnt
            </span>
          </div>
        </section>
      </main>

      <footer className="footer" data-aos="fade-up">
        <span>All Rights Reserved | 2023 | developer@XREUM.com</span>
        <div className="footer-menu">
          <a>UNISWAP</a>
          <a>DEXTOOLS</a>
          <a>TELEGRAM</a>
          <a>TWITTER</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
