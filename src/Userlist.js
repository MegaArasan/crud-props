import React from "react";
import { Users } from "./Users.js";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {useHistory} from "react-router-dom";

export function Userlist({ users, setusers }) {
  const history=useHistory();
  return (
    <section className="user-list">
      {users.map(({ name, avatar, role, jerseyno }, index) => (
        <Users
          key={index}
          name={name}
          avatar={avatar}
          role={role}
          jerseyno={jerseyno}
          id={index}
          deleteButton={
            <IconButton
              className="user-show-button"
              color="error"
              aria-label="delete user"
              onClick={() => {
                console.log("deleting...", index);

                //assign the index as deleteindex so it refers to the particular we can easyly undersatand
                const deleteIndex = index;

                // the filter function also send two parameter one is user another one is index
                const remainingUsers = users.filter(
                  (mv, idx) => idx !== deleteIndex
                );

                //filtered movie show in the window
                console.log(remainingUsers);
                setusers(remainingUsers);
              }}
            >
              <DeleteIcon />
            </IconButton>
          }
          editButton={
            <IconButton
              className="user-show-button"
              color="secondary"
              aria-label="edit user"
              onClick={()=>history.push("/users/edit/"+index)}
            >
              <EditIcon />
            </IconButton>
          }
        />
      ))}
    </section>
  );
}
