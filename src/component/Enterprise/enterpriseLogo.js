import React from "react";
import styled from "styled-components";
// import Log from "../../assets/assethome/logo-casper-1-white.png";
import { data } from "./enterpriseData";

const EnterpriseLogo = () => {
  return (
    <Container>
      <Wrapper>
        <Trusted>TRUSTED BY</Trusted>
        <ContentHolder>
          {data?.map((props) => {
            const { id, icon } = props;

            return (
              <LogoHolder key={id}>
                <Logo src={icon} />
              </LogoHolder>
            );
          })}
        </ContentHolder>
      </Wrapper>
    </Container>
  );
};

export default EnterpriseLogo;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 15vh;
  background: #1f2d46;
`;

const Wrapper = styled.div``;

const ContentHolder = styled.div`
  display: flex;
`;

const LogoHolder = styled.div``;

const Trusted = styled.div`
  color: #e9a135;
  font-size: 14px;
  padding-left: 20px;
  font-weight: 600;
`;

const Logo = styled.img`
  width: 145px;
  margin-top: 10px;
`;
