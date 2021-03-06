import "./App.css";
import React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";
import Typography from "@mui/material/Typography";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { Userlist } from "./Userlist";
import { Adduser } from "./Adduser";
import { Userdetails } from "./Userdetails";
import { Edituser } from "./Edituser";

export default function App() {
  const history = useHistory();

  const cricketlist = [
    {
      name: "Sachin",
      avatar: "https://pbs.twimg.com/media/DOwBwNjUIAAIFBP.jpg",
      fullname: "Sachin Ramesh Tendulkar",
      city: "Bombay",
      role: "Batsman",
      batting: "Right-handed",
      bowling: " leg break",
      age: "48",
      jerseyno: "10",
    },
    {
      name: "M.S.Dhoni",
      avatar:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bce724d7-62ca-4268-9b0c-07d94a8e742e/dcgfr1i-7b6864c3-e017-4fcb-bd54-70947a841e82.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjZTcyNGQ3LTYyY2EtNDI2OC05YjBjLTA3ZDk0YThlNzQyZVwvZGNnZnIxaS03YjY4NjRjMy1lMDE3LTRmY2ItYmQ1NC03MDk0N2E4NDFlODIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Fwob8IOXnxi501OK2Oo56IGyzdbdVEQ4peW6cEAAkS4",
      fullname: "Mahendra Singh Dhoni",
      city: " Ranchi",
      role: "Wicketkeeper",
      batting: "Right-handed",
      bowling: "No",
      age: "40",
      jerseyno: "7",
    },
    {
      name: "Kholi",
      avatar:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/c26f8052460097.5912cf7f4f020.jpg",
      fullname: "Virat Kohli",
      city: "New Delhi",
      role: "Batsman",
      batting: "Right-handed",
      bowling: "Medium Bowler",
      age: "33",
      jerseyno: "18",
    },
    {
      name: "Jadeja",
      avatar:
        "https://cdn.sharechat.com/ravindrajadeja_1a7905cd_1599354518192_cmprsd_40.jpg",
      fullname: "Ravindra Jadeja",
      city: "Navagam",
      role: "All-Rounder",
      batting: "Left-Handed ",
      bowling: "Left-Arm Leg Spin ",
      age: "32",
      jerseyno: "8",
    },
    {
      name: "KL Rahul",
      avatar:
        "https://i.pinimg.com/originals/e4/03/fb/e403fbdfc5dc60af6d01991a41269211.jpg",
      fullname: "Kannur Lokesh Rahul",
      city: " Bengaluru",
      role: "Wicketkeeper",
      batting: "Right-Handed",
      bowling: "No",
      age: "29",
      jerseyno: "1",
    },
    {
      name: "Smith",
      avatar:
        "https://bsmedia.business-standard.com/_media/bs/img/topic-profile/profile-images/thumb/463_463/1559745630.png",
      fullname: "Steven Peter Devereux Smith",
      city: " Sydney",
      role: "Batsman",
      batting: "Right-Handed",
      bowling: "Right-Arm Leg Spin",
      age: "32",
      jerseyno: "49",
    },
    {
      name: "Williamson",
      avatar:
        "https://bsmedia.business-standard.com/_media/bs/img/topic-profile/profile-images/thumb/463_463/1559744970.png",
      fullname: "Kane Stuart Williamson ",
      city: " Tauranga, New Zealand",
      role: "Batsman",
      batting: "Right-Handed",
      bowling: "Right-Arm Off Spin ",
      age: "31",
      jerseyno: "22",
    },
    {
      name: "DJ Bravo",
      avatar:
        "https://www.cric-life.com/wp-content/uploads/2020/11/dwayne-bravo.jpeg",
      fullname: "Dwayne John Bravo",
      city: " Santa Cruz, Trinidad and Tobago",
      role: "All-Rounder",
      batting: "Right-Handed",
      bowling: "Right-Arm Medium",
      age: "38",
      jerseyno: "47",
    },
  ];
  const [users, setusers] = useState(cricketlist);
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar variant="dense">
          <Button
            variant="text"
            color="inherit"
            onClick={() => history.push("/")}
          >
            Home
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => history.push("/users")}
          >
            Userlist
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => history.push("/Adduser")}
          >
            Adduser
          </Button>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/users/:id">
          <Userdetails users={users} />
        </Route>
        <Route exact path="/users/edit/:id">
          <Edituser users={users} setusers={setusers} />
        </Route>
        <Route exact path="/users">
          <Userlist users={users} setusers={setusers} />
        </Route>

        <Route exact path="/Adduser">
          <Adduser users={users} setusers={setusers} />
        </Route>
        <Route exact path="**">
          <Notfound />
        </Route>
      </Switch>
    </div>
  );
}
function Home() {
  return (
    <div className="home">
      <Typography
        sx={{ fontFamily: "Comforter", fontSize: "200px" }}
        variant="h1"
      >
        User List
      </Typography>
    </div>
  );
}

function Notfound() {
  const history = useHistory();
  return (
    <div className="notfound">
      <img src="https://c.tenor.com/vYTwUEafhogAAAAC/404.gif" alt="Notfound" />
      <Typography variant="h1">404 Not Found</Typography>
      <Button
        variant="outlined"
        onClick={() => history.goBack()}
        startIcon={<KeyboardArrowLeft />}
      >
        Back
      </Button>
    </div>
  );
}
