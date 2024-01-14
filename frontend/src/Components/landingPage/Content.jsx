import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import styles from "../../styles/shopStyle.module.css";

function Content(props) {
  const direction = props.classN === "reverse" ? "row-reverse" : "row";
  return (
    <Container maxWidth="lg">
      <Typography textAlign="center" variant="h2" fontSize={40} mt={20}>
        {props.header}
      </Typography>
      <Grid
        container
        alignItems="center"
        mt={20}
        mb={20}
        className={styles[props.classN]}
      >
        <Stack spacing={20} direction={direction} alignItems="center">
          <Grid item xs={7}>
            <Typography variant="h6" fontSize={26}>
              {props.text}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <img
              src={props.img}
              style={{ maxWidth: "100%", height: "400px" }}
              alt="Description"
            />
          </Grid>
        </Stack>
      </Grid>
    </Container>
  );
}

export default Content;
