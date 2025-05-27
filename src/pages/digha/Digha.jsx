import data from '../../Components/package-details';
import "../digha/digha.css"
import { useNavigate } from "react-router-dom";
import { useState , useEffect } from 'react';
const Digha = () =>{
  const navigate = useNavigate();      
    const dighaPackages = data.packages.filter(pkg => pkg.skuID.includes('DIGHA'));
    const imgs = [
            "https://www.travelescape.in/wp-content/uploads/2017/08/Digha-Beach.jpg",
            "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/05/16113231/digha1.jpg",
            "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/23/265c2d74294dae4cd58d5709a53bee96_1000x1000.jpg",
            "https://www.emperortraveline.com/wp-content/uploads/2017/09/Digha.jpg"
          ];

           const[index ,setIndex] = useState(0)
    
           useEffect(()=>{
          const Interval =  setInterval(() => {
                setIndex((prev)=>(prev+1)% imgs.length)
            }, 3000);
    
                return ()=>clearInterval(Interval)
           },[])
    return (
        <>
      <div className="hero" style={{ backgroundImage: `url(${imgs[index]})` }}>

<div className="overlay"></div>
<div className="hero-content">
<h1> Explore Our Digha Packages
</h1>
<p>Discover the serene beaches and vibrant culture of Digha with our curated travel packages.
</p>
</div>
</div>
            <section className="all_packages">
                <h2>Choose packages from the differnt locations of Digha</h2>
                <div className="section_packages">
<div className="packages-container">
    {dighaPackages.map(pkg => (
      <div key={pkg.skuID} className="package-card">
        <img src={pkg.image} alt="" />
        <h2>{pkg.title}</h2>
        
        <h4>{pkg.subTitle}</h4>
        <p>{pkg.description}</p>
        <strong>{pkg.markettingTitle}</strong>
        <button 
        className="learn-more-btn" onClick={() => navigate(`/package/${pkg.skuID}`)}  >   Learn More</button>
      </div>
    ))}
  </div>
  </div>
  </section>
        </>
    )
}

export default Digha;