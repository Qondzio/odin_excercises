import { useEffect, useState } from 'react'
import './styles/MainSection.css'
import shopping1 from './assets/shopping1.jpg'
import shopping2 from './assets/shopping2.jpg'
import shopping3 from './assets/shopping3.jpg'
import infoImage1 from './assets/dollar.png'
import infoImage2 from './assets/star.png'
import infoImage3 from './assets/delivery-truck.png'

const imageArray = [shopping1, shopping2, shopping3];

function MainSection() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(prev => (prev + 1) % imageArray.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main_home">
      <div className="images">
        <div
          className="image-slider"
          style={{
            transform: `translateX(-${imageIndex*100}%)`
        }}
        >
          {imageArray.map((img, i) => (
            <img key={i} src={img} alt={`shopping ${i}`} />
          ))}
        </div>
      </div>

      <div className="shop_info">
        <div>
          <img src={infoImage1} alt="dollar" />
          <h4>Cheap prices</h4>
          <p>Enjoy top deals and unbeatable prices on every purchase</p>
        </div>
        <div>
          <img src={infoImage2} alt="star" />
          <h4>Quality items</h4>
          <p>Shop from a handpicked collection built to last</p>
        </div>
        <div>
          <img src={infoImage3} alt="delivery" />
          <h4>Fast delivery</h4>
          <p>Get your orders delivered swiftly and securely to your doorstep</p>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
