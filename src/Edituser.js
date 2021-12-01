import React from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";

export function Edituser({ users, setusers }) {
  const history = useHistory();
  const { id } = useParams();
  const user = users[id];

  const [name, setname] = useState(user.name);
  const [avatar, setavatar] = useState(user.avatar);
  const [fullname, setfullname] = useState(user.fullname);
  const [city, setcity] = useState(user.city);
  const [role, setrole] = useState(user.role);
  const [batting, setbatting] = useState(user.batting);
  const [bowling, setbowling] = useState(user.bowling);
  const [age, setage] = useState(user.age);
  const [jerseyno, setjerseyno] = useState(user.jerseyno);

  const saveuser = () => {
    const updateuser = {
      name: name,
      avatar: avatar,
      fullname: fullname,
      city: city,
      role: role,
      batting: batting,
      bowling: bowling,
      age: age,
      jerseyno: jerseyno,
    };
    console.log(updateuser);
    const copyuserList = [...users];
    copyuserList[id] = updateuser;
    setusers(copyuserList);
    history.push("/users");
  };
  return (
    <div className="saveuser">
      <TextField
        id="name"
        label="Name"
        variant="standard"
        value={name}
        onChange={(event) => setname(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="avatar"
        label="Avatar"
        value={avatar}
        variant="standard"
        onChange={(event) => setavatar(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="fullname"
        label="FullName"
        value={fullname}
        variant="standard"
        onChange={(event) => setfullname(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="city"
        label="City"
        value={city}
        variant="standard"
        onChange={(event) => setcity(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="role"
        label="Role"
        value={role}
        variant="standard"
        onChange={(event) => setrole(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="batting"
        label="Batting Style"
        value={batting}
        variant="standard"
        onChange={(event) => setbatting(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="bowling"
        value={bowling}
        label="Bowling Style"
        variant="standard"
        onChange={(event) => setbowling(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="age"
        label="Age"
        value={age}
        variant="standard"
        onChange={(event) => setage(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="jerseyno"
        label="Jersey No"
        value={jerseyno}
        variant="standard"
        onChange={(event) => setjerseyno(event.target.value)}
        fullWidth
        required
      />
      <Button
        variant="contained"
        color="success"
        sx={{ margin: "10px" }}
        onClick={saveuser}
      >
        Save User
      </Button>
    </div>
  );
}
