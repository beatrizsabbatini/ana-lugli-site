import React, { useEffect, useState } from 'react';

import './styles.css';
import colors from 'constants/colors';
import {
  CategoriesListContainer,
  Container,
  Label,
  IconsAndButtonContainer,
  IconContainer,
  Icons,
  ButtonContainer,
  ButtonText,
  ArrowRight,
  ArrowLeft,
} from './styles';
import { categories } from '../../constants/mock';
import { ReactComponent as InstagramIcon } from '../../assets/svg/instagram.svg';
import { ReactComponent as BehanceIcon } from '../../assets/svg/behance.svg';
import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook.svg';
import ArrowLeftImg from '../../assets/arrow-left.png';
import ArrowRightImg from '../../assets/arrow-right.png';
import CategoriesList, { Category } from './components/CategoriesList';

function CategoriesCards() {
  const [firstChecked, setFirstChecked] = useState(true);
  const [secondChecked, setSecondChecked] = useState(false);
  const [thirdChecked, setThirdChecked] = useState(false);
  const [fourthChecked, setFourthChecked] = useState(false);
  const [fifthChecked, setFifthChecked] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(categories[0]);

  useEffect(() => {
    setCurrentTheme(categories[0]);
  }, []);

  function resetFields() {
    setFirstChecked(false);
    setSecondChecked(false);
    setThirdChecked(false);
    setFourthChecked(false);
    setFifthChecked(false);
  }

  function handleRightClick() {
    resetFields();
    switch (currentTheme.id) {
      case 0:
        setSecondChecked(true);
        setCurrentTheme(categories[1]);

        break;

      case 1:
        setThirdChecked(true);
        setCurrentTheme(categories[2]);

        break;

      case 2:
        setFourthChecked(true);
        setCurrentTheme(categories[3]);

        break;

      case 3:
        setFifthChecked(true);
        setCurrentTheme(categories[4]);

        break;

      case 4:
        setFirstChecked(true);
        setCurrentTheme(categories[0]);

        break;

      default:
        break;
    }
  }

  function handleLeftClick() {
    resetFields();
    switch (currentTheme.id) {
      case 0:
        setFifthChecked(true);
        setCurrentTheme(categories[4]);

        break;

      case 1:
        setFirstChecked(true);
        setCurrentTheme(categories[0]);

        break;

      case 2:
        setSecondChecked(true);
        setCurrentTheme(categories[1]);

        break;

      case 3:
        setThirdChecked(true);
        setCurrentTheme(categories[2]);

        break;

      case 4:
        setFourthChecked(true);
        setCurrentTheme(categories[3]);

        break;

      default:
        break;
    }
  }

  return (
    <Container>
      <CategoriesListContainer>
        <CategoriesList currentTheme={currentTheme} />
      </CategoriesListContainer>
      <section id="slider">
        <input
          type="radio"
          name="slider"
          id="s1"
          checked={firstChecked}
          onClick={() => {
            resetFields();
            setCurrentTheme(categories[0]);
            setFirstChecked(true);
          }}
        />
        <input
          type="radio"
          name="slider"
          id="s2"
          checked={secondChecked}
          onClick={() => {
            resetFields();
            setCurrentTheme(categories[1]);
            setSecondChecked(true);
          }}
        />
        <input
          type="radio"
          name="slider"
          id="s3"
          checked={thirdChecked}
          onClick={() => {
            resetFields();
            setCurrentTheme(categories[2]);
            setThirdChecked(true);
          }}
        />
        <input
          type="radio"
          name="slider"
          id="s4"
          checked={fourthChecked}
          onClick={() => {
            resetFields();
            setCurrentTheme(categories[3]);
            setFourthChecked(true);
          }}
        />
        <input
          type="radio"
          name="slider"
          id="s5"
          checked={fifthChecked}
          onClick={() => {
            resetFields();
            setCurrentTheme(categories[4]);
            setFifthChecked(true);
          }}
        />

        <ArrowLeft onClick={handleLeftClick}>
          <img src={ArrowLeftImg} alt="arrow left" />
        </ArrowLeft>

        <ArrowRight onClick={handleRightClick}>
          <img src={ArrowRightImg} alt="arrow Right" />
        </ArrowRight>

        <Label htmlFor="s1" id="slide1" url={categories[0].url} />
        <Label htmlFor="s2" id="slide2" url={categories[1].url} />
        <Label htmlFor="s3" id="slide3" url={categories[2].url} />
        <Label htmlFor="s4" id="slide4" url={categories[3].url} />
        <Label htmlFor="s5" id="slide5" url={categories[4].url} />
      </section>
      <IconsAndButtonContainer>
        <Icons>
          <IconContainer>
            <BehanceIcon height="30px" width="30px" fill={colors.pink} />
          </IconContainer>
          <IconContainer>
            <InstagramIcon height="30px" width="30px" fill={colors.pink} />
          </IconContainer>
          <IconContainer>
            <FacebookIcon height="30px" width="30px" fill={colors.pink} />
          </IconContainer>
        </Icons>
        <ButtonContainer>
          <ButtonText>VER TODAS AS CATEGORIAS</ButtonText>
        </ButtonContainer>
      </IconsAndButtonContainer>
    </Container>
  );
}

export default CategoriesCards;
