import React from "react";
import Layout from "../components/Layout";

import { Button } from "react-bootstrap";

const Test = () => (
  <Layout>
    <div>
      <p>This contains a button which is exported by react-bootstrap</p>
      <Button variant="primary">Primary</Button>
      <p className="button">Button text</p>
    </div>
  </Layout>
);

export default Test;
