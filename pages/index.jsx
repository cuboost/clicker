import { Open_Sans } from 'next/font/google';
import Image from 'next/image';
import { useState } from 'react';
import clickerImage from "../public/images/clicker.png";
import Head from 'next/head';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ["400", "500"]
});

export default function Home() {

  var [score, setScore] = useState(0);

  return (
    <>
      <Head>
        {/* Title */}
        <title>Clicker</title>
        {/* Description */}
        <meta name="description" content="A simple clicker..." key="desc" />
        {/* Meta Title */}
        <meta property="og:title" content="Clicker" />
        {/* Meta Description */}
        <meta
          property="og:description" content="A simple addictive clicker..."
        />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${openSans.className}`}
      >
        <div className='select-none'>
          <Image src={clickerImage} priority draggable="false" className=' w-48 h-48' />
          <h1 className=' text-6xl mt-4'>Clicker</h1>
        </div>
        <div className=' text-center border-2 border-white w-8/12 p-5 rounded-3xl backdrop-blur-xl bg-white/10' onClick={() => setScore(score + 1)}>
          <h1 className=' mb-10 text-7xl select-none'>{score}</h1>
          <button className=' m-4 text-lg border-2 border-white rounded-xl px-4 py-2 select-none hover:bg-white hover:text-black transition duration-500' onClick={() => setScore(score + 1)}>Click</button>
        </div>
      </main>
    </>
  );
}
