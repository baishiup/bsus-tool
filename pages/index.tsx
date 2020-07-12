import Link from "next/link";
import Layout from "../components/Layout";
import { Button } from "antd";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <Button type="primary">213123123</Button>
  </Layout>
);

export default IndexPage;
