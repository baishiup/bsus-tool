import Layout from "../../components/encryptLayout";
import { Button, Input, message } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { useState } from "react";
import WebHead from "../../components/WebHead";

const { TextArea } = Input;

export default () => {
  const [value, setValue] = useState("");
  const [resValue, setResValue] = useState("");

  function encodeBase64() {
    if (!value) {
      return message.error("请输入有效的内容");
    }
    const b = new Buffer(value);
    setResValue(b.toString("base64"));
  }
  function decodeBase64() {
    if (!resValue) {
      return message.error("请输入有效的base64");
    }
    const b = new Buffer(resValue, "base64");
    setValue(b.toString());
  }
  function clear() {
    setValue("");
    setResValue("");
  }
  return (
    <Layout menus={["加密/解密", "Base64加密/解密"]} url="/encrypt/base64">
      <div>
        <WebHead></WebHead>
        <div style={{ display: "flex" }}>
          <div style={{ width: "400px" }}>
            <TextArea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="加密。需要加密的base64内容粘贴到这里即可。"
              autoSize={{ minRows: 10 }}
            />
          </div>
          <div style={{ padding: "0 15px" }}>
            <Button type="primary" onClick={encodeBase64}>
              <span>加密</span>
              <RightOutlined />
            </Button>
            <br />
            <Button type="primary" onClick={decodeBase64} style={{ marginTop: "15px" }}>
              <LeftOutlined />
              <span>解密</span>
            </Button>
            <br />
            <Button type="primary" block danger onClick={clear} style={{ marginTop: "15px" }}>
              <span>清空</span>
            </Button>
          </div>
          <div style={{ width: "400px" }}>
            <TextArea
              value={resValue}
              onChange={(e) => setResValue(e.target.value)}
              placeholder="解密。需要解密的base64内容粘贴到这里即可。"
              autoSize={{ minRows: 10 }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
