import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { Carousel } from 'react-bootstrap';

import { useScreenProperties } from 'hooks/ScreenPropertiesContext';
import { ReactComponent as DecorationSvg } from '../../assets/svg/decoration.svg';
import {
  BannerSlide,
  SmallText,
  BigText,
  TitleContainer,
  CarouselContainer,
  DecorationText,
  DecorationContainer,
} from './styles';

interface Slide {
  id: number;
  title: string;
  image: string;
}

interface BannerSliderProps {
  items: Slide[];
}

const BannerSlider: React.FC<BannerSliderProps> = ({ items }) => {
  const { isMobile } = useScreenProperties();

  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <>
      <TitleContainer
        as={motion.section}
        transition={{ delay: 0.5, duration: 0.5 }}
        variants={{
          show: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        initial="hidden"
        animate="show"
        isMobile={isMobile}
      >
        <SmallText isMobile={isMobile}>meus</SmallText>
        <BigText isMobile={isMobile}>Destaques</BigText>
      </TitleContainer>

      {items && (
        <CarouselContainer isMobile={isMobile}>
          <div className="carousel">
            <Carousel
              activeIndex={activeIndex}
              onSelect={key => setActiveIndex(key)}
              nextIcon=""
              prevIcon=""
              interval={4000}
            >
              {items.map(item => {
                return (
                  <Carousel.Item key={item.id}>
                    <BannerSlide src={item.image} alt="slide" />
                    {isMobile && (
                      <Carousel.Caption>{item.title}</Carousel.Caption>
                    )}
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </CarouselContainer>
      )}

      {!isMobile && (
        <DecorationContainer
          as={motion.section}
          initial={{ x: '-1000px' }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <DecorationSvg width="120px" />
          <DecorationText isMobile={isMobile}>
            {items[activeIndex].title}
          </DecorationText>
        </DecorationContainer>
      )}
    </>
  );
};

export default BannerSlider;
