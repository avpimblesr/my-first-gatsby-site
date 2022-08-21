//  Step1: Import React
import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";

//  Step 2: Define your component
function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
}

export const Head = () => <title>Home Page</title>;

//  Step 3: Export your component
export default IndexPage;
