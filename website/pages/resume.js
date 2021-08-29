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
        Here you will find information regarding my relevant work experience and
        education, as well as skills, activities and contact info.
      </p>
      <p className="mt-2">
        <a href="/Caio_C_Coelho_Resume.pdf" className="underline">
          PDF Version
        </a>
      </p>
      <div className="max-w-xl">
        <Image
          src="/Caio_C_Coelho_Resume.png"
          alt={name}
          width="1133"
          height="1600"
          className="rounded-sm -mt-3"
          layout="responsive"
          quality={100}
        />
      </div>
    </Layout>
  );
}
