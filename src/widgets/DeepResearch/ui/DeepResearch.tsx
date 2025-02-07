import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { theme } from '@/styles/theme';
import { motion } from 'framer-motion';
import useMediaQuery from '@/shared/hooks/useMediaQuery';
import { Wrapper } from '@/widgets/Technologies/ui/Technologies';

const DeepResearch = () => {
  const array = [
    { item: 'Application development' },
    { item: 'Web development' },
    { item: 'CRM development' },
    // { item: 'Blockchain development' },
    // { item: 'Education development' },
    { item: 'Sales & Marketing' },
  ];
  const isMedium = useMediaQuery('md')
  const isMobile = useMediaQuery('sm')
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
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        <PText>
         Our expertise in each field is powered by constant development of our developers
        </PText>
        <MainText>We have deep research skills in such fields</MainText>
      </Container>
      <BlockList>
        {array.map((item, index) => (
          <motion.div
            key={item.item}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.5, delay: isVisible ? index * 0.5 : 0 }}
          >
            <BlockItem>
              {
                !isMobile ?
              <h3>{item.item}</h3>
                  : 
                  <h4>{item?.item}</h4>
              }
            </BlockItem>
          </motion.div>
        ))}
      </BlockList>
    </Wrapper>
  );
};

export default DeepResearch;

const Container = styled(motion.div)`
  padding-top: 5%;
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  max-width: ${theme.containers.main};
  margin: 0 auto;
  width: 100%;
  ${theme.mqMax('xl')} {
    padding: 0 35px;
  }
  ${theme.mqMax('lg')} {
    padding: 0 25px;
  } ${theme.mqMax('md')} {
    flex-direction:column-reverse;
  }
  
`;

export const MainText = styled.h1`
  width: 50%;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 60px;
  ${theme.mqMax('xl')} {
    font-size: 50px;
    width: 80%;
  } ${theme.mqMax('md')} {
    font-size: 35px;
    width:100%;
  }
`;

export const PText = styled.p`
  padding-top: 3%;
  width: 40%;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 20px;
  ${theme.mqMax('xl')} {
    font-size: 50px;
    width: 80%;
  }
  ${theme.mqMax('md')} {
    font-size: 20px;
    width: 100%;
  }
`;

const BlockItem = styled.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  cursor: pointer;
  background: #f8f9fa;
  width: 230px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 20px rgba(43, 49, 52, 0.1);
  border-radius: 20px;
  transition-duration: 0.3s;
  font-weight: 800;
  &:hover {
    background: black;
    color: white;
  }
  ${theme.mqMax('sm')}{
    width:170px;
    height: 100px;
  }
`;

const BlockList = styled.div`
  margin: 0 auto;
  gap: 2rem;
  margin-top: 40px;
  max-width: ${theme.containers.main};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  ${theme.mqMax('md')}{
    justify-content:center;
  }
`;
