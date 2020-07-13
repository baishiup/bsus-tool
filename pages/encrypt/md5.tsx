import Layout from "../../components/pageLayout";
import { Row, Col, Input, Button } from "antd";
import { useState } from "react";
import crypto from "crypto";
import WebHead from "../../components/WebHead";
import { encryptRoutes } from "../../utils/sample-data";

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
    <Layout breadcrumbs={["加密/解密", "MD5加密"]} menus={encryptRoutes} curPath="/encrypt/md5">
      <div>
        <WebHead
          title="MD5在线加密/解密/破解—MD5在线"
          description="在线md5加密，md5解密，md5加密算法，md5加密工具，免费MD5在线加密，MD5在线解密破解，MD5在线查询，免费MD5解密，支持32位MD5&6位MD5 。"
          keywords="md5加密,md5加密算法,md5加密工具"
        ></WebHead>
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
