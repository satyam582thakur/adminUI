import { useRef } from "react";
import PropTypes from "prop-types";

import styles from "./UserComponent.module.css";

const User = (props) => {
  const { user, deleteUser, editUser, saveUser, selectOne } = props;

  const NameRef = useRef(null);
  const EmailRef = useRef(null);
  const RoleRef = useRef(null);

  return (
    <tr key={user.id} className={user.selected ? styles.selected : ""}>
      <td>
        <label for={`check-${user.id}`}>
          <input
            id={`check-${user.id}`}
            type="checkbox"
            data={`${user.selected}`}
            onChange={() => selectOne(user.id)}
            checked={user.selected}
          ></input>
        </label>
      </td>
      <td>
        <input
          className={user.edit ? styles.editable : styles.readOnly}
          readOnly={!user.edit}
          type="text"
          ref={NameRef}
          name="name"
          defaultValue={user.name}
        ></input>
      </td>
      <td>
        <input
          className={user.edit ? styles.editable : styles.readOnly}
          readOnly={!user.edit}
          type="email"
          ref={EmailRef}
          name="email"
          defaultValue={user.email}
        />
      </td>
      <td>
        <input
          className={user.edit ? styles.editable : styles.readOnly}
          readOnly={!user.edit}
          type="text"
          ref={RoleRef}
          name="role"
          defaultValue={user.role}
        />
      </td>
      <td className={styles.icons}>
        {user.edit ? (
          <i
            onClick={() => saveUser(user.id, NameRef, EmailRef, RoleRef)}
            className="fas fa-save"
          ></i>
        ) : (
          <i onClick={() => editUser(user.id)} className="fas fa-edit"></i>
        )}

        <i onClick={() => deleteUser(user.id)} className="fas fa-trash-alt"></i>
      </td>
    </tr>
  );
};

User.propTypes = {
  user: PropTypes.object,
  deleteUser: PropTypes.func,
  editUser: PropTypes.func,
  saveUser: PropTypes.func,
  selectOne: PropTypes.func
};

export default User;
