import React from "react";
import styled from "styled-components";
// import { GiMedal } from "react-icons/gi";
import { data } from "./fifthCompData";

const FifthComp = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          {data?.map((props) => {
            const { id, iconss, tit, sub } = props;

            return (
              <ContentHolder key={id}>
                <Icon>{iconss}</Icon>
                <Title>{tit}</Title>
                <SubTitle>{sub}</SubTitle>
              </ContentHolder>
            );
          })}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default FifthComp;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  // min-height: 100vh;
  background: #ffffff;
`;

const Content = styled.div`
  line-height: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const ContentHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin: 50px 20px 40px 20px;
  padding: 10px;
`;

const Title = styled.div`
  color: #49aaaf;
  font-size: 24px;
  font-weight: 450;
`;

const SubTitle = styled.div`
  color: #565b73;
  width: 360px;
  font-size: 17.5px;
  font-weight: 300;
  text-align: center;
`;

const Icon = styled.div`
  width: 70px;
  height: 70px;
  background: red;
  border-radius: 50%;
  background: #edf7f7;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
