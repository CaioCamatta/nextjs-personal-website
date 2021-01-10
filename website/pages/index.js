import Head from "next/head";
import Layout, { siteTitle, name } from "../components/layout";
import Link from "next/link";

const description =
  "Caio Camatta Coelho's personal website, portfolio, and resume.";

export default function Home() {
  return (
    <Layout description={description}>
      <h2 className="text-4xl font-bold mb-3">About</h2>
      <h3 className="text-xl text-gray-700 font-medium mt-4 mb-1">Projects</h3>
      <ul className="list-disc list-inside">
        <li>
          <a
            href="https://github.com/CaioCamatta/ModuLounge"
            className="text-blue-600"
          >
            ModuLounge
          </a>{" "}
          (2020) A group project in C++, Agile, JIRA.
        </li>
        <li>
          <a
            href="https://wai-music-genre-classification.herokuapp.com/"
            className="text-blue-600"
          >
            WesternAI Project
          </a>{" "}
          (2020) A music classification model. Project Management, Python, AI,
          Machine Learning.
        </li>
        <li>
          <a href="https://jcconstrutora.com.br/" className="text-blue-600">
            JCC Construction
          </a>{" "}
          (2020) Re-design in a server-less implementation using AWS, Python
          (Flask) and HTML/CSS/Js. I also take care of SEO and Analytics. I had
          originally created this website in Django.
        </li>
        <li>
          <a
            href="https://caio-website-prod.herokuapp.com/"
            className="text-blue-600"
          >
            Old Personal Website
          </a>{" "}
          (2020) Gatsby.js, React.js, Heroku, GraphQL
        </li>
        <li>
          <a
            href="https://www.centraltruckandtrailer.com/"
            className="text-blue-600"
          >
            Central Truck and Trailer Shop
          </a>{" "}
          (2020) Website Design
        </li>
        <li>
          <a
            href="http://cs3319.gaul.csd.uwo.ca/vm044/a3camatta/"
            className="text-blue-600"
          >
            University Course Database
          </a>{" "}
          (2020) School Assignment in PHP, SQL. Currently moving this project to
          it's own VM.
        </li>
      </ul>
      <h3 className="text-xl text-gray-700 font-medium mt-4 mb-1">
        Mobile Apps
      </h3>
      <ul className="list-disc list-inside">
        <li>
          <a
            href="https://play.google.com/store/apps/details?id=com.CaioCoelho.moodJournal"
            className="text-blue-600"
          >
            Daily Mood Tracker
          </a>{" "}
          (2020) React Native app to help track your mood. Uses Redux. Published
          to Google Play.
        </li>
        <li>
          <a href="https://expo.io/@caiocamatta" className="text-blue-600">
            Expo apps
          </a>{" "}
          (2020) React Native apps I created while taking Harvard's CS50.
          Includes a
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
        <li>
          <a
            href="https://play.google.com/store/apps/details?id=com.CaioCoelho.Tilefall"
            className="text-blue-600"
          >
            Tilefall
          </a>{" "}
          (2016) Google Play - C# Unity.
        </li>
      </ul>
      <h3 className="text-xl text-gray-700 font-medium mt-4 mb-1">
        Hackathons
      </h3>
      <ul className="list-disc list-inside">
        <li>
          <a
            href="https://devpost.com/software/smartcommute"
            className="text-blue-600"
          >
            Hack Western 2019
          </a>{" "}
          c++ docker git json machine-learning python scikit-learn
        </li>
        <li>
          <a
            href="https://devpost.com/software/conscious-crowd"
            className="text-blue-600"
          >
            Hack The North 2019
          </a>{" "}
          azure firebase javascript python
        </li>
        <li>
          <a
            href="https://devpost.com/software/align-dui5lc"
            className="text-blue-600"
          >
            Hack Western 2018
          </a>{" "}
          (Winner!) electron google-cloud google-cloud-vision javascript. Turned
          this into a startup. Help people improve their posture.
        </li>
        <li>
          <a
            href="https://devpost.com/software/moodmatch"
            className="text-blue-600"
          >
            Hack The North 2018
          </a>{" "}
          azure css html5 python reddit
        </li>
      </ul>
    </Layout>
  );
}
