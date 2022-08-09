import React from "react";
import styled from "styled-components";
import { IoIosPeople } from "react-icons/io";

const FstComp = () => {
  return (
    <Container>
      <Wrapper>
        <ContentHolder>
          <Line>
            <LineOne></LineOne>
            <LineTwo></LineTwo>
            <Lane>
              <LineThree></LineThree>
              <LineFour></LineFour>
            </Lane>
          </Line>
          <Content>
            <Icon>
              <IoIosPeople />
            </Icon>
            <Title>The team you need to build your team</Title>
            <SubTitle>
              Leverage our network of vetted talent to assemble the teams you
              need when you need them.
            </SubTitle>
            <Button>Learn How</Button>
          </Content>
          <LineBottom>
            <LineOne></LineOne>
            <LineTwo></LineTwo>
            <Lane>
              <LineThree></LineThree>
              <LineFour></LineFour>
            </Lane>
          </LineBottom>
        </ContentHolder>
      </Wrapper>
    </Container>
  );
};

export default FstComp;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
`;

const Wrapper = styled.div`
  min-height: 80vh;
`;

const ContentHolder = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Line = styled.div``;

const LineOne = styled.div`
  width: 100px;
  height: 4px;
  border-radius: 5px;
  background: #ffdfac;
  margin: 100px 0 10px 200px;
`;

const LineTwo = styled.div`
  width: 100px;
  height: 4px;
  border-radius: 5px;
  background: #ffdfac;
  margin: 10px 0 20px 150px;
`;

const Lane = styled.div`
  display: flex;
`;

const LineThree = styled.div`
  width: 100px;
  height: 4px;
  border-radius: 5px;
  background: #ffdfac;
  margin: 10px 0 10px 50px;
`;

const LineFour = styled.div`
  width: 30px;
  height: 4px;
  border-radius: 5px;
  background: #ffdfac;
  margin: 10px 0 10px 30px;
`;

const LineBottom = styled.div`
  padding-top: 300px;
`;

const Content = styled.div`
  text-align: center;
`;

const Icon = styled.div`
  background: #ffaf2f;
  font-size: 50px;
  color: #ffffff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  margin-left: 300px;
  margin-bottom: 40px;
`;

const Title = styled.div`
  font-size: 42px;
  margin: 10px 0;
  color: #1f2d46;
  font-weight: 450;
`;

const SubTitle = styled.div`
  font-size: 17px;
  color: #707387;
  font-weight: 300;
  width: 480px;
  line-height: 2;
  padding-left: 100px;
`;

const Button = styled.button`
  background: #3359df;
  width: 180px;
  height: 50px;
  color: whitesmoke;
  outline: none;
  border: none;
  font-size: 17px;
  font-weight: 550;
  margin-top: 20px;
  transition: all 350ms;

  :hover {
    background: #496ae2;
    cursor: pointer;
  }
`;
