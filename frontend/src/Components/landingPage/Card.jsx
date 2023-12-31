import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function MediaCard({ name, img, price }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{
            height: 240,
            width: 240,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
          component="img"
          image={img}
          title={name}
          alt={name}
          style={{ objectFit: "cover", width: "300px", height: "300px" }}
        />
        <CardContent style={{ height: "150px" }}>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Shop now</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
