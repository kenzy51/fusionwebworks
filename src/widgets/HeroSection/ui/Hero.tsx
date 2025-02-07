import React from 'react';
import { styled } from 'styled-components';
import { theme } from '@/styles/theme';
import styles from './Home.module.css';
import { Blocks } from './Blocks';
import { Button } from '@/shared/components/Button';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

export const Hero = () => {
  return (
    <main className={`${styles.main}`}>
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <MainText>
            We enable you to discover the world with our approach
          </MainText>
        </motion.div>
        <ScrollLink to="aboutUs" smooth={true} offset={-100}>
          <Button>Get Started</Button>
        </ScrollLink>
      </Container>
      <Blocks />
    </main>
  );
};

const Container = styled.div`
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: ${theme.containers.main};
  margin: 0 auto;
  width: 100%;
  ${theme.mqMax('xl')} {
    padding: 0 35px;
  }
  ${theme.mqMax('lg')} {
    padding: 0 25px;
  }
`;

export const MainText = styled.h1`
  width: 60%;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 60px;
  ${theme.mqMax('xl')} {
    font-size: 50px;
    width: 80%;
  }
`;