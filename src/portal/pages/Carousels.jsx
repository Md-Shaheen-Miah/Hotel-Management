
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import second from '../../assets/images/carasol1.webp'
import first from '../../assets/images/carasol2.webp'
import third from '../../assets/images/carasol3.jpg'


function Carousels() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img style={{width:'100%',height:'600px'}} src={second} alt="" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:'100%',height:'600px'}} src={first} alt="" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:'100%',height:'600px'}} src={third} alt="" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;