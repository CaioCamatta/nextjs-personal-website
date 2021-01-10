import Layout, { siteTitle, name } from "../components/layout";
import Image from "next/image";
import Link from "next/link";

const description = "Caio's resume.";
const titleSuffix = "Resume";

export default function Home() {
  return (
    <Layout description={description} titleSuffix={titleSuffix}>
      <h2 className="text-4xl font-bold mb-3">Resume</h2>
      <p>
        Links to projects mentioned in my resume can be found on this website.
        {/*<h3 className={`text-3xl sm:text-3xl md:text-5xl mt-4 sm:mt-6 pb-2 text-gray-800 font-light inline-block pr-4`} style={styles.greenBrush}>Websites</h3>
            <ClickablePosting title="JCC Construction" description="(2020) - Re-design, Python (Flask), AWS, Serverless" image="symbol.png" imageAlt="JCC Construtora" link="https://jcconstrutora.com.br/" />
            <ClickablePosting title="Personal Website" description="(2020) - React, Gatsby, Heroku" image="personalwebiste.png" imageAlt="Personal website logo" link="https://www.caio.space/" />
            <ClickablePosting title="Central Truck and Trailer Shop" description="(2020) - Website Design" image="truckandtrailer.png" imageAlt="Central Truck and Trailer" link="https://www.centraltruckandtrailer.com/" />
            <ClickablePosting title="University Course Database" description="(2020) - School Assignment, PHP, SQL" image="sql-logo.png" imageAlt="SQL PHP Assignment" link="http://cs3319.gaul.csd.uwo.ca/vm044/a3camatta/" />
            <ClickablePosting title="JCC Construction" description="(2018) Website Design, Python (Django), SEO, Online Ads" image="symbol-dark-jcc.png" imageAlt="JCC Construtora old" link="https://jcconstrutora.com.br/" />

            <h3 className="text-3xl sm:text-3xl md:text-5xl mt-2 sm:mt-6 xl:mt-6 pb-2 text-gray-800 font-light inline-block pr-4" style={styles.pinkBrush}>Apps</h3>
            <ClickablePosting title="Daily Mood Tracker" description="2020 - React Native" image="moodtracker.png" imageAlt="Mood tracker" link="https://play.google.com/store/apps/details?id=com.CaioCoelho.moodJournal" />
            <ClickablePosting title="Movie Finder" description="2020 - Harvard CS50 Assignment - React Native" image="moviefinder.png" imageAlt="Movie Finder" link="https://expo.io/@caiocamatta/Movie-Finder" />
            <ClickablePosting title="Study Timer" description="2020 - Harvard CS50 Assignment - React Native" image="studytimer.png" imageAlt="Study Timer" link="https://expo.io/@caiocamatta/study-timer" />
            <ClickablePosting title="Tilefall" description="2016 - Google Play - C# Unity " image="tappingtiles.png" imageAlt="Tapping Tiles" link="https://play.google.com/store/apps/details?id=com.CaioCoelho.Tilefall" />

            <h3 className="text-3xl sm:text-3xl md:text-5xl mt-2 sm:mt-6 xl:mt-6 pb-2 text-gray-800 font-light inline-block pr-4" style={styles.paleBrush}>Hackathons</h3>
            <ClickablePosting title="Hack Western 2019" description="c++ docker git json machine-learning python scikit-learn" image="hackwestern6.jpg" imageAlt="Hack Western 2019" link="https://devpost.com/software/smartcommute" customDescriptionClass="hidden md:block" />
            <ClickablePosting title="Hack The North 2019" description="azure firebase javascript python" image="hackthenorth2019.jpg" imageAlt="Hack the North 2019" link="https://devpost.com/software/conscious-crowd" customDescriptionClass="hidden md:block" />
            <ClickablePosting title="Hack Western 2018 - Winner" description="electron google-cloud google-cloud-vision javascript" image="alyn.png" imageAlt="Hack Western 2018" link="https://devpost.com/software/align-dui5lc" customDescriptionClass="hidden md:block" />
            <ClickablePosting title="Hack The North 2018" description="azure css html5 python reddit" image="hackthenorth2018.jpg" imageAlt="Hack the North 2018" link="https://devpost.com/software/moodmatch" customDescriptionClass="hidden md:block" />
 */}
      </p>
      <p>
        <a href="/Caio_C_Coelho_Resume.pdf" className="underline">
          View PDF
        </a>
      </p>
      <div className="max-w-xl">
        <Image
          src="/Caio_C_Coelho_Resume.png"
          alt={name}
          width="1656"
          height="2342"
          className="rounded-sm -mt-3"
          layout="responsive"
          quality={100}
        />
      </div>
    </Layout>
  );
}
