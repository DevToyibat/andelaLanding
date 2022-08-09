import React from "react";
import styled from "styled-components";
import HeroImg from "../../assets/assetEnterprise/heroImg.webp";
import { FaPlayCircle } from "react-icons/fa";
import EnterpriseLogo from "./enterpriseLogo";
import EnterpriseSwitch from "./enterpriseSwitch";

const EnterpriseHero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <ContentHolder>
            <Content>
              <Title>
                The simplest, fastest way to build teams with global talent
              </Title>

              <Button>
                <Button1>Schedule a Call</Button1>

                <Button2>
                  <Icon>
                    <FaPlayCircle />
                  </Icon>
                  Watch an Overview
                </Button2>
              </Button>
            </Content>
            <Image src={HeroImg} />
          </ContentHolder>
          {/* <Trusted>TRUSTED BY</Trusted>
          <Logo></Logo> */}
          <EnterpriseLogo />
          <EnterpriseSwitch />
        </Wrapper>
      </Container>
    </div>
  );
};

export default EnterpriseHero;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div``;

const ContentHolder = styled.div`
  background: #1f2d46;
  width: 100%;
  height: 100%;
  min-height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Content = styled.div``;

const Title = styled.div`
  color: whitesmoke;
  font-size: 45px;
  font-weight: 550;
  line-height: 1.2;
  width: 600px;
`;

const Button = styled.div`
  display: flex;
  margin-top: 45px;
`;

const Button1 = styled.button`
  background: #3359df;
  width: 180px;
  height: 50px;
  color: white;
  outline: none;
  border: none;
  font-size: 17px;
  font-weight: 550;
  margin-right: 25px;
  transition: all 350ms;

  :hover {
    background: #3154cf;
    cursor: pointer;
  }
`;

const Icon = styled.div`
  font-size: 15px;
  margin-right: 10px;
`;

const Button2 = styled.button`
  border: solid 1px #e9a135;
  background: transparent;
  width: 250px;
  height: 50px;
  color: #e9a135;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-weight: 550;
  transition: all 350ms;

  :hover {
    background: #e9a135;
    cursor: pointer;
    color: white;
  }
`;

const Image = styled.img`
  width: 540px;
  height: 470px;
  object-fit: cover;
`;

// const Trusted = styled.div``;

// const Logo = styled.img``;
