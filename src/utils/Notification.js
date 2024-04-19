import React from "react";
import { notification } from "antd";
// import "antd/dist/antd.css";

const Notification = (type, message, description) => {
  notification[type]({
    message,
    description,
  });
};
export default Notification;
