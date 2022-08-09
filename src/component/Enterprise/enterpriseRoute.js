import React from "react";
import EnterpriseHero from "./enterpriseHero";
import FstComp from "./FstComponent/fstComp";
import SecComp from "./SecComponent/SecComp";
// import ThrdComp from "./ThrdComponent/thrdComp";
import FourthComp from "./FourthComponent/fourthComp";
import FifthComp from "./FifthComponent/fifthComp";

const EnterpriseRoute = () => {
  return (
    <div>
      <EnterpriseHero />
      <FstComp />
      <SecComp />
      <FourthComp />
      <FifthComp />
      {/* <ThrdComp /> */}
    </div>
  );
};

export default EnterpriseRoute;
