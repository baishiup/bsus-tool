import { Input, message, Button } from "antd";
import { useState, useEffect } from "react";
const { TextArea } = Input;
import QRcode from "qrcode";
import dayjs from "dayjs";
import WebHead from "../../components/WebHead";
import Layout from "../../components/pageLayout";

export default () => {
  const defaultText = "https://tool.baishiup.com/qrcode/generate";
  const [value, setValue] = useState("");
  const [url, setUrl] = useState("");
  const [fileName, setFileName] = useState("");
  useEffect(() => {
    markQrcode(defaultText);
  }, []);
  function handle() {
    markQrcode(value);
  }
  function markQrcode(str: string) {
    if (!str) {
      return message.error("请输入有效内容");
    }
    QRcode.toDataURL(str, { errorCorrectionLevel: "H" }, function (error, url) {
      if (error) {
        console.log(error);
        return message.error("程序异常");
      }
      const dom = document.getElementById("qrcode-img");
      if (dom) {
        dom.innerHTML = "";
      }
      const img = document.createElement("img");
      img.setAttribute("src", url);
      img.setAttribute("width", "100%");
      dom && dom.appendChild(img);
      setUrl(url);
      setFileName("baishiup-" + dayjs(new Date()).format("YYYYMMDDHHmmss"));
    });
  }

  return (
    <Layout breadcrumbs={["二维码工具", "二维码生成"]}>
      <div>
        <WebHead
          title="二维码生成器 | 二维码在线生成器"
          description="在线二维码生成器提供免费的在线二维码生成服务，可以把电子名片、文本、wifi网络、电子邮件、短信、电话号码、网址等信息生成对应的二维码图片。并且提供二维码美化服务。"
          keywords="二维码,二维码生成器,二维码图片,二维码是什么,手机二维码,二维码生成,二维码扫描软件,二维码识别软件,手机二维码识别软件,二维码解码器,二维码软件,手机二维码软件,二维码开放平台,二维码接口,二维码API"
        ></WebHead>
        <div style={{ display: "flex" }}>
          <div style={{ width: "400px" }}>
            <TextArea value={value} onChange={(e) => setValue(e.target.value)} placeholder="支持文本、网址和电子邮箱" autoSize={{ minRows: 10 }} />
            <Button type="primary" className="mt15" onClick={handle}>
              生成二维码
            </Button>

            <Button type="primary" className="mt15 ml15" download={fileName} href={url}>
              下载图片
            </Button>
          </div>
          <div id="qrcode-img" style={{ width: "300px", height: "300px", marginLeft: "15px", border: " 1px solid #d9d9d9" }}></div>
        </div>
      </div>
    </Layout>
  );
};
