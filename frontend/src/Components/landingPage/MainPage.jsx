// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { Button, CardActionArea, CardActions } from "@mui/material";
import { useState, useEffect } from "react";

function MainPage() {
  const apiUrl = "http://localhost:1337/api/samsungs";
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setPhones(data.data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div></div>
    // <div style={{ display: "flex", flexWrap: "wrap" }}>
    //   {phones.map((item) => (
    //     <Card sx={{ maxWidth: 345 }} key={item.id}>
    //       <CardActionArea>
    //         <CardMedia
    //           component="img"
    //           height="440"
    //           image={item.attributes.img}
    //           alt="green iguana"
    //         />
    //         <CardContent>
    //           <Typography gutterBottom variant="h5" component="div">
    //             <p>{item.attributes.model}</p>
    //           </Typography>
    //           <Typography
    //             variant="body2"
    //             color="text.secondary"
    //             style={{ fontSize: "20px" }}
    //           >
    //             <p>${item.attributes.price}</p>
    //           </Typography>
    //         </CardContent>
    //       </CardActionArea>
    //       <CardActions>
    //         <Button size="small" color="primary">
    //           <p>Sahre</p>
    //         </Button>
    //         <Button size="small" color="primary">
    //           <p>Sahre</p>
    //         </Button>
    //       </CardActions>
    //     </Card>
    //   ))}
    // </div>
  );
}

export default MainPage;
