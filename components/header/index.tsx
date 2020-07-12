import "./index.less";
import router from "next/router";

import Link from "next/link";
import { Menu } from "antd";

const { SubMenu } = Menu;

export default () => {
  function handleClick(e: any) {
    router.push(e.key);
  }
  return (
    <div className="header">
      {/* head */}
      <div className="header-fixed">
        <div className="wrapper">{/* menu list */}</div>
      </div>
      <div className="header-head wrapper">
        <Link href="/">
          <img src="/logo.png" className="logo" alt="" />
        </Link>
      </div>
      <div className="header-nav">
        <div className="wrapper">
          <Menu mode="horizontal" onClick={handleClick}>
            <SubMenu title="加密/解密">
              <Menu.Item key="/encrypt/base64">Base64加密/解密</Menu.Item>
              <Menu.Item key="/encrypt/md5">MD5加密/解密</Menu.Item>
            </SubMenu>
            <SubMenu title="二维码工具">
              <Menu.Item key="/qrcode/generate">二维码生成</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </div>
    </div>
  );
};
