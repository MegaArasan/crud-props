import React, { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";

export function Adduser({ users, setusers }) {
  const history = useHistory();

  const [name, setname] = useState("");
  const [avatar, setavatar] = useState("");
  const [fullname, setfullname] = useState("");
  const [city, setcity] = useState("");
  const [role, setrole] = useState("");
  const [batting, setbatting] = useState("");
  const [bowling, setbowling] = useState("");
  const [age, setage] = useState("");
  const [jerseyno, setjerseyno] = useState("");

  const Adduser = () => {
    const newuser = {
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
    console.log(newuser);
    console.log(users);
    setusers([...users, newuser]);
    console.log(users);
    history.push("/users");
  };

  return (
    <div className="adduser">
      <TextField
        id="name"
        label="Name"
        variant="standard"
        onChange={(event) => setname(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="avatar"
        label="Avatar"
        variant="standard"
        onChange={(event) => setavatar(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="fullname"
        label="FullName"
        variant="standard"
        onChange={(event) => setfullname(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="city"
        label="City"
        variant="standard"
        onChange={(event) => setcity(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="role"
        label="Role"
        variant="standard"
        onChange={(event) => setrole(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="batting"
        label="Batting Style"
        variant="standard"
        onChange={(event) => setbatting(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="bowling"
        label="Bowling Style"
        variant="standard"
        onChange={(event) => setbowling(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="age"
        label="Age"
        variant="standard"
        onChange={(event) => setage(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="jerseyno"
        label="Jersey No"
        variant="standard"
        onChange={(event) => setjerseyno(event.target.value)}
        fullWidth
        required
      />
      <Button
        variant="contained"
        color="success"
        sx={{ margin: "10px" }}
        onClick={Adduser}
      >
        Add User
      </Button>
    </div>
  );
}
