import data from '../../Components/package-details';
import '../digha/single-package.css';
import BookingForm from '../../Components/BookingForm';
import { useState, useEffect } from 'react';

const Digha_Tajpur = () => {
  const DighaTajpur = data.packages.filter(dig => dig.skuID.includes('DIGHA-001'));

  const imgs = [
    "https://www.travelescape.in/wp-content/uploads/2017/08/Digha-Beach.jpg",
    "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/05/16113231/digha1.jpg",
    "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/23/265c2d74294dae4cd58d5709a53bee96_1000x1000.jpg",
    "https://www.emperortraveline.com/wp-content/uploads/2017/09/Digha.jpg"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % imgs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="package-detail-container">
      {DighaTajpur.map((dig) => (
        <div className="package-detail-card" key={dig.skuID}>
          <div className="package-hero" style={{ backgroundImage: `url(${imgs[index]})` }}>
            <div className="package-hero-overlay"></div>
            <div className="package-hero-content">
              <h1 className="package-title">{dig.subTitle}</h1>
              <p className="package-description">{dig.description}</p>
            </div>
          </div>
          <div className='description'>
            <h2>{dig.markettingTitle}</h2>
            <p>{dig.markettingSubTitle}</p>
          </div>
          <div className='inclusions-exclusions'>
            <div className='inclusion'>
                  <h3>Inclusions</h3>
              <ul>
                <li>{dig.inclusions[0]}</li>
                <li>{dig.inclusions[1]}</li>
                <li>{dig.inclusions[2]}</li>
                <li>{dig.inclusions[3]}</li>
              </ul>
            </div>
            <div className='exclusions'>
                  <h3>Exclusions</h3>
              <ul>
                <li> {dig.exclusions[0]}</li>
                    <li> {dig.exclusions[1]}</li>
                        <li> {dig.exclusions[2]}</li>
              </ul>
            </div>
          </div>
          <div className='gallery_grid'>
            <h3>Photo Gallery</h3>
            <div className='gallerys'>
                {dig.gallery.map((img,index)=>{
                    return(
 <img key={index} src={img.url} />
                    ) 
                })}
            </div>
          </div>
      <div className='itinerary-section'>
  <h3>Itinerary</h3>
  {dig.itineraries.map((dayItem, index) => (
    <div key={index} className='itinerary-day'>
      <h4>Day {dayItem.day}: {dayItem.title}</h4>
      <ul>
        {dayItem.itinerary.map((item, idx) => (
          <li key={idx}>
            <p>{item.description}</p>
            {item.details && (
              <ul>
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
  <section class="cta">
    <h2>Book Now for ₹4699/- per person (4-6 pax)</h2>
    <p>Whether you seek adventure, scenic beauty, or cultural exploration, this package has it all! 🌊🌅</p>
    <button>Book Now</button>
  </section>    
        </div>
      ))}
    </div>
  );
};

export default Digha_Tajpur;
