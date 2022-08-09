import React from "react";
import styled from "styled-components";
import { IoMdPerson } from "react-icons/io";
import { MdPeople } from "react-icons/md";
import GlobeImg from "../../../assets/assetEnterprise/globeImg.svg";

const SecComp = () => {
  return (
    <Container>
      <Wrapper>
        <CardHolder>
          <CardOne>
            <Icon>
              <IoMdPerson />
            </Icon>
            <Title>Vetted Individuals</Title>
            <SubTitle>
              Save hours in overhead. Every individual in our network is vetted
              against proprietary, role-specific assessments.
            </SubTitle>
          </CardOne>
          <CardTwo>
            <Icon>
              <MdPeople />
            </Icon>
            <Title>Full Teams</Title>
            <SubTitle>
              Need full teams to accelerate your development efforts? Not a
              problem. We will assemble the team, facilitate their onboarding,
              and ensure everyone is off to a great start
            </SubTitle>
          </CardTwo>
        </CardHolder>
        <GlobeHolder>
          <GlobeImage src={GlobeImg} />
          <GlobeTitle>Be Everywhere, All At Once</GlobeTitle>
          <GlobeSubTitle>
            Quickly scale with high-performing talent from six continents. Tell
            us your needs, budget, skill requirements, and we’ll take care of
            the rest.
          </GlobeSubTitle>
        </GlobeHolder>
      </Wrapper>
    </Container>
  );
};

export default SecComp;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #f4f6fb;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
`;

const CardHolder = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: -100px;
`;

const CardOne = styled.div`
  width: 550px;
  height: 400px;
  background: #ffffff;
  box-shadow: 2px 2px 5px #dddddd;
  border-radius: 10px;
  transition: all 350ms;
  transform: scale(1);
  margin-left: 140px;
  position: absolute;
  left: 25px;

  :hover {
    box-shadow: 1px 1px 10px #dddddd;
    transform: scale(1.001);
  }
`;

const CardTwo = styled.div`
  width: 550px;
  height: 400px;
  background: #ffffff;
  box-shadow: 2px 2px 5px #dddddd;
  border-radius: 10px;
  transition: all 350ms;
  transform: scale(1);
  margin-right: 140px;
  position: absolute;
  left: 745px;

  :hover {
    box-shadow: 1px 1px 10px #dddddd;
    transform: scale(1.001);
  }
`;

const Icon = styled.div`
  font-size: 35px;
  width: 100px;
  height: 100px;
  background: #182039;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0 50px 30px;
`;

const Title = styled.div`
  font-size: 32px;
  margin-left: 30px;
  color: #1f2d46;
  font-weight: 450;
  margin-bottom: 20px;
`;

const SubTitle = styled.div`
  font-size: 17px;
  color: #707387;
  font-weight: 300;
  width: 460px;
  line-height: 2;
  margin-left: 30px;
`;

const GlobeHolder = styled.div`
  position: absolute;
  bottom: 50px;
  text-align: center;
  left: 330px;
`;

const GlobeImage = styled.img`
  width: 100px;
  height: 100px;
  background-color: #3359df;
  border-radius: 50%;
  object-fit: cover;
`;

const GlobeTitle = styled.div`
  font-size: 42px;
  margin: 10px 0;
  color: #1f2d46;
  font-weight: 450;
`;

const GlobeSubTitle = styled.div`
  font-size: 17px;
  color: #707387;
  font-weight: 300;
  width: 700px;
  line-height: 2;
  padding-left: 100px;
`;
