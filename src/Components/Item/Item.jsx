import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Item = ({ element }) => {
  return (
    <Card
      sx={{
        width: 345,
        height: 350,
        backgroundColor: "black",
        color: "whitesmoke",
        border: "1px solid black",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px black",
      }}
    >

      <CardMedia
        sx={{ height: 180}}
        image={element.img}
      />

      <CardContent sx={{ height: 80 }} align="center">
        <Typography gutterBottom variant="h5" component="div" align="center" color="lightskyblue" textTransform="uppercase">
          {element.title}
        </Typography>
        <Typography variant="body2">{element.description}</Typography>
        <Typography variant="body" color={"lightskyblue"}>${element.price}</Typography>
      </CardContent>

      <CardActions>
        <Link to={`/itemDetail/${element.id}`}>
          <Button size="small" variant="contained" color="primary">
            VER MÁS
          </Button>
        </Link>
      </CardActions>
      
    </Card>
  );
};

export default Item;
