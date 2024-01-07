import { Container, Grid, Typography } from "@mui/material";
import React from "react";

function Content(props) {
  return (
    <Container maxWidth="lg" sx={{ padding: 0 }}>
      <Typography textAlign="center" variant="h2" fontSize={40} mt={20}>
        {props.header}
      </Typography>
      <Grid container m={17} alignItems="center">
        <Grid item xl={5}>
          <Typography variant="h6" fontSize={26}>
            {props.text}
          </Typography>
        </Grid>
        <Grid item xl={1}></Grid>
        <Grid item xs={12} md={6} xl={4}>
          <img src={props.img} style={{ maxWidth: "100%", height: "500px" }} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Content;
