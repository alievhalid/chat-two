import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { openProfile } from "../../redux/contact";
import styles from "./chat.module.css";
import Messages from "./Messages";
function Chat() {
  const param = useParams().id;
  const open = useSelector((state) => state.contact.profileOpen)
  const profile = useSelector((state) =>
    state.contact.contact.find((item) => {
      return param === item._id;
    })
  );
  const dispatch = useDispatch()
  const handleShow = (id) => {
    dispatch(openProfile(!id))
  }
  return (
    <div className={styles.chat}>
      <div className={styles["chat-header"]}>
        <div className={styles.search}>
          <img
            src="https://www.pinclipart.com/picdir/big/552-5523025_white-search-icon-clipart-vector-library-white-search.png"
            alt=""
          />
        </div>
        <div className={styles["chat-profile"]}>{profile?.fullname}</div>
        <div className={styles["chat-show-profile"]}>
          <img
            src="https://communityevolution.org/wp-content/uploads/2020/02/missing-profile-picture-1.jpg"
            alt=""
            onClick={() => handleShow(!open)}/>
        </div>
      </div>
      <Messages />
    </div>
  );
}

export default Chat;
