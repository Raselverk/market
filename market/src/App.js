import React from 'react';
import './App.css';

import Header from './Header.js';
import HomePageContent from './HomePageContent.js';
import Content from './Content.js';
import Nav from './Nav.js';
import ContentDetail from './ContentDetail.js';
import Carousel from './Carousel.js';
import Footer from './Footer.js';

import data from './data.js';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    homepagedata: [
            {
               id:1,
               name: 'Samsung Galaxy A50 ',
               price: '8 499 грн',
               model: '4/64GB Blue',
               description: "Экран (6.4', Super AMOLED, 2340x1080)/ Samsung Exynos 9610 (2.3 ГГц + 1.7 ГГц)/ тройная основная камера: 25 Мп + 5 Мп + 8 Мп, фронтальная камера: 25 Мп/ RAM 4 ГБ/ 64 ГБ встроенной памяти + microSD (до 512 ГБ)/ 3G/ LTE/ GPS/ ГЛОНАСС/ поддержка 2х SIM-карт (Nano-SIM)/ Android 9.0 (Pie)/ 4000 мА*ч",
               img: 'https://i1.rozetka.ua/goods/11488175/samsung_sm_a505fzbusek_images_11488175582.jpg'
           },
           
           {  
               id:2,
               name: 'Ноутбук ASUS ZenBook ',
               price: '38 299 грн',
               model: "14 UX433FA-A6109T",
               description: 'Экран 14.0" IPS (1920x1080) Full HD, матовый / Intel Core i7-8565U (1.8 - 4.6 ГГц) / RAM 16 ГБ / SSD 512 ГБ / Intel UHD Graphics 620 / без ОД / Wi-Fi / Bluetooth / веб-камера / Windows 10 Home / 1.09 кг / серебристый / чехол',
               img: 'https://i2.rozetka.ua/goods/11474888/asus_90nb0jr3_m03900_images_11474888240.jpg'
           },
           {  
               id:3,
               name: 'Телевизор Samsung',
               price: '35 599 грн',
               model: "QE49Q67RAUXUA ",
               description: "Диагональ экрана: 49 Разрешение: 3840x2160Smart-платформа: TizenДиапазоны цифрового тюнера: DVB-T, DVB-C, DVB-S, DVB-S2, DVB-T2Частота обновления: 2500 Гц (PQI)Страна регистрации бренда: Корея",
               img: 'https://i2.rozetka.ua/goods/11866950/samsung_qe49q67rauxua_images_11866950480.jpg'
           },
           {
                id:4,
                name: 'Samsung Galaxy A30',
                price: '5 999 грн',
                model: " 3/32GB Black",
                description: 'Экран (6.4", Super AMOLED, 2340x1080)/ Samsung Exynos 7904 (2x1.8 ГГц + 6x1.6 ГГц)/ двойная основная камера: 16 Мп + 5 Мп, фронтальная камера: 16 Мп/ RAM 3 ГБ/ 32 ГБ встроенной памяти + microSD (до 512 ГБ)/ 3G/ LTE/ GPS/ ГЛОНАСС/ поддержка 2х SIM-карт (Nano-SIM)/ Android 9.0 (Pie)/ 4000 мА*ч',
                img: 'https://i1.rozetka.ua/goods/11488209/samsung_sm_a305fzkusek_images_11488209614.jpg'
           },
           {
               id:5,
               name: 'Планшет MiXzo 3G ',
               price: "2 499 грн",
               model: "ME1023  ",
               description: 'Вид экрана	ЕмкостныйДиагональ экрана	10.1"Оперативная память	1 ГБеспроводные возможности	Wi-FiBluetooth3G (UMTS)3G (UMTS)Операционная система	Android 6.Встроенная память	16 ГБРазрешение экрана	1280x800Количество ядер	4Тип матрицы	IP Процессор	Spreadtrum SC7731 (1.3 ГГц)',
               img: 'https://i1.rozetka.ua/goods/11185805/73891209_images_11185805247.jpg'
           },
           {  
               id:6,
               name: 'DALI Oberon Dark',
               price: '31 050 грн',
               model: "7  Walnut ",
               description: 'Количество акустических каналов: 2.0Вид: Пассивная Тип: Акустическая системОбщая мощность звука: 60 - 360 Вт Страна регистрации бренда: Дания',
               img: 'https://i2.rozetka.ua/goods/10344433/dali_235531_images_10344433388.jpg'
           },
           
           
           
     
       ],
  
       content:data.phones,
       showHomePage:true,
       showContent:false,
       showContentDetail: false,
       contentId: null
   };
}

   phones(e){
    e.preventDefault();
     this.setState({
      showHomePage:false,
      showContent:true,
      showContentDetail: false,
      content:data.phones
     }); 
   }
   tv(e){
    this.setState({
      showHomePage:false,
      showContent:true,
      showContentDetail: false,
     content:data.tv
    });  
    e.preventDefault();
  }
  tablet(e){
    this.setState({
      showHomePage:false,
      showContent:true,
      showContentDetail: false,
     content:data.pad
    }); 
    e.preventDefault();
  }
  photo(e){ 
    this.setState({
     content:data.photo,
     showHomePage:false,
     showContent:true,
     showContentDetail: false,
    });
    e.preventDefault();   
  }
  laptop(e){
    this.setState({
     content:data.laptop,
     showHomePage:false,
      showContent:true,
      showContentDetail: false,
    });  
    e.preventDefault();
  }
  audio(e){
    this.setState({
      showHomePage: false,
      showContent: true,
      showContentDetail: false,
      content:data.audio
    }); 
    e.preventDefault();
  }
  main(){
    this.setState({
    showHomePage: true,
    showContent: false,
    showContentDetail: false
  }); 
  }
  showContentDetailChange(){
  this.setState({
    showHomePage: false,
    showContent: false,
    showContentDetail: true
  }); 
}

   
  render() {
    return (
     <div className="market">
        <Header  main = {this.main.bind(this)}/>
        
        <div className="conteiner">
            <Nav 
             phones = {this.phones.bind(this)}
             tv = {this.tv.bind(this)}
             tablet = {this.tablet.bind(this)}
             laptop = {this.laptop.bind(this)}
             audio = {this.audio.bind(this)}
             photo = {this.photo.bind(this)}
            />

          <div className="content">                            
           
           {this.state.showHomePage ? <HomePageContent 
              homepagedata={this.state.homepagedata}
              homedata={this.state.homedata}
              />  : null}
           {this.state.showContent ? <Content  
                content = {this.state.content}
                newContent = {this.state.newContent}
                showHomePage = {this.state.showHomePage}
                showContent = {this.state.showContent}
                showContentDetail = {this.state.showContentDetail}
                showContentDetailChange = {this.showContentDetailChange.bind(this)}
                contentId = {this.state.contentId}
            

                

               />    : null}
               {this.state.showContentDetail ?
              <ContentDetail 
              content = {this.state.content}
              newContent = {this.state.newContent}
              /> : null}
          </div>
      </div>
        <Carousel  />

        <Footer />
    </div>     
    );
  }
}


export default App;
