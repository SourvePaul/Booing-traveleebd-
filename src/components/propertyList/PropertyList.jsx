import "./propertyList.css";

const PropertyList = () => {
    return (
        <div className="pList">
            <div className="pListItem">
                <img src="https://q-xx.bstatic.com/xdata/images/hotel/300x300/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>

            <div className="pListItem">
                <img src="https://cf.bstatic.com/xdata/images/xphoto/square300/45450056.webp?k=ec06e288d970ae0657f141601af7ce336007d019ec5a5e7b91e7dda15f22f4cf&o=" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Apartments</h1>
                    <h2>2331 hotels</h2>
                </div>
            </div>

            <div className="pListItem">
                <img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x300/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o=" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Resorts</h1>
                    <h2>23 hotels</h2>
                </div>
            </div>

            <div className="pListItem">
                <img src="https://r-xx.bstatic.com/xdata/images/hotel/300x300/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>

            <div className="pListItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square300/227683814.webp?k=446c142ec9f06d270921f26d21df952a01cf9ec2ee2c754fcadc8bfda3f2e515&o=" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Cabins</h1>
                    <h2>33 hotels</h2>
                </div>
            </div>
        </div>
    );
};

export default PropertyList;