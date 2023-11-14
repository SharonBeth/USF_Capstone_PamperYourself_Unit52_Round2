import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText, 
  Button,
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem, 
  Carousel, 
  CarouselItem, 
  CarouselControl, 
  CarouselIndicators, 
  CarouselCaption   
} from "reactstrap";
import { render } from "react-dom";

const videos = [
  {
    id: 1,
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    id: 2,
    altText: 'Slide 2',
    caption: 'Slide 2',
  },
  {
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3',
  },
];
  
  
function Example(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === videos.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? videos.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    };
  
    const slides = videos.map((video) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={video.id}
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
        >
          <CarouselCaption
            className="text-danger"
            captionText={video.caption}
            captionHeader={video.caption}
          />
        </CarouselItem>
      );
    });
  
    return (
      <div>
        <style>
          {`.custom-tag {
                max-width: 100%;
                height: 500px;
                background: gray;
              }`}
        </style>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            videos={videos}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>
    );
  }
  
export default Example;
