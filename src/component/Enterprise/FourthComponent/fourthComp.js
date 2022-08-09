import React from "react";
import styled from "styled-components";
import { IoMdTrophy } from "react-icons/io";

const FourthComp = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Icon>
            <IoMdTrophy />
          </Icon>
          <Title>The skills and seniority you need</Title>
          <SubTitle>
            Our network covers a wide range of languages, frameworks, datastores
            and DevOps tools.
          </SubTitle>
        </Content>
        <ButtonHolder>
          <Button>Languages</Button>
          <Button>Frameworks</Button>
          <Button>Datastores</Button>
          <Button>DevOps Tooling</Button>
          <Button>Analytics</Button>
          <Button>Salesforce</Button>
        </ButtonHolder>
      </Wrapper>
    </Container>
  );
};

export default FourthComp;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #182039;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  // height: 100%;
  text-align: center;
  padding-top: 100px;
`;

const Content = styled.div`
  color: white;
  line-height: 2;
`;

const Icon = styled.div`
width: 100px;
height: 100px;
font-size 40px;
background: #FFAF2F;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
margin-left: 650px;

`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 450;
`;

const SubTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
`;

const ButtonHolder = styled.div``;

const Button = styled.button`
  background: #233575;
  width: 180px;
  height: 80px;
  color: #e8e8eb;
  outline: none;
  border: none;
  font-size: 18px;
  font-weight: 550;
  margin: 70px 5px 0 0;
  transition: all 350ms;

  :hover {
    background: #2a3f92;
    cursor: pointer;
  }
`;
