import { theme } from "@/styles/theme";
import React from "react";
import QRCode from "react-qr-code";
import { styled } from "styled-components";

const QR = () => {
  return (
    <Wrapper>
      <Container>
        <ContactInfo>
          <h1>Fusion Works LLC</h1>
          <a href="tel:+16186666119">+1(929)-769-6545</a>
          <a href="mailto:fusionworksweb@gmail.com">Email: fusionworksweb@gmail.com</a>
          <address>Address: 2355 E 12th St #5J, Brooklyn, NY 11229</address>
        </ContactInfo>
      </Container>
    </Wrapper>
  );
};

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const Wrapper = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  background: #212b33;
  padding: 100px 0;
  height: auto;
  font-family: "Plus Jakarta Sans", sans-serif;
  ${theme.mqMax("lg")} {
    height: auto;
    padding-bottom: 30px;
  }
`;
const Container = styled.div`
  display: flex;
  gap: 3rem;
  max-width: ${theme.containers.main};
  margin: 0 auto;
  width: 100%;
  ${theme.mqMax("lg")} {
    padding-left: 35px;
    padding-right: 35px;
    flex-direction: column-reverse;
  }
`;

export default QR;
