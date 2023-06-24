import Layout from "../components/layout";

const description =
  "Software Engineer based in Toronto, currently working at Stripe.";
const titleSuffix = "About";

export default function Home() {
  return (
    <Layout description={description} titleSuffix={titleSuffix}>
      <h2 className="text-4xl font-bold mb-3">About Me</h2>
      <p className="text-lg text-gray-800">
        I am a Software Engineer based in Toronto and currently working at Stripe.
        I'm passionate about building systems at scale and real-time systems.
        <br></br>
        On my free time, I enjoy windsurfing, travelling, and listening to
        music.
      </p>
      <h3 className="text-xl text-gray-900 font-medium mt-5 mb-1 pt-1">
        Projects
      </h3>
      <ul className="list-disc list-inside ml-3 mt-2 text-gray-800">
        <li className="mt-2">
          <a href="https://github.com/CaioCamatta/clox/" className="text-blue-600">
            Lox
          </a>{" "}
          (2023): Implemented the Lox programming language in Java and then in C following the book Crafting Interpreters by Robert Nystrom. It includes scanner, parser, compiler, VM, garbage collection, closures, etc.
        </li>
        <li className="mt-2">
          <a href="https://dev.votingbuck.com/" className="text-blue-600">
            Votingbuck
          </a>{" "}
          (2021-2022): a web app to visualize how corporations and universities
          donate to politicians. It's composed of an Express.js/TypeScript API,
          a Redis cache, a PostgreSQL database, an Nginx load balancer, a CI/CD
          pipeline, and a React frontend. This was my capstone project at school
          and my team's supervisor continued staffing it after we graduated. [
          <a
            href="https://github.com/CaioCamatta/votingbuck-backend"
            className="text-blue-600"
          >
            GitHub Repo
          </a>
          ]
        </li>
        <li className="mt-2">
          <a
            href="http://ec2-3-144-157-84.us-east-2.compute.amazonaws.com:8080/"
            className="text-blue-600"
          >
            Stocks App
          </a>{" "}
          (2021): A stock market app with multiple services (e.g., graphs,
          news). It uses a service-oriented architecture that allows services to
          be added or removed at runtime. We created this in a group of 5 and
          deployed on AWS EC2 using Docker. [
          <a
            href="https://github.com/CaioCamatta/StockTracker"
            className="text-blue-600"
          >
            GitHub Repo
          </a>
          ] .
        </li>
        <li className="mt-2">
          <a
            href="https://www.figma.com/proto/D95fVAZ5g3JIKEOemr9FAt/Asset-Management-System-Mockup-Generic?node-id=1%3A2&scaling=contain&page-id=0%3A1"
            className="text-blue-600"
          >
            Inventory Management System
          </a>{" "}
          (2021): a dashboard to manage physical assets at a lab.
        </li>
        <li className="mt-2">
          <a href="https://lite-pm.vercel.app/" className="text-blue-600">
            LitePM
          </a>{" "}
          (2021): a Project Management app to manage small group projects. Created in a 7-day sprint with friends. It uses
          Next.js and is hosted on AWS EC2.
        </li>
        <li className="mt-2">
          <a
            href="https://rpg-of-life-frontend.vercel.app/"
            className="text-blue-600"
          >
            LifeRPG
          </a>{" "}
          (2021): an RPG app where you progress your character by completing
          real-life tasks. This was created in another week-long sprint with three people. We used Next.js, React, Flask, and Firebase.
        </li>
        <li className="mt-2">
          <a
            href="https://github.com/CaioCamatta/ModuLounge"
            className="text-blue-600"
          >
            ModuLounge
          </a>{" "}
          (2020): a C++ app to turn any screen into a smart-ish TV.
        </li>
        <li className="mt-2">
          <a
            href="https://wai-music-genre-classification.herokuapp.com/"
            className="text-blue-600"
          >
            Music genre classification AI project
          </a>{" "}
          (2020): a music genre classification model deployed using a
          Flask server and tensorflow.js. It accompanies a{" "}
          <a
            href="https://viewscreen.githubusercontent.com/view/pdf?browser=chrome&bypass_fastly=true&color_mode=light&commit=99588db1db68dc28e9508eaaccec0e9221fef964&device=unknown_device&docs_host=https%3A%2F%2Fdocs.github.com&enc_url=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f43554341492d6f6666696369616c2f63756361692d323032312f393935383864623164623638646332386539353038656161636365633065393232316665663936342f7374617469632f43554341495f323032315f50726f63656564696e67732e706466&logged_in=true&nwo=CUCAI-official%2Fcucai-2021&path=static%2FCUCAI_2021_Proceedings.pdf&platform=mac&repository_id=348782458&repository_type=Repository&version=112"
            className="text-blue-600"
          >
            paper
          </a>{" "}
          that my team and I published at the Canadian Undergraduate Conference
          on AI (CUCAI).
        </li>
        <li className="mt-2">
          <a href="https://jcconstrutora.com.br/" className="text-blue-600">
            JCC Construction
          </a>{" "}
          (2016-2020): a website for a real estate development company. I
          created this website and managed it for some years. It uses a
          serverless deployment on AWS, Python/Flask for the backend, and
          HTML/CSS/Js for the frontend.
        </li>
        {/* <li className="mt-2">
          <a
            href="http://cs3319.gaul.csd.uwo.ca/vm044/a3camatta/"
            className="text-blue-600"
          >
            University Course Database
          </a>{" "}
          (2020): a PHP & SQL school assignment.
        </li> */}
        <li className="mt-2">
          <a
            href="https://github.com/CaioCamatta/CarRacing-PolicyGradient"
            className="text-blue-600"
          >
            Self-learning Race Car
          </a>{" "}
          (2018): a Reinforcement Learning neural network that applies {" "}
          <a
            href="https://medium.com/@thechrisyoon/deriving-policy-gradients-and-implementing-reinforce-f887949bd63"
            lassName="text-blue-600"
          >
            Monte Carlo Policy Gradient
          </a>{" "}
          on the OpenAI Gym CarRacing-v0 environment. 
        </li>
        <li className="mt-2">
          <a
            href="https://github.com/CaioCamatta/Crypto-Trading-Research"
            className="text-blue-600"
          >
            Crypto Trading Algorithm
          </a>{" "}
          (2017): an attempt at finding (via brute force) a profitable trading algorithm that uses five technical indicators - Bollinger Bands, RSI, Moving Averages, MACD, and Parabolic SAR. 
        </li>
      </ul>

      <h3 className="text-xl text-gray-900 font-medium mt-5 mb-1 pt-2">
        Mobile Apps
      </h3>
      <ul className="list-disc list-inside ml-3 mt-2 text-gray-800">
        <li className="mt-2">
          <a
            href="https://github.com/CaioCamatta/mood-tracker-react-native"
            className="text-blue-600"
          >
            Daily Mood Tracker
          </a>{" "}
          (2020): a React Native app to track your mood and view
          statistics over time. Published to Google Play.
        </li>
        <li className="mt-2">
          <a href="https://expo.io/@caiocamatta" className="text-blue-600">
            Expo Apps
          </a>{" "}
          (2020): React Native apps I created as part of Harvard's CS50 Mobile
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

      <h3 className="text-xl text-gray-900 font-medium mt-5 mb-1 pt-2">
        Hackathons
      </h3>
      <ul className="list-disc list-inside ml-3 mt-2 text-gray-800">
        <li className="mt-2">
          <a
            href="https://devpost.com/software/smartcommute"
            className="text-blue-600"
          >
            Hack Western 2019
          </a>
          : "Smart Commute", an app to simulate and optimize traffic at intersections. 
        </li>
        <li className="mt-2">
          <a
            href="https://devpost.com/software/conscious-crowd"
            className="text-blue-600"
          >
            Hack The North 2019
          </a>
          : "Conscious Crowd", an online quiz app developed using Firebase, JavaScript, Python.
        </li>
        <li className="mt-2">
          <a
            href="https://devpost.com/software/align-dui5lc"
            className="text-blue-600"
          >
            Hack Western 2018 (Winner!)
          </a>{" "}
          : "Align",  a desktop app that uses your webcam to track your posture and help you improved it. Created using Electron and the Google Cloud Vision API.
        </li>
        <li className="mt-2">
          <a
            href="https://devpost.com/software/moodmatch"
            className="text-blue-600"
          >
            Hack The North 2018
          </a>
          : "MoodMatch", an app that uses facial recognition to determine your current mood and show you appropriate memes. It uses Azure and the Reddis api.
        </li>
      </ul>
    </Layout>
  );
}
