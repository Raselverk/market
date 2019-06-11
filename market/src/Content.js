import React from 'react';
import './Content.css';
// import { bindExpression } from '@babel/types';
// import ContentDetail from './ContentDetail.js';
// import data from './data.js';



const Content = props => {
  const newContent = props.content.map((data) => {  
    // props.contentId = ((data) => data.id )
       return (
         
        <div className="card one" key={data.id} >
            <div className="image">
              <img className="img" style={{marginLeft: '27px', width: '110px', height: '110px', marginTop: '5px', marginBottom: '5px'  }}  src={data.img} alt='s' />
            </div>
            <div className="content">
                <div className="header">{data.name}</div>
                <p>{data.model}</p>
                <p>{data.price}</p>
                <div className="button">
                  <button className="ui green button" onClick={props.showContentDetailChange}>Деталі</button>
                </div>
            </div>
        </div>  
            
       );
       
});



return (
      <div>
        <div className="ui link six stackable cards">
          {newContent}
        </div>
        {/* < ContentDetail /> */}
       </div>
      
);}





export default Content;
