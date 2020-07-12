import Layout from "../components/Layout";
import "../styles/reset.less";
import "../styles/common.less";

import "antd/dist/antd.less";

export default ({ Component, pageProps }: any) => {
  return (
    <Layout>
      <Component {...pageProps}></Component>
    </Layout>
  );
};
