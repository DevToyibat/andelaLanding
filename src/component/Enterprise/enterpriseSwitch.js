import React from "react";
import styled from "styled-components";

const EnterpriseSwitch = () => {
  return (
    <Container>
      <Wrapper>
        <ContentHolder>
          <Content>
            <Title>EVENTS</Title>
            <SubTitle>Meet Andela at Money 20/20 on Oct 24-27</SubTitle>
          </Content>
          <ButtonHolder>
            <Button>Learn More</Button>
          </ButtonHolder>
        </ContentHolder>
      </Wrapper>
    </Container>
  );
};

export default EnterpriseSwitch;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 20vh;
  background: #ffaf38;
  margin-top: 1px;
`;

const Wrapper = styled.div``;

const ContentHolder = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 20vh;
`;

const Content = styled.div``;

const Title = styled.div`
  color: #1f2d46;
  font-size: 13px;
  font-weight: bold;
`;

const SubTitle = styled.div`
  color: whitesmoke;
  font-size: 20px;
  margin-top: 20px;
`;

const ButtonHolder = styled.div``;

const Button = styled.button`
  background: #1f2d46;
  width: 180px;
  height: 50px;
  color: whitesmoke;
  outline: none;
  border: none;
  font-size: 17px;
  font-weight: 550;
  margin-right: 25px;
  transition: all 350ms;

  :hover {
    background: #373a46;
    cursor: pointer;
  }
`;
