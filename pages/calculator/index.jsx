import CalculatorHeader from "@comp/Calculator/component/CalculatorHeader";
import CompetitionSlider from "@comp/Calculator/component/CompetitionSlider";
import Reserve from "@comp/Calculator/component/Reserve";
import Layout from "layout/Layout";
import React from "react";

const Calculator = () => {
  return (
    <div>
      <CalculatorHeader />
      {/* <Reserve /> */}
      <CompetitionSlider />
    </div>
  );
};

Calculator.PageLayout = Layout;
export default Calculator;
