import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function MediaCard({ name, img, price, type, id }) {
  // const handleButtonClick = () => {
  //   window.location.href = `/shop/${type}/${id}`;
  // };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardMedia
          sx={{
            height: "fit-content",
            width: "100%",
            padding: "20px",
            objectFit: "cover",
          }}
          component="img"
          image={img}
          title={name}
          alt={name}
          style={{}}
        />

        <CardContent style={{ height: "150px", color: "black" }}>
          <Typography variant="h5" component="div" style={{ color: "black" }}>
            {name}
          </Typography>
          <Typography variant="body2" color="text.primary" fontSize={25}>
            {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="medium">
            <Link to={`/shop/${type}/${id}`} className="link">
              Shop now
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
