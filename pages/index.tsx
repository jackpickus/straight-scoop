import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>The Straight Scoop</title>
        <meta name="description" content="A sports blog that gets right to the point" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <div class="items-center justify-between flex bg-green-500 bg-opacity-90 px-12 py-4 my-4 mx-auto shadow-2x1 w-11/12">
          <div class="text-2x1 text-black font-semibold inline-flex items-center">
            <img src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png" class="w-16 mr-4"
            alt="logo-img"></img>
            <span>The Straight Scoop</span>
          </div>
          <div>
            <ul class="flex">
              <li class="ml-5 px-2 py-1 hover:underline hover:text-blue-900">Sports</li>
              <li class="ml-5 px-2 py-1 hover:underline hover:text-blue-900">Picks</li>
              <li class="ml-5 px-2 py-1 hover:underline hover:text-blue-900">
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li class="ml-5 px-2 py-1 rounded font-semibold text-gray-800 bg-gray-100 hover:bg-blue-500">Login/Sign Up</li>
            </ul>
          </div>
        </div>
        <div class="container mx-auto text-center">
          <p class="text-4xl underline font-semibold text-blue-500">Recent Scoops</p>
          <p>Place 5 most recent posts here</p>
          <p>Load more posts</p> {/*when clicked load 5 more posts */}
        </div>
      </main>
    </div>
  )
}

export default Home
