import type { NextPage } from 'next'
import Head from 'next/head'

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
            <ul class="flex text-black">
              <li class="ml-5 px-2 py-1">Sports</li>
              <li class="ml-5 px-2 py-1">Picks</li>
              <li class="ml-5 px-2 py-1">About</li>
              <li class="ml-5 px-2 py-1 rounded font-semibold text-gray-800 bg-gray-100">Login/Sign Up</li>
            </ul>
          </div>
        </div>
        <div class="container mx-auto text-center">
          <h1 class="text-black-600 font-semibold">Recent Scoops</h1>
          <p class="text-green-800">We like sports and we don't care who knows</p>
          <p>Load more posts</p>
        </div>
      </main>
    </div>
  )
}

export default Home
