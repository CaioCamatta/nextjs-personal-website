import Head from "next/head";
import Layout, { siteTitle, name } from "../components/layout";
import Link from "next/link";

const description =
  "Caio Camatta Coelho's personal website, portfolio, and resume.";
const titleSuffix = "About";

export default function Home() {
  return (
    <Layout description={description} titleSuffix={titleSuffix}>
      <h2 className="text-4xl font-bold mb-3">About Me</h2>
      <h3 className="text-xl text-gray-700 font-medium mt-3 mb-1 pt-1">
        Projects
      </h3>
      <ul className="list-disc list-inside ml-3 mt-2 text-black-900">
        <li className="mt-2">
          <a
            href="http://ec2-3-144-157-84.us-east-2.compute.amazonaws.com:8080/"
            className="text-blue-600"
          >
            Service-Oriented Stocks App
          </a>{" "}
          (2021): A stock market app with multiple services (e.g., graphs,
          news). The app uses a service-oriented architecture that allows
          services to be added or removed at runtime. Created in a group of 5
          and deployed on AWS EC2 using Docker.{" "}
          <a
            href="https://github.com/CaioCamatta/StockTracker"
            className="text-blue-600"
          >
            GitHub Repo
          </a>
          .
        </li>
        <li className="mt-2">
          <a
            href="https://www.figma.com/proto/D95fVAZ5g3JIKEOemr9FAt/Asset-Management-System-Mockup-Generic?node-id=1%3A2&scaling=contain&page-id=0%3A1"
            className="text-blue-600"
          >
            Inventory Management System
          </a>{" "}
          (2021): a dashboard to manage physical assets in a lab, track state of
          items via integrations with other services, and assign ownership.
        </li>
        <li className="mt-2">
          <a href="https://litepm.com/" className="text-blue-600">
            LitePM
          </a>{" "}
          (2021): an easy-to-use Project Management app to manage small group
          projects (2-8 people). Created in Next.js / React, Node.js and hosted
          on AWS EC2. I organized this sprint in a 7-day hackathon-like format
          with three other developers.
        </li>
        <li className="mt-2">
          <a href="https://liferpg.tech/" className="text-blue-600">
            LifeRPG
          </a>{" "}
          (2021): another one-week sprint to create an RPG app where you
          progress your character by completing real-life tasks. Personal
          initiative - executed in a team of four using Next.js, React, Flask
          and Firebase.
        </li>
        <li className="mt-2">
          <a
            href="https://github.com/CaioCamatta/ModuLounge"
            className="text-blue-600"
          >
            ModuLounge
          </a>{" "}
          (2020): a C++ app to turn any screen into a smart-ish TV. We used JIRA
          to manage this Agile group project.
        </li>
        <li className="mt-2">
          <a
            href="https://wai-music-genre-classification.herokuapp.com/"
            className="text-blue-600"
          >
            WesternAI Project
          </a>{" "}
          (2020): a music genre classification model. As Project Manager, I led
          four developers to create the Keras model and publish the Flask
          website.
        </li>
        <li className="mt-2">
          <a href="https://jcconstrutora.com.br/" className="text-blue-600">
            JCC Construction
          </a>{" "}
          (2018-2020): website for a real estate development company.
          Server-less implementation using AWS, Python/Flask and HTML/CSS/Js. I
          also dedicated considerable time to SEO and tracking. This website was
          originally in Django.
        </li>
        <li className="mt-2">
          <a
            href="https://caio-website-prod.herokuapp.com/"
            className="text-blue-600"
          >
            My Former Personal Website
          </a>{" "}
          (2020): in Gatsby.js, React.js, GraphQL. Hosted on Heroku.
        </li>
        <li className="mt-2">
          <a
            href="https://www.centraltruckandtire.com/"
            className="text-blue-600"
          >
            Central Truck and Tire Shop
          </a>{" "}
          (2020): Website Design on Squarespace.
        </li>
        <li className="mt-2">
          <a
            href="http://cs3319.gaul.csd.uwo.ca/vm044/a3camatta/"
            className="text-blue-600"
          >
            University Course Database
          </a>{" "}
          (2020): a PHP & SQL school assignment. I am currently moving this
          project away from the school's server and into its own.
        </li>
        <li className="mt-2">
          <a
            href="https://github.com/CaioCamatta/CarRacing-PolicyGradient"
            className="text-blue-600"
          >
            Self-learning Race Car
          </a>{" "}
          (2018): an application of the REINFORCE Monte Carlo Policy Gradient on
          the OpenAI Gym CarRacing-v0 environment. Uses Python, Tensorflow,
          NumPy, SciPy.
        </li>
      </ul>

      <h3 className="text-xl text-gray-700 font-medium mt-5 mb-1 pt-2">
        Mobile Apps
      </h3>
      <ul className="list-disc list-inside ml-3 mt-2">
        <li className="mt-2">
          <a
            href="https://play.google.com/store/apps/details?id=com.CaioCoelho.moodJournal"
            className="text-blue-600"
          >
            Daily Mood Tracker
          </a>{" "}
          (2020): a React Native app to help track your mood and view
          statistics. Uses Redux. Published to Google Play.
        </li>
        <li className="mt-2">
          <a href="https://expo.io/@caiocamatta" className="text-blue-600">
            Expo Apps
          </a>{" "}
          (2020): React Native apps I as part of Harvard's CS50 Mobile
          Development course. Includes a{" "}
          <a
            href="https://expo.io/@caiocamatta/Movie-Finder"
            className="text-blue-600"
          >
            Movie Finder
          </a>{" "}
          app and{" "}
          <a
            href="https://expo.io/@caiocamatta/study-timer"
            className="text-blue-600"
          >
            Pomodoro Timer
          </a>
          .
        </li>
        <li className="mt-2">
          <a
            href="https://play.google.com/store/apps/details?id=com.CaioCoelho.Tilefall"
            className="text-blue-600"
          >
            Tilefall
          </a>{" "}
          (2016): a C# Unity app published on Google Play.
        </li>
      </ul>

      <h3 className="text-xl text-gray-700 font-medium mt-5 mb-1 pt-2">
        Hackathons
      </h3>
      <ul className="list-disc list-inside ml-3 mt-2">
        <li className="mt-2">
          <a
            href="https://devpost.com/software/smartcommute"
            className="text-blue-600"
          >
            Hack Western 2019
          </a>
          : C++, Docker, JavaScript, Machine Learning, Python, scikit-learn.
        </li>
        <li className="mt-2">
          <a
            href="https://devpost.com/software/conscious-crowd"
            className="text-blue-600"
          >
            Hack The North 2019
          </a>
          : Azure, Firebase, JavaScript, Python.
        </li>
        <li className="mt-2">
          <a
            href="https://devpost.com/software/align-dui5lc"
            className="text-blue-600"
          >
            Hack Western 2018 (Winner!)
          </a>{" "}
          : a desktop app to track your posture and help you improved it. After
          our prize in the hackathon, we turned this hack into a startup. We
          used Electron, Google Cloud Vision, JavaScript, Python, Flask REST
          API.
        </li>
        <li className="mt-2">
          <a
            href="https://devpost.com/software/moodmatch"
            className="text-blue-600"
          >
            Hack The North 2018
          </a>
          : Azure, HTML, CSS, Python, Reddit API.
        </li>
      </ul>
    </Layout>
  );
}
