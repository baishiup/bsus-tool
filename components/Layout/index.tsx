import Header from "../header";

export default (props: { children: React.ReactChild }) => {
  return (
    <div className="root">
      <Header></Header>
      <div className="wrapper">{props.children}</div>
    </div>
  );
};
