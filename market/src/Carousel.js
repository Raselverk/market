import React from 'react';
import Slider from "react-slick";
import './Carousel.css'

import audio from './img/audio.jpg';
import tvSamsung from './img/tvSamsung.jpg';
import phone from './img/phone.jpg';
import padAcer from './img/padAcer.jpg';
import nikon from './img/nikon.jpg';
import tvLg from './img/tvLg.jpg';
import macbook from './img/macbook.jpg';
import laptop from './img/laptop.jpg';


class Carousel extends React.Component {
   
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="carusel">
        <Slider {...settings}>
          <div>
            <h3 className="phoneH">
              <img className="carImg phone" src={phone} alt="phone" />
              <p className="imgDescription">Samsung Galaxy S10 8/128 GB Black  <span className="price"> 29 999 грн</span></p>
            </h3>
          </div>

          <div>
            <h3>
              <img className="carImg" src={padAcer} alt="padAcer" />
              <p className="imgDescription">Планшет Acer One 10 S1003  <span className="price"> 9 925 грн</span></p>
            </h3>
          </div>

          <div>
            <h3>
              <img className="carImg nikon" src={nikon} alt="nikon" />
              <p className="imgDescription">Nikon D5600 AF-S 18-140mm f/3.5-5.6G VR Black  <span className="price"> 29 999 грн</span></p>
            </h3>
          </div>

          <div>
            <h3>
              <img className="carImg" src={laptop} alt="laptop" />
              <p className="imgDescription">Ноутбук Asus X560UD-EJ388  <span className="price"> 22 999 грн</span></p>
            </h3>
          </div>

          <div>
            <h3>
              <img className="carImg" src={audio} alt="audio" />
              <p className="imgDescription">Акустическая система Trust Vigor 5.1 surround speaker system for pc - black  <span className="price"> 2 499 грн</span></p>
            </h3>
          </div>

          <div>
            <h3>
              <img className="carImg" src={macbook} alt="macbook" />
              <p className="imgDescription">Ноутбук Apple A1708 MacBook Pro Retina 13"  <span className="price"> 36 419 грн</span></p>
            </h3>
          </div>

          <div>
            <h3>
              <img className="carImg" src={tvLg} alt="tvLg" />
              <p className="imgDescription">Телевизор LG 32LK6190PLA  <span className="price"> 9 499 грн</span></p>  
            </h3>
          </div>
          
          <div>
            <h3>
              <img className="carImg tvSamsung" src={tvSamsung} alt="tvSamsung" />
              <p className="imgDescription">Телевизор Samsung UE32N5300AUXUA  <span className="price"> 9 799 грн</span></p>
            </h3>
          </div>
        </Slider>
       </div>
    );
  }
}
  
export default Carousel;