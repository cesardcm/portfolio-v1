import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>

      <header className="font-medium" >
        <nav className="container flex flex-row items-center justify-between max-w-6xl px-40 mx-auto mt-2 mb-2 ">
          <div>
            <svg className="w-14 h-15" viewBox="0 0 1155 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M577.344 0L1154.69 1000H0L577.344 0Z" fill="black" />
              <path d="M561.767 612.934C554.784 554.984 510.923 521.661 452.852 521.661C386.572 521.661 335.973 568.461 335.973 650.545C335.973 732.385 385.714 779.43 452.852 779.43C517.172 779.43 556.009 736.673 561.767 690.485L508.106 690.24C503.083 717.071 482.01 732.507 453.709 732.507C415.607 732.507 389.757 704.207 389.757 650.545C389.757 598.354 415.24 568.583 454.077 568.583C483.113 568.583 504.063 585.368 508.106 612.934H561.767ZM821.191 612.934C814.207 554.984 770.347 521.661 712.276 521.661C645.995 521.661 595.397 568.461 595.397 650.545C595.397 732.385 645.138 779.43 712.276 779.43C776.596 779.43 815.433 736.673 821.191 690.485L767.529 690.24C762.506 717.071 741.434 732.507 713.133 732.507C675.031 732.507 649.181 704.207 649.181 650.545C649.181 598.354 674.664 568.583 713.501 568.583C742.537 568.583 763.487 585.368 767.529 612.934H821.191Z" fill="white" />
            </svg>
          </div>
          <div className="text-xl">
            <a className="ml-8 hover:underline" href="">About</a>
            <a className="ml-8 hover:underline" href="">Blog</a>
            <a className="ml-8 hover:underline" href="">Contact</a>
          </div>
        </nav>
      </header>
      <main>
        {/*  ---------------------------------- Hero ----------------------------------  */}

        <div className="container mx-auto">
          <div id="Hero Section" className="container flex items-center justify-between flex-shrink-0 max-w-4xl mx-auto mt-9">
            <div className="" id="Hero Content">
              <h1 className="font-medium leading-snug"> Hello, I’m Cesar! <br /> Front End Developer <br /> Focused on React and Next JS.  </h1>
            </div>
            <div id="Hero Image" className="max-w-md" >
              <img className="transform rounded-full scale-35" src="images/profile.jpg" />
            </div>
          </div>
        </div>

        {/*  ---------------------------------- Skils ----------------------------------  */}

      </main>

      {/*  --------------------------------- Footer --------------------------------- */}
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </>
  )
}

{/* <div >
  <img className="rounded-full" src="images/profile.jpg" ></img>
</div> */}