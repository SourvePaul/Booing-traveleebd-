import "./freaturedProperties.css";

const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img 
                src="https://cf.bstatic.com/xdata/images/hotel/max600/7991107.jpg?k=b4c80a2ce0a0649879fc9e78efaadbc8be9bb79ae661aff7f37262ef872586a0&o=" 
                alt="" 
                className="fpImg" 
                />
                <span className="fpName">Apartment State Miasto</span>
                <span className="fpCity">Madrid</span>
                <span className="fpPrice">Starting from $120</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>

            <div className="fpItem">
                <img 
                src="https://cf.bstatic.com/xdata/images/hotel/max600/98934908.jpg?k=5a652f4e5bbd201df5f67cb59cb90eb31e4ad578226c3c87e280544906b587b8&o=" 
                alt="" 
                className="fpImg" 
                />
                <span className="fpName">Apartment State Miasto</span>
                <span className="fpCity">Madrid</span>
                <span className="fpPrice">Starting from $120</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>

            <div className="fpItem">
                <img 
                src="https://cf.bstatic.com/xdata/images/hotel/max600/39615603.jpg?k=ffa7f14b1c5235c8883662876734f832a596de617cd8380ce1025fb21bc92df9&o=" 
                alt="" 
                className="fpImg" 
                />
                <span className="fpName">Comfort Suites Airport</span>
                <span className="fpCity">Austin</span>
                <span className="fpPrice">Starting from $140</span>
                <div className="fpRating">
                    <button>9.3</button>
                    <span>Exceptional</span>
                </div>
            </div>

            <div className="fpItem">
                <img 
                src="https://cf.bstatic.com/xdata/images/hotel/max600/103951224.jpg?k=03736dd4e1e89c1132e4957149e394d01ac6e8f64f4b09e30ade97a6176f0640&o=" 
                alt="" 
                className="fpImg" 
                />
                <span className="fpName">Four Seasons Hotel</span>
                <span className="fpCity">Lisbon</span>
                <span className="fpPrice">Starting from $99</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProperties;