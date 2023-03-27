import React from 'react';
import './Banner.css';
import background from "../Mitsubishi/background.jpg";
import carlogo from "../Mitsubishi/auto.png";
import logo from "../Mitsubishi/5jahre8jahregarantie.svg";
import mitlogo from "../Mitsubishi/Mitsubishi.svg";
import flash from "../Mitsubishi/flash.png";
import felge from "../Mitsubishi/Felge.png";
const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner-content">
          <img src={background} alt="Hintergrund" className="banner-background" />
          <div className="car-logo">

            <img src={carlogo} alt="Auto-Logo" />
            <img src={felge} alt="Reifenlogo" className="reifenlogo1" />
            <img src={felge} alt="Reifenlogo2" className="reifenlogo2" />
          </div>


          <div className="top-line"></div>
          <img src={mitlogo} alt="Mitsubishi-Logo" className="mitsubishi-logo" />

          <h1 className="fadeInOutAnimation overlay-element">Extra für Sie - Der Mitsubishi Space Star</h1>
          <p className="fadeInOutAnimation-delay-2s overlay-element">Jetzt als Select Sondermodelle ab 10.790 EUR1</p>
          <img src={logo} alt="Garantie-Logo" className="garantie-logo fadeInOutAnimation-delay-4s overlay-element" />

        </div>
        <div className="disclaimer-text">
          *5 Jahre Herstellergarantie bis 100.000 km, Details unter www.mitsubishi-motors.de/herstellergarantie<br></br><br></br>  1 l Empfohlener Preis Space Star Select 1.2 Benziner 52 kW (71 PS) 5-Gang der MMD Automobile GmbH, ab Importlager und solange der Vorrat reicht, zzgl. Überführungskosten, Metallic-, Perleffekt- und Premium-Metallic-Lackierung gegen Aufpreis. Der empfohl. Preis ergibt  sich aus der unverbindlichen Preisempfehlung 12.790,00 EUR abzgl. 2.000,00 EUR empfohl. Aktions-Rabatt.
          <br></br>
          <br></br>
          <span className="bold-text">Messverfahren VO (EG) 715/2007, VO (EU) 2017/1151 Space Star Select 1.2 Benziner 52 kW (71 PS) 5-Gang</span> Kraftstoffverbrauch (l/100 km) innerorts 5,4; außerorts 4,0; kombiniert 4,5. CO2-Emission (g/km) kombiniert 104. Effizienzklasse C.<br></br>

          <span className="bold-text">Space Star Select+ 1.2 Benziner 52 kW (71 PS) 5-Gang</span> Kraftstoffverbrauch (l/100 km) innerorts 5,3; außerorts 4,4; kombiniert 4,7. CO2-Emission (g/km) kombiniert 108. Effizienzklasse C. <span className="bold-text">Space Star</span> Kraftstoffverbrauch (l/100 km) kombiniert 4,7–4,5. CO2-Emission (g/km) kombiniert 108–104. Effizienzklasse C.<br></br> Die Werte wurden entsprechend neuem WLTP-Testzyklus ermittelt und auf das bisherige Messverfahren NEFZ umgerechnet.<br></br><br></br>   Abbildung zeigt Space Star Select 1.2 Benziner 52 kW (71 PS) 5-Gang  <br></br><br></br> DAT-Leitfaden: www.dat.de/co2 <br></br><br></br>Veröffentlichung der MMD Automobile GmbH, Emil-Frey-Straße 2, 61169 Friedberg
        </div>
        <div className="legal-text">
          <span className="bold-text">Space Star Select 1.2 Benziner 52 kW (71 PS) 5-Gang</span> NEFZ Kraftstoffverbrauch (l/100 km) innerorts 5,4; außerorts 4,0; kombiniert 4,5. CO2-Emission (g/km) kombiniert 104. Effizienzklasse C. Weitere Infos am Ende.
        </div>
        <button className="discover-button">Jetzt entdecken <img className="flash-image" src={flash} alt="Flash" /></button>

      </div>
    </div>
  );
}

export default Banner;
