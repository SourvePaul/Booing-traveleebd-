import { faCircleArrowLeft, faCircleArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import "./hotel.css";
import { faCircle, faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const Hotel = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/336704379.jpg?k=3c40a3a2327a2ddf5584a6f1793222bef0da4df1e91b14f011fe7c8ef4bd48b5&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/336704580.jpg?k=49bec73803d66779d6bd1629afa8fb0f13e071d30ef9add8a71ecd55ef1d7aed&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/230024110.jpg?k=276e9fa737bff404b38705f292adb8a98080bd4c23f7b1baf0d4cec660d7fa39&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/350232941.jpg?k=9cd48176cd439799a583c0cb381a945582512e01814117eba2d35f89b9265508&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/336704863.jpg?k=422c14c492ec1574dc5d463dac449eb9e1b0735cb41c1579996668bc6da055ee&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/336705369.jpg?k=fb06bb899ff344d93def86ac22afdb2388b52ca96ea3fffc03781c1cf223b716&o=&hp=1",
        },
    ];

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    };

    const handleMove = (direction) => {
        let newSlideNumber; 

        if(direction==="l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1;
        }
        else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1;
        }

        setSlideNumber(newSlideNumber)
    };

    return (
        <div>
            <Navbar />
            <Header type="list"/> 
            <div className="hotelContainer">
                {open && (
                <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" 
                    onClick={()=>setOpen(false)} 
                    />
                    <FontAwesomeIcon icon={faCircleArrowLeft} 
                    className="arrow" 
                    onClick={()=>handleMove("l")} 
                    />
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")} />

                </div>
                )}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">
                        Grand Hotel
                    </h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St 125 New York</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location - 500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo,i)=>(
                            <div className="hotelImgWrapper" key={i}>
                                <img 
                                onClick={()=>handleOpen(i)} src={photo.src} 
                                alt="" 
                                className="hotelImg" 
                                />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                            <p className="hotelDesc">
                            Set in Dubai, 5 mi from Dubai World Trade Center, IntercityHotel Dubai Jaddaf Waterfront offers accommodations with a restaurant, free private parking, an outdoor swimming pool and a fitness center. Among the facilities at this property are luggage storage space, along with free WiFi throughout the property. The accommodations features entertainment staff and a 24-hour front desk. All guest rooms come with air conditioning, a flat-screen TV with satellite channels, a kettle, a shower, a hairdryer and a desk. At the hotel all rooms have a wardrobe and a private bathroom.
                            Guests at IntercityHotel Dubai Jaddaf Waterfront can enjoy a continental or a buffet breakfast. A business center and vending machines with drinks and snacks are available on site at the accommodations.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                            Dubai Aquarium & Underwater Zoo is 5 mi from IntercityHotel Dubai Jaddaf Waterfront, while Dubai Mall is 5.8 mi from the property. The nearest airport is Dubai International Airport, 3.1 mi from the hotel.
                            </span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    );
};

export default Hotel;