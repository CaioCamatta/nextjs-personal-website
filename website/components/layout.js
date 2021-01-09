import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import styles from "./layout.module.css";

export const name = "Caio Camatta Coelho";
export const siteTitle = "Caio's Personal Website";

export default function Layout({ children, description, titleSuffix }) {
  return (
    <div className="h-screen flex flex-col ">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta
          name="og:title"
          content={titleSuffix ? siteTitle + ` | ${titleSuffix}` : siteTitle}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
        <title>
          {siteTitle}
          {titleSuffix && ` | ${titleSuffix}`}
        </title>
      </Head>
      <main className="mb-auto">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 mt-36 gap-x-10">
          <div className="side-panel text-right">
            <Image
              src="/profile600.png"
              alt={name}
              width="100"
              height="100"
              className="rounded-full ml-auto"
            />
            <h1 className="text-3xl pt-3 font-extrabold">
              <Link href="/">
                <a>Caio Camatta</a>
              </Link>
            </h1>
            <p className="text-gray-600 pt-3">Software Engineer</p>
            <p className="text-gray-600">Student at Western University</p>
            <p className="text-gray-600">London, ON - Canada</p>
            <p className="mt-5 hover:underline text-xl">
              <Link href="/">
                <a>About</a>
              </Link>
            </p>
            <p className="mt-3 hover:underline text-xl">
              <Link href="/resume">
                <a>Resume</a>
              </Link>
            </p>
            <p className="mt-3 hover:underline text-xl">
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </p>
            <div className="flex flex-row-reverse mt-5">
              <a href="https://github.com/CaioCamatta">
                <FontAwesomeIcon icon={faGithub} className="w-6" />
              </a>
              <a href="https://www.linkedin.com/in/caio-coelho/">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="w-6 mr-3 text-blue-600"
                />
              </a>
            </div>
          </div>
          <div className="content-panel col-span-3 mx-2 md:ml-4">
            {children}
          </div>
        </div>
      </main>

      <footer className="text-center pb-3">
        <p className="text-sm text-gray-400">© 2021 Caio C. Coelho.</p>
      </footer>
    </div>
  );
}
