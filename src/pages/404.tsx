import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const NotFound = () => (
  <Layout>
    <main>
      <h1>404 - Page not found</h1>
      <p>
        Go back to <Link to="/">homepage</Link>.
      </p>
    </main>
  </Layout>
);

export default NotFound;
