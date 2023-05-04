import { useEffect } from "react";
import { useState } from "react";

const { createContext } = require("react");

export const NotificationContext = createContext({
  activeNotification: {}, //{title, message, status}
  showNotificationHandler() {},
  hideNotificationHandler() {},
});

const NotificationContextProvider = (props) => {
  const [activeNotification, setActiveNotification] = useState(null);

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "success" ||
        activeNotification.status === "error")
    ) {
      const timer = setTimeout(() => setActiveNotification(null), 3000);
      return () => {
        return clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  const showNotificationHandler = (notification) => {
    setActiveNotification(notification);
  };

  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };

  const context = {
    activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;
//
