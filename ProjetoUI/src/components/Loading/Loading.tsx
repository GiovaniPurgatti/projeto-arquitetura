import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const Loading: React.FC = () => {
  return (
    <div style={{ textAlign: "center", margin: "10%" }}>
      <Spin indicator={<LoadingOutlined spin />} size="large" />
      <br />
      Carregando dados!
    </div>
  );
};

export default Loading;
