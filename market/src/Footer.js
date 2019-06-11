import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  
  
    render() {
      return (
          <div className="footer">
                <div className="fcontent">
                    <h3>© Интернет-магазин «Vydelka» 2010–2019</h3>
                    <p>Контакти: 123-456-78, м.Львів, просп. Свободи, 1 </p>
                </div>

                <div className="social"> 
                <i className="facebook big icon"></i>
                <i className="instagram big icon"></i>
                <i className="google big icon"></i>
                <i className="youtube big icon"></i>
                </div>

                <div className="back1">
                    <p>Магазины и точки выдачи</p>
                    <p>График работы Call-центра</p>
                </div>

                <div className="back2">
                    <p>Кредит</p>
                    <p>Доставка и оплата</p>
                </div>
            </div>
      );
    }
}

export default Footer;