import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../mainpackagepage/Allpackage.css"

const Allpackage = () => {
    const navigate = useNavigate(); // ✅ Call it at the top

    const locationName = [
        {
            location: "Digha",
            description: "A serene beach town in West Bengal, Digha is perfect for a peaceful seaside getaway. Enjoy golden sands, gentle waves, and stunning sunsets along the Bay of Bengal. Ideal for family trips and weekend escapes.",
            imageurl: "https://www.travelescape.in/wp-content/uploads/2017/08/Digha-Beach.jpg",
            link: "/digha"
        },
        {
            location: "Mandarmani",
            description: "One of Bengal’s cleanest and longest motorable beaches, Mandarmani offers a peaceful escape with rolling waves, golden sand, and thrilling beach activities. Perfect for couples and weekend breaks.",
            imageurl: "https://cdn.guidetour.in/wp-content/uploads/2017/05/Places-to-visit-in-Mandarmani.jpg.webp",
            link: "/mandarmani"
        },
        {
            location: "Jharkand",
            description: "A land of forests, waterfalls, and tribal culture, Jharkhand is a hidden gem for nature lovers. Explore scenic hills, wildlife sanctuaries, and ancient temples in this offbeat adventure destination.",
            imageurl: "https://www.tusktravel.com/blog/wp-content/uploads/2021/06/Patratu-Valley-Jharkhand.jpg",
            link: "/jharkand"
        }
    ];

    const imgs = [
        "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg",
        "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg",
        "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg",
        "https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg"
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % imgs.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="hero" style={{ backgroundImage: `url(${imgs[index]})` }}>
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1>Explore Our Travel Packages</h1>
                    <p>
                        Book your next getaway with The Adventures Bay and dive into unforgettable experiences! Whether you're craving the sandy shores of Digha, the coastal charm of Mandarmani, or the scenic beauty of Jharkhand, our curated packages are perfect
                    </p>
                </div>
            </div>
            <section className="all_packages">
                <h2>Choose the packages according to the location</h2>
                <div className="section_packages">
                    {locationName.map((location, i) => (
                        <div key={i} className="location">
                            <img src={location.imageurl} alt={location.location} />
                            <h4>{location.location}</h4>
                            <p>{location.description}</p>
                            <button onClick={() => navigate(location.link)}>Learn More</button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Allpackage;
