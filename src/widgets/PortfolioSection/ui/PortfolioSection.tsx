import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { theme } from "@/styles/theme";
import { motion } from "framer-motion";
import useMediaQuery from "@/shared/hooks/useMediaQuery";
import { Wrapper } from "@/widgets/Technologies/ui/Technologies";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Jal Group Asia",
      description: "Modern company which owns Barca Experience",
      link: "https://jalgroupasia.kg/",
    },
    {
      title: "Barca Experience",
      description: "Barca Experience In Kyrgyzstan",
      link: "https://experience.barcelona.kg",
    },
  ];

  const isMedium = useMediaQuery("md");
  const isMobile = useMediaQuery("sm");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      <Container
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        <MainText>Portfolio</MainText>
        <BlockList>
          {projects.map((project, index) => (
            <a href={project.link} target="_blank">
              <ProjectBlock
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectBlock>
            </a>
          ))}
        </BlockList>
      </Container>
    </Wrapper>
  );
};

export default PortfolioSection;

const Container = styled(motion.div)`
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const MainText = styled.h1`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 60px;
  ${theme.mqMax("xl")} {
    font-size: 50px;
  }
  ${theme.mqMax("md")} {
    font-size: 35px;
  }
`;

const BlockList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: ${theme.containers.main};
  margin: 20px auto;
`;

const ProjectBlock = styled(motion.div)`
  background: #f8f9fa;
  box-shadow: 0 4px 20px rgba(43, 49, 52, 0.1);
  border-radius: 20px;
  padding: 20px;
  width: 250px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: background 0.3s;
  cursor: pointer;

  &:hover {
    background: black;
    color: white;
  }

  ${theme.mqMax("sm")} {
    width: 200px;
    height: 150px;
  }
`;

const ProjectTitle = styled.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 16px;
  color: #6c757d;
`;
