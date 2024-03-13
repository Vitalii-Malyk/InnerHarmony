import HeroImage from "../../helpers/img/HeroImg.jpg";
import {
  TitleAccent,
  TitleStyle,
  Text,
  StartedBtn,
  HeroWrap,
  HeroImg,
} from "./Hero.styled";

const Hero = () => {
  return (
    <>
      <HeroWrap>
        <div>
          <TitleStyle>
            The road to the <TitleAccent>depths</TitleAccent> of the human soul
          </TitleStyle>
          <Text>
            We help you to reveal your potential, overcome challenges and find a
            guide in your own life with the help of our experienced
            psychologists.
          </Text>
          <StartedBtn>Get started</StartedBtn>
        </div>
        <div>
          <HeroImg src={HeroImage} alt="HeroPicture" />
        </div>
      </HeroWrap>
    </>
  );
};

export default Hero;
