import Head from "next/head";
import { Inter } from "next/font/google";

import TeamSlider from "@comp/Landing/TeamSlider";
import Header from "@comp/Landing/Header";
import Section1 from "@comp/Landing/Section1";
import StepSection from "@comp/Landing/StepSection";
import Main from "@comp/Landing/Main";
import Property from "@comp/Landing/Property";
import Layout from "layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Section1 />
      <StepSection />
      <Main />
      <Property />
      <TeamSlider />
    </>
  );
}
Home.PageLayout = Layout;

