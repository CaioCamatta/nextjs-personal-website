import Head from "next/head";
import Layout, { siteTitle, name } from "../components/layout";
import Link from "next/link";

const description =
  "Caio Camatta Coelho's personal website, portfolio, and resume.";

export default function Home() {
  return (
    <Layout description={description}>
      <h2 className="text-4xl font-bold mb-3">About</h2>
    </Layout>
  );
}
