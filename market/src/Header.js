import React from 'react';
import './Header.css';
import rozetka from './img/rozetka.jpg';



class Header extends React.Component {

render() {
    return (
    <div className="mainHeader">
       <div onClick={this.props.main}>
        <div className="logo">
            <img src={rozetka} alt='logo' />
        </div>

        <div className="name">
            <h1 className="vydelka">VYDELKA</h1>
            <p className="descr">Інтернет-магазин</p>
        </div>
        </div> 
    
       

        <div className="search">
            <input className="searcher" type="text" placeholder="Пошук" />
        </div>

        <div className="btnconteiner">
            <button className="srchbutton">Шукати</button>
        </div>
        <div className="shop">
            <a href="/">
            <i className="shopping basket icon"></i>
            </a>
       </div>

    </div>
        );
    }
}
export default Header;
