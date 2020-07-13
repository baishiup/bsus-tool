import Layout from "../components/Layout";
import "../styles/reset.less";
import "../styles/common.less";

import "antd/dist/antd.less";

export default ({ Component, pageProps }: any) => {
  return (
    <div>
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    </div>
  );
};
