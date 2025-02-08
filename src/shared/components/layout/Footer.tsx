import React, { useRef } from "react";
import styled from "styled-components";
import Link from "next/link";
import { theme } from "@/styles/theme";
import Image from "next/image";
import logo from "@/shared/assets/Fusion.svg";
import linkedin from "@/shared/assets/linkedin.svg";

const Footer = () => {
  return (
    <FooterBlock>
      <Container>
        <FooterTop>
          <LogoWrapper></LogoWrapper>
          <Nav>
            <List>
              <SecondList></SecondList>
            </List>
          </Nav>
        </FooterTop>
        <FooterBottom>
          <FooterBottomRight>
            <InfoText>Fusion web</InfoText>
            <InfoText>All rights are reserved </InfoText>
            <AnotherText>Got interested?</AnotherText>{" "}
            <a href="tel:+19297696545">
              <AnotherText>Contact us</AnotherText>
            </a>
            <IconLink href="https://www.linkedin.com/company/fusion-web-works/?viewAsMember=true">
              <Image src={linkedin} width={30} height={40} alt="icon" />
            </IconLink>
          </FooterBottomRight>
          <FooterBottomLeft>
            <IconLink href="/">
              <Image src={logo} width={290} height={130} alt="icon" />
            </IconLink>{" "}
          </FooterBottomLeft>
        </FooterBottom>
      </Container>
    </FooterBlock>
  );
};

const { colors, containers, mqMax } = theme;
const IconLink = styled(Link)`
  display: flex;
  justify-content: center;
  z-index: 99999;
  font-family: "Plus Jakarta Sans", sans-serif;

  ${theme.mqMax("lg")} {
    width: 100%;
    transform: scale(0.95);
    /* margin-left: 51.5px; */
  }
  ${theme.mqMax("sm")} {
    /* margin-left: 20px; */
  }
`;
const FooterBlock = styled.footer`
  padding-top: 171px;
`;
const Container = styled.div`
  max-width: ${containers.main};
  margin: 0 auto;
  ${mqMax("xl")} {
    padding: 0 13px;
  }
`;
const AnotherText = styled.h4`
  font-size: 15px;
  font-family: "Plus Jakarta Sans", sans-serif;
`;
const FooterTop = styled.div`
  display: flex;
  column-gap: 100px;
  padding-bottom: 40px;
  border-bottom: 1px solid #bdbdbd;
  ${mqMax("md")} {
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
  }
`;
const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  grid-column-gap: 84px;
`;
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 84px;
  row-gap: 20px;
  ${mqMax("md")} {
    justify-content: center;
  }
`;
const SecondList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 84px;
  row-gap: 40px;
  height: fit-content;
  a {
    display: inline-block;
  }
  ${mqMax("lg")} {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 15px;
  }
`;
const Item = styled.li`
  max-width: 160px;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  ${mqMax("lg")} {
    row-gap: 15px;
  }
`;
const ItemTitle = styled.h4`
  font-family: "Oswald", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${colors.dark};
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;
const ContentItem = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${colors.gray_200};
`;
const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Oswald";
  margin: 36px 0 56px;
  ${theme.mqMax("md")} {
    flex-direction: column;
  }
`;
const FooterBottomRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 500px;
  width: 100%;
  ${theme.mqMax("md")} {
    flex-direction: column;
    row-gap: 30px;
  }
`;
const FooterBottomLeft = styled.div`
  display: flex;
  column-gap: 20px;
`;
const InfoText = styled.p`
  font-family: "Oswald", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  color: ${colors.gray_200};
`;

const LogoWrapper = styled.div``;

export default Footer;
