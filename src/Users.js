import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import {useHistory} from "react-router";

export function Users({
  name,
  avatar,
  role,
  jerseyno,
  editButton,
  deleteButton,
  id,
}) {
  const history = useHistory();
  return (
    <Card sx={{ maxWidth: 295, alignItems: "flex-start" }}>
      <CardMedia component="img" height={350} image={avatar} alt={name} />
      <CardActions className="details">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            sx={{ textTransform: "uppercase", fontWeight: "600" }}
          >
            {name}
          </Typography>
          <IconButton onClick={() => history.push("/users/" + id)}>
            <InfoIcon />
          </IconButton>
        </div>
        
      </CardActions>
      <Typography variant="h6">
        <b>ROLE:</b>
        {role}
      </Typography>
      <Typography variant="h6">
        <b>JERSY_NO:</b>
        {jerseyno}
      </Typography>
      <div className="btn">
        {editButton}
        {deleteButton}
      </div>
    </Card>
  );
}
