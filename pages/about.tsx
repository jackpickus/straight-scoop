import type { NextPage } from "next";
import NavLayout from "../components/navbar-layout";

const About: NextPage = () => {
  return (
    <div>
      <NavLayout />
      <main>
        <div>
          <p>
            Straight scoop is a sports/media site delivering key insights and
            knowledge to sports fans around the country
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
