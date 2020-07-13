import { Breadcrumb, Input, message, Button } from "antd";
import { useState, useEffect } from "react";
const { TextArea } = Input;
import QRcode from "qrcode";
import dayjs from "dayjs";
import WebHead from "../../components/WebHead";

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
    <div className="container">
      <WebHead></WebHead>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>当前位置</Breadcrumb.Item>
        <Breadcrumb.Item>二维码生成</Breadcrumb.Item>
      </Breadcrumb>
      <div className="page mt30" style={{ display: "flex" }}>
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
  );
};
