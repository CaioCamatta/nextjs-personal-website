import Layout from "../components/layout";
import React, { useState } from "react";
import ShowcaseLitePM from "../components/showcase-litepm";

const description =
  "Examples of Caio's software development and leadership work.";
const titleSuffix = "Showcase";

export default function Showcase() {
  const [itemToShowcase, setItemToShowcase] = useState("litepm");
  return (
    <Layout description={description} titleSuffix={titleSuffix}>
      <h2 className="text-4xl font-bold mb-3">Showcase</h2>
      <p className="mb-7">
        An overview of my projects and how I completed them.
      </p>
      <div className="inline-block mb-3 text-gray-800">
        <a
          onClick={() => setItemToShowcase("litepm")}
          href="#"
          className={`mr-5 hover:border-gray-600 border-b-2 border-transparent font-medium text-2xl ${
            itemToShowcase === "litepm" && "border-gray-600"
          }`}
        >
          LitePM
        </a>
        <a
          onClick={() => setItemToShowcase("westernai")}
          href="#"
          className={`mr-5 hover:border-gray-600 border-b-2 border-transparent font-medium text-2xl ${
            itemToShowcase === "westernai" && "border-gray-600"
          }`}
        >
          WesternAI
        </a>
      </div>
      {itemToShowcase === "litepm" && <ShowcaseLitePM />}
    </Layout>
  );
}
