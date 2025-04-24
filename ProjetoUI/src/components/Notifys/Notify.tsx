import { notification } from "antd";

type NotificationType = "success" | "info" | "warning" | "error";

const Notify = {
  open: (type: NotificationType, message: string, duration: number = 4.5) => {
    notification[type]({
      message,
      duration,
    });
  },
};

export default Notify;
