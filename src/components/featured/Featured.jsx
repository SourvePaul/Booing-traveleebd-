import "./featured.css"

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img 
                src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" 
                alt="" 
                className="featuredImg" 
                />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img 
                src="https://q-xx.bstatic.com/xdata/images/city/500x500/639741.jpg?k=b81d819541975652aba5d49f6651429dc4bfc63fd50e0dfa42e2fb08eff3b5a9&o=" 
                alt="" 
                className="featuredImg" 
                />
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h2>532 properties</h2>
                </div>
            </div>
            
            <div className="featuredItem">
                <img 
                src="https://q-xx.bstatic.com/xdata/images/city/500x500/642086.jpg?k=935f5fd0b5f441cf137bfd222af9bcc80c6ab13463ddf227072679a10a35c5fb&o=" 
                alt="" 
                className="featuredImg" 
                />
                <div className="featuredTitles">
                    <h1>Reno</h1>
                    <h2>533 properties</h2>
                </div>
            </div>
        </div>
    );
};

export default Featured;