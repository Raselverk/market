import React from 'react';
import './HomePageContent.css';

const HomePageContent = props => {
  const homedata = props.homepagedata.map((data) => {  
       return (

        <div className="card one" key={data.id}>
            <div className="image">
              <img className="img" style={{marginLeft: '27px', width: '110px', height: '110px', marginTop: '5px', marginBottom: '5px'  }}  src={data.img} alt='s' />
            </div>
            <div className="content">
                <div className="header">{data.name}</div>
                <p>{data.model}</p>
                <p>{data.price}</p>
                <div className="button">
                  <button className="ui green button">Деталі</button>
                </div>
            </div>
        </div>       
       );
});
return (
  <div className="homePage">
    <h1>Ласкаво просимо у Наш інтернет-магазинa Vydelka</h1>
    <h2>Бажаємо приємних покупок :)</h2>
    <div className="ui link six stackable cards">{homedata}</div>
  </div>
  
);}

export default HomePageContent;