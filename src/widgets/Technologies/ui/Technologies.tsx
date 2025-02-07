import { theme } from "@/styles/theme";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

import aws from "public/svg/technologies/aws-svgrepo-com.svg";
import css from "public/svg/technologies/css3-svgrepo-com.svg";
import docker from "public/svg/technologies/docker-16-svgrepo-com.svg";
import git from "public/svg/technologies/git-svgrepo-com.svg";
import graph from "public/svg/technologies/graphql-svgrepo-com.svg";
import html from "public/svg/technologies/html5-svgrepo-com.svg";
import js from "public/svg/technologies/javascript-1-svgrepo-com.svg";
import kuber from "public/svg/technologies/kubernetes-16-svgrepo-com.svg";
import node from "public/svg/technologies/nodejs01-svgrepo-com.svg";
import react from "public/svg/technologies/reactSvg.svg";
import redux from "public/svg/technologies/redux-fill-svgrepo-com.svg";
import vue from "public/svg/technologies/vue-dot-js.svg";
import Image from "next/image";

const technologies = [
  aws,
  css,
  docker,
  //   git,
  graph,
  html,
  js,
  kuber,
  node,
  react,
  //   redux,
  vue,
];

const Technologies = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isVisible = scrollTop > 0; // Adjust the value based on when you want the animation to trigger

      setIsVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Wrapper>
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <TopBlock>
          <MainText>Technologies</MainText>
          <PText>
            <strong>WE</strong> always try to implement the latest technologies
            in development
          </PText>
        </TopBlock>
        <List>
          {technologies.map((technology, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.5, delay: isVisible ? index * 0.4 : 0 }}
            >
              <BlockItem key={index}>
                <ItemSvg
                  src={technology}
                  alt="Technology"
                  width={50}
                  height={50}
                />
              </BlockItem>
            </motion.div>
          ))}
        </List>
      </Container>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  padding: 30px 0;
`;
const TopBlock = styled.div`
  display: flex;
  justify-content: space-between;
  ${theme.mqMax("md")} {
    flex-direction: column;
  }
`;
const Container = styled(motion.div)`
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: ${theme.containers.main};
  margin: 0 auto;
  width: 100%;
  ${theme.mqMax("xl")} {
    padding: 0 35px;
  }
  ${theme.mqMax("lg")} {
    padding: 0 25px;
  }
`;
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  row-gap: 20px;
`;
export const MainText = styled.h1`
  width: 50%;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 60px;
  ${theme.mqMax("xl")} {
    font-size: 50px;
    width: 80%;
  }
  ${theme.mqMax("md")} {
    font-size: 35px;
    width: 100%;
  }
`;

export const PText = styled.p`
  padding-top: 3%;
  width: 40%;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 20px;
  ${theme.mqMax("xl")} {
    font-size: 50px;
    width: 80%;
  }
  ${theme.mqMax("md")} {
    font-size: 20px;
    width: 100%;
  }
`;

const ItemSvg = styled(Image)`
  transition-duration: 0.3s;
`;
const BlockItem = styled.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  cursor: pointer;
  background: #f8f9fa;
  width: 200px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 20px rgba(43, 49, 52, 0.1);
  border-radius: 20px;
  transition-duration: 0.3s;
  font-weight: 800;
  &:hover {
    background: black;
    color: white;
    ${ItemSvg} {
      filter: brightness(0) invert(1);
    }
  }
  ${theme.mqMax('sm')}{
    width: 130px;
  height: 80px;
  }
`;

export default Technologies;
