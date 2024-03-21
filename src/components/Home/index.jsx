import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";

import sprite from "../../helpers/icons/sprite.svg";
import usual from "../../helpers/img/HeroImg@1x.jpg";
import retina from "../../helpers/img/HeroImg@2x.jpg";
import { db } from "../../firebase";

import {
  HeroText,
  HeroTitle,
  NavLinkStyled,
  Span,
  StyledContainer,
  SvgStyled,
  HeroWrapper,
  ImageWrapper,
  HeroMainText,
  HeroInfoBox,
  CheckBackground,
  InfoTitle,
  InfoNumber,
  QuestionIcon,
  UsersIcon,
} from "./Home.styled.js";

const Home = () => {
  const [collectionSize, setCollectionSize] = useState(0);

  useEffect(() => {
    async function fetchPsychologists() {
      try {
        const psychologistsCol = collection(db, "psychologists");
        const psychologistsSnapshot = await getDocs(psychologistsCol);
        const psychologistsList = psychologistsSnapshot.docs.length;
        setCollectionSize(psychologistsList);
      } catch (error) {
        console.error("Error fetching psychologists:", error);
      }
    }
    fetchPsychologists();
  }, []);

  return (
    <>
      <StyledContainer>
        <HeroWrapper>
          <HeroMainText>
            <HeroTitle>
              The road to the <Span>depths</Span> of the human soul
            </HeroTitle>
            <HeroText>
              We help you to reveal your potential, overcome challenges and find
              a guide in your own life with the help of our experienced
              psychologists.
            </HeroText>
            <NavLinkStyled to="/psychologists">
              Get started
              <SvgStyled width="18" height="22">
                <use href={`${sprite}#arrow`} />
              </SvgStyled>
            </NavLinkStyled>
          </HeroMainText>
          <ImageWrapper>
            <img
              srcSet={`${usual} 1x, ${retina} 2x`}
              width="464"
              height="526"
              alt="psychologist"
            />
            <HeroInfoBox>
              <CheckBackground>
                <svg width="30" height="30">
                  <use href={`${sprite}#check`} />
                </svg>
              </CheckBackground>
              <div>
                <InfoTitle>Experienced psychologists</InfoTitle>
                <InfoNumber>
                  {collectionSize === 0 ? 32 : collectionSize}
                </InfoNumber>
              </div>
            </HeroInfoBox>
            <QuestionIcon>
              <svg width="17" height="18">
                <use href={`${sprite}#question`} />
              </svg>
            </QuestionIcon>
            <UsersIcon>
              <svg width="28" height="28">
                <use href={`${sprite}#users`} />
              </svg>
            </UsersIcon>
          </ImageWrapper>
        </HeroWrapper>
      </StyledContainer>
    </>
  );
};

export default Home;
