import React, {useState} from 'react';
import styles from '../styles/Main.module.css'
import {Link} from "react-router-dom";

const fields = {
  name: "name",
  room: "room"
}

const Main = () => {
  const {name, room} = fields
  const [values, setValues] = useState({ [name]: '', [room]: '' })

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value })
  }

  const handleClick = (e) => {
    const isDisabled = Object.values(values).some(value => !value)

    if(isDisabled) e.preventDefault()
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Join</h1>

        <form className={styles.form}>
          <div className={styles.group}>
            <input
              type="text"
              name="name"
              value={values.name}
              placeholder={"Name"}
              className={styles.input}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div className={styles.group}>
            <input
              type="text"
              name="room"
              value={values.room}
              placeholder={"Room"}
              className={styles.input}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <Link
            to={`/chat?name=${values.name}&room=${values.room}`}
            className={styles.group}
            onClick={handleClick}
          >
            <button type={"submit"} className={styles.button}>Sign In</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Main;