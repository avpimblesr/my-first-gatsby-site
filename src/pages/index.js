//  Step1: Import React
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

//  Step 2: Define your component
function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/clifford.jpg"
      />
    </Layout>
  );
}

export const Head = () => <title>Home Page</title>;

//  Step 3: Export your component
export default IndexPage;
