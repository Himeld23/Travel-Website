import data from '../../Components/package-details';
import '../digha/single-package.css';
import { useState, useEffect } from 'react';
import { Popup } from '../../Components/popup/popup';

const Talsari = () => {
  const DighaTajpur = data.packages.filter(dig => dig.skuID.includes('DIGHA-002'));

  const imgs = [
    "https://odishatourism.gov.in/content/dam/tourism/home/discover/attractions/beaches/talsari/talsari%20corosal1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMlzDKBRn5h118nOaJpEtMT4CyL_L9_DIeIA&s",
    "https://odishatourism.gov.in/content/dam/tourism/home/discover/attractions/beaches/talsari/talsari%20corosal3.jpg",
    "https://www.emperortraveline.com/wp-content/uploads/2017/09/Digha.jpg"
  ];

  const [index, setIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

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
          <div className='bg-page'>
            <div className='description'>
              <h2>{dig.markettingTitle}</h2>
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
                  <li>{dig.exclusions[0]}</li>
                  <li>{dig.exclusions[1]}</li>
                  <li>{dig.exclusions[2]}</li>
                </ul>
              </div>
            </div>

            <div className='gallery_grid'>
              <h3>Photo Gallery</h3>
              <div className='gallerys'>
                {dig.gallery.map((img, index) => (
                  <img key={index} src={img.url} />
                ))}
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

            <section className="cta">
              <h3>{dig.price}</h3>
              <p>{dig.markettingSubTitle}</p>
              <button onClick={() => setShowPopup(true)}>Book Now</button> {/* ✅ FIXED */}
            </section>
          </div>
        </div>
      ))}

      {/* ✅ Render popup only when needed */}
      {showPopup && <Popup closePopup={() => setShowPopup(false)} />}
    </div>
  );
};

export default Talsari;
