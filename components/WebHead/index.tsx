import Head from "next/head";

export default ({ title = "", keywords = "", description = "", sitename = "百事工具" }) => {
  return (
    <Head>
      <title>
        {title} | {sitename}
      </title>
      <meta name="viewport" content="width=device-width" />
      <link rel="shortcut icon" href="/logo.ico" />
      <meta name="keywords" content={keywords}></meta>
      <meta name="description" content={description}></meta>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var _hmt = _hmt || [];
            (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?c4ce2eddc3f4d17c11711222b796d907";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
            })();
                  `,
        }}
      ></script>
    </Head>
  );
};
