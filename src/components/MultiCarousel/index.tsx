import React from 'react';
import Carousel, { CarouselProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

type MultiCarouselProps = Omit<CarouselProps, 'responsive'> & {
  children: React.ReactNode;
};

function MultiCarousel({ children, ...props }: MultiCarouselProps) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  };
  return (
    <Carousel responsive={responsive} {...props}>
      {children}
    </Carousel>
  );
}

export default MultiCarousel;
