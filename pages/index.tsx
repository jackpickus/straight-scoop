import type { NextPage } from "next";
import NavLayout from "../components/navbar-layout";

export const siteTitle: string = "The Straight Scoop";

const Home: NextPage = () => {
  return (
    <div>
      <NavLayout />
      <main>
        <div class="container mx-auto text-center">
          <p class="text-4xl underline pb-2 font-semibold text-blue-500">
            Recent Scoops
          </p>
          <p>Place 5 most recent posts here</p>
          <p>Load more posts</p> {/*when clicked load 5 more posts */}
        </div>
      </main>
    </div>
  );
};

export default Home;
