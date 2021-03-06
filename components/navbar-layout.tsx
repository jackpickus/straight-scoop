import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export const siteTitle: string = "The Straight Scoop";

const NavLayout: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Straight Scoop</title>
        <meta
          name="description"
          content="A sports blog that gets right to the point"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div class="items-center justify-between flex bg-green-500 bg-opacity-90 px-12 py-4 my-4 mx-auto shadow-2x1 w-11/12">
        <div class="text-2x1 text-black font-semibold inline-flex items-center">
          {/* <img src="../../public/images/logo_3.jpg" class="w-16 mr-4"
                    alt="logo-img"></img> */}
          <Image
            priority
            src="/images/logo.jpg"
            height={80}
            width={80}
            alt={siteTitle}
          />
          <span class="text-2xl">
            <Link href="/">
              <a>The Straight Scoop</a>
            </Link>
          </span>
        </div>
        <div>
          <ul class="flex">
            <li class="ml-5 px-2 py-1 hover:underline hover:text-blue-900">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li class="ml-5 px-2 py-1 hover:underline hover:text-blue-900">
              <Link href="/sports">
                <a>Sports</a>
              </Link>
            </li>
            <li class="ml-5 px-2 py-1 hover:underline hover:text-blue-900">
              <Link href="/picks">
                <a>Picks</a>
              </Link>
            </li>
            <li class="ml-5 px-2 py-1 hover:underline hover:text-blue-900">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li class="ml-5 px-2 py-1 rounded font-semibold text-gray-800 bg-gray-100 hover:bg-blue-500">
              <Link href="/subscribe">
                <a>Subscribe</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavLayout;
