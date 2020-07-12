import Layout from "../../components/encryptLayout";
import { Row, Col, Input, Button } from "antd";
import { useState } from "react";
import crypto from "crypto";

const { TextArea } = Input;
export default () => {
  const [value, setValue] = useState("");

  const [big32, setBig32] = useState("");
  const [small32, setSmall32] = useState("");
  const [big16, setBig16] = useState("");
  const [small16, setSmall16] = useState("");

  function markMD5() {
    const res = crypto.createHash("md5").update(value).digest("hex");

    setBig32(res.toLocaleUpperCase());
    setSmall32(res);

    const word16 = res.slice(8, 24);
    setBig16(word16.toLocaleUpperCase());
    setSmall16(word16);
  }

  return (
    <Layout menus={["加密/解密", "MD5加密"]} url="/encrypt/md5">
      <div>
        <Row gutter={[20, 20]}>
          <Col span={8}>
            <TextArea value={value} onChange={(e) => setValue(e.target.value)} placeholder="md5加密内容粘贴到这里即可。" autoSize={{ minRows: 10 }} />
          </Col>
          <Col span={8}>
            <div className="flex flexAlign">
              <span style={{ width: "100px" }}>32位大写</span>
              <Input readOnly placeholder="32位大写" value={big32} />
            </div>
            <div className="flex flexAlign mt15">
              <span style={{ width: "100px" }}>32位小写</span>
              <Input readOnly placeholder="32位小写" value={small32} />
            </div>
            <div className="flex flexAlign mt15">
              <span style={{ width: "100px" }}>16位大写</span>
              <Input readOnly placeholder="16位大写" value={big16} />
            </div>
            <div className="flex flexAlign mt15">
              <span style={{ width: "100px" }}>16位小写</span>
              <Input readOnly placeholder="16位小写" value={small16} />
            </div>
          </Col>
        </Row>
        <Button type="primary" onClick={markMD5}>
          MD5加密
        </Button>
      </div>
    </Layout>
  );
};
