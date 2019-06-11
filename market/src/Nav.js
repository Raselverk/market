import React from 'react';



class Nav extends React.Component {
render() {
    return (
        <div className="ui compact vertical labeled icon menu">
            
                <a className="item"  href="/phones" onClick={this.props.phones}>
                  <i className="mobile alternate icon"></i>
                  <b>Смартфони</b>
                </a>
                <a className="item" href="/tv" onClick={this.props.tv}>
                  <i className="tv icon"></i>
                  <b>ТВ</b>
                </a>
                <a className="item" href="/tablet" onClick={this.props.tablet}>
                  <i className="tablet alternate icon"></i>
                  <b>Планшети</b>
                </a>
                <a  className="item" href="/camera" onClick={this.props.photo}>
                  <i className="camera retro icon"></i>
                  <b>Фотокамери</b>
                </a>
                <a className="item" href="/laptop" onClick={this.props.laptop}>
                  <i className="laptop icon"></i>
                  <b>Ноутбуки</b>
                </a>
                <a className="item" href="/music" onClick={this.props.audio}>
                  <i className="music icon"></i>
                  <b>Акустика</b>
                </a> 
            </div>
    );}

}

export default Nav;