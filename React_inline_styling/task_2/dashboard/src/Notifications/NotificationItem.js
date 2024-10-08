import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const NotificationItem = React.memo(function NotificationItem({
  type,
  value,
  html,
  markAsRead,
  id,
}) {
  let listItem;

  if (value) {
    listItem = (
      <li
        className={typeStyle}
        data-notification-type={type}
        onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    );
  } else {
    listItem = (
      <li
        className={typeStyle}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
      ></li>
    );
  }

  return listItem;
});

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: {},
  markAsRead: () => {},
  id: NaN,
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

const styles = StyleSheet.create({
  default: {
    color: "blue",
  },

  urgent: {
    color: "red",
  },
});

export default NotificationItem;