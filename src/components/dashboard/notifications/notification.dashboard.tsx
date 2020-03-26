import React from "react";
import notificationsStyle from "./notifications.module.scss";
import moment from "moment";

interface Props {
  notifications: any;
}

const Notifications: React.FC<Props> = props => {
  return (
    <div className={notificationsStyle.Notifications}>
      <div className={notificationsStyle.Title}>
        <p>Notifications</p>
      </div>
      <div className={notificationsStyle.Content}>
        <ul>
          {props.notifications &&
            props.notifications.map((n: any) => (
              <li key={n.id}>
                <span style={{ color: "red" }}>{n.user} </span>
                <span>{n.content}</span>
                <div className={notificationsStyle.Time}>
                  <p>{moment(n.time.toDate()).fromNow()}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
