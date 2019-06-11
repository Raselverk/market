import React from 'react';
import './ContentDetail.css';


const ContentDetail = props => {
  
  const newOne = props.content.map((data, props) => { 
    
        return(
          <div key={data.id}>
            <div className="contentDetial" >
              <div className="contentDetailImg">
                <img className="Img" src={data.img} alt='macbook' />
              </div>
              <div className="contentDescription">
                <h1>Ім'я: {data.name}</h1>
                <h1>Модель: {data.model}</h1>
                <h3>Ціна: {data.price} <button className="ui green button">В корзину</button></h3>     
                <p>Опис: {data.description}</p>
              </div>
             </div>
            </div>  
            
        );
  })
  return (
    <div>
      <div className="mainContentDetail">
        {newOne}
      </div>
    </div>
  );
}



export default ContentDetail;