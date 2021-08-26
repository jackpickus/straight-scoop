import type { NextPage } from "next";
import Link from "next/link";
import NavLayout from "../components/navbar-layout";

const sports: string[] = ["football", "basketball"];

const Sports: NextPage = () => {
  return (
    <>
      <NavLayout />
      <main>
        <div class="container mx-auto text-center">
          <p class="text-4xl pb-2 underline font-semibold text-blue-500">
            Sports
          </p>
          <ul>
            {sports.map((value: string, index: number) => {
              return (
                <li key={index} class="py-2">
                  {/* <Link href={"/" + value}>
                    <a class="hover:underline hover:text-blue-900">{value}</a>
                  </Link> */}
                  {value}
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Sports;
