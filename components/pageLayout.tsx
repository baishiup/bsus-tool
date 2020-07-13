import { Breadcrumb, Radio } from "antd";
import router from "next/router";

type layoutProps = {
  children: React.ReactChild;
  breadcrumbs?: Array<string>;
  menus?: Array<any>;
  curPath?: string;
};

export default (props: layoutProps) => {
  function handleTabMenu(e: any) {
    router.push(e.target.value);
  }

  return (
    <div className="container">
      {props.breadcrumbs && (
        <Breadcrumb separator=">">
          <Breadcrumb.Item>当前位置</Breadcrumb.Item>
          {props.breadcrumbs.map((x: string, i) => (
            <Breadcrumb.Item key={i}>{x}</Breadcrumb.Item>
          ))}
        </Breadcrumb>
      )}
      {props.menus && (
        <div className="mt15">
          <Radio.Group defaultValue={props.curPath} onChange={handleTabMenu} buttonStyle="solid">
            {props.menus.map((x, i) => (
              <Radio.Button key={i} value={x.path}>
                {x.name}
              </Radio.Button>
            ))}
            {/* <Radio.Button value="/encrypt/base64">Base64加密/解密</Radio.Button>
            // <Radio.Button value="/encrypt/md5">MD5加密</Radio.Button> */}
          </Radio.Group>
        </div>
      )}

      <div className="page mt30">{props.children}</div>
    </div>
  );
};
