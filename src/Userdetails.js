import Typography from "@mui/material/Typography";
import React from "react";
import { useParams } from "react-router";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export function Userdetails({ users }) {
  const history = useHistory();
  const { id } = useParams();
  const user = users[id];
  console.log(user);
  return (
    <div className="user-details">
      <div style={{ color: "white", padding: "10px" }}>
        <img src={user.avatar} alt={user.name} className="pic" />
        <Typography variant="h6">
          <b>FULL NAME:</b>
          {user.fullname}
        </Typography>
        <Typography variant="h6">
          <b>AGE:</b>
          {user.age}
        </Typography>
        <Typography variant="h6">
          <b>ROLE:</b>
          {user.role}
        </Typography>
        <Typography variant="h6">
          <b>BATTING STYLE:</b>
          {user.batting}
        </Typography>
        <Typography variant="h6">
          <b>BOWLING STYLE:</b>
          {user.bowling}
        </Typography>
        <Typography variant="h6">
          <b>JERSEY NO:</b>
          {user.jerseyno}
        </Typography>
        <Typography variant="h6">
          <b>CITY:</b>
          {user.city}
        </Typography>
        <Button
          variant="outlined"
          onClick={() => history.goBack()}
          startIcon={<KeyboardBackspaceIcon />}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
