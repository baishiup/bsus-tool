import { Breadcrumb, Radio } from "antd";
import router from "next/router";
export default (props: { url: string; children: React.ReactChild; menus: Array<string> }) => {
  function onChange(e: any) {
    router.push(e.target.value);
  }
  return (
    <div className="container">
      <Breadcrumb separator=">">
        <Breadcrumb.Item>当前位置</Breadcrumb.Item>
        {props.menus.map((x: string, i) => (
          <Breadcrumb.Item key={i}>{x}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
      <div className="mt15 mb30">
        <Radio.Group defaultValue={props.url} onChange={onChange} buttonStyle="solid">
          <Radio.Button value="/encrypt/base64">Base64加密/解密</Radio.Button>
          <Radio.Button value="/encrypt/md5">MD5加密</Radio.Button>
        </Radio.Group>
      </div>
      <div className="page">{props.children}</div>
    </div>
  );
};
