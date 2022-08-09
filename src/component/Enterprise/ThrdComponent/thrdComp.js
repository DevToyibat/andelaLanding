import React from "react";
import styled from "styled-components";
import WorldMap from "../../../assets/assetEnterprise/worldMap.png";
import John from "../../../assets/assetEnterprise/johnImg.png";

const ThrdComp = () => {
  return (
    <Container>
      <Wrapper>
        {/* <Map src={WorldMap} /> */}
        <Image src={John} />
        <Content>
          <Title>John</Title>
          <SubTitle>Engineer</SubTitle>
          <SubTitle>Kenya</SubTitle>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default ThrdComp;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: green;
`;

const Wrapper = styled.div`
  height: 100%;
  min-height: 50vh;
  // position: relative;
  width: 100%;
  background: blue;
`;

const WrapperHolder = styled.div``;

const Map = styled.img`
  width: 1100px;
  height: 600px;
  display: none;
  // position: relative;
  // left: 170px;
  // top: 50px;
`;

const Image = styled.img`
  width: 270px;
  height: 400px;
  position: relative;
  right: 880px;
  top: 190px;
`;

const Content = styled.div`
  color: #4aaaaf;
  font-size: 12px;
  line-height: 1.5;
  position: relative;
  left: 520px;
  top: 100px;
`;

const Title = styled.div`
  font-weight: bold;
`;

const SubTitle = styled.div`
  font-weight: 500;
`;
