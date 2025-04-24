import { Button } from "antd";

const GenericButton: React.FC<GenericButtonProps> = ({
  onClick,
  title,
  icon,
  label,
  style,
}) => {
  return (
    <Button
      type="link"
      title={title}
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#03C03C",
        flex: "0 1 auto",
        marginRight: "2px",
        ...style,
      }}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </Button>
  );
};

export default GenericButton;
