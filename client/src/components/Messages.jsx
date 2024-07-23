import React from 'react';
import styles from '../styles/Messages.module.css'

const Messages = ({ messages, name }) => {
  return (
    <div className={styles.messages}>
      {messages.map(({user, message}, i) => {
        const itsMe = user.name.trim().toLowerCase() === name.trim().toLowerCase()
        let className = styles.user;
        if (itsMe) className = styles.me;
        else if(user.name === 'Admin') className = styles.admin;
        return (
          <div key={i} className={`${styles.message} ${className}`}>
            <span className={styles.user}>
              {user.name}
            </span>

            <div className={styles.text}>
              {message}
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Messages;