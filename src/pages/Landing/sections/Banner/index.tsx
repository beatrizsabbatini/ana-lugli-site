import React from 'react';

import BannerSlider from 'components/BannerSlider';
import FirstSlideImage from '../../../../assets/slide1.jpg';
import SecondSlideImage from '../../../../assets/slide2.png';
import ThirdSlideImage from '../../../../assets/slide3.png';

const Banner: React.FC = () => {
  const slides = [
    {
      id: 1,
      title: 'Show Vanessa da Mata',
      image: FirstSlideImage,
    },
    {
      id: 2,
      title: 'Stand-up Bruna Louise',
      image: SecondSlideImage,
    },
    {
      id: 3,
      title: 'Ensaio Fotográfico',
      image: ThirdSlideImage,
    },
  ];

  return <BannerSlider items={slides} />;
};

export default Banner;
