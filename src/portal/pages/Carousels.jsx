
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import second from '../../assets/images/carasol1.webp'
import first from '../../assets/images/carasol2.webp'
import third from '../../assets/images/carasol3.jpg'
import { NavLink } from 'react-router-dom';
import { color } from 'chart.js/helpers';


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
        
      <button style={{marginRight:'15%',padding:'20px', backgroundColor:'#1dacd6',border:'none'}}> <NavLink style={{color:'#ffffff',textDecoration:'none'}} to="">OUR ROOMS</NavLink> </button>
      <button style={{marginleft:'15%',padding:'20px', backgroundColor:'#1dacd6',border:'none'}}> <NavLink  style={{color:'#ffffff',textDecoration:'none'}} to="">BOOK ROOM</NavLink> </button>
     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:'100%',height:'600px'}} src={first} alt="" />
        <Carousel.Caption>
        <button style={{marginRight:'15%',padding:'20px', backgroundColor:'#1dacd6',border:'none'}}> <NavLink style={{color:'#ffffff',textDecoration:'none'}} to="">OUR ROOMS</NavLink> </button>
      <button style={{marginleft:'15%',padding:'20px', backgroundColor:'#1dacd6',border:'none'}}> <NavLink  style={{color:'#ffffff',textDecoration:'none'}} to="">BOOK ROOM</NavLink> </button>
     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:'100%',height:'600px'}} src={third} alt="" />
        <Carousel.Caption>
        <button style={{marginRight:'15%',padding:'20px', backgroundColor:'#1dacd6',border:'none'}}> <NavLink style={{color:'#ffffff',textDecoration:'none'}} to="">OUR ROOMS</NavLink> </button>
      <button style={{marginleft:'15%',padding:'20px', backgroundColor:'#1dacd6',border:'none'}}> <NavLink  style={{color:'#ffffff',textDecoration:'none'}} to="">BOOK ROOM</NavLink> </button>
     
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;