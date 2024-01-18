import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import joinUs from "../../assets/joinUs.jpg";

const JoinUs = () => {
  return (
    <div style={{ background: "white", height: "510px" }}>
      <Grid container alignItems="center" sx={{ height: "100%" }}>
        <Grid item lg={6}>
          <Stack spacing={10} ml={15}>
            <Typography
              sx={{ color: "green", height: "70px" }}
              variant="h1"
              fontSize={50}
            >
              Join us on our journey
            </Typography>
            <Grid container alignItems="center" gap={15}>
              <Grid item sx={{ width: "200px" }}>
                <TextField
                  id="standard-basic"
                  label="Sign up"
                  variant="standard"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ padding: "8px 20px" }}
                >
                  Join now
                </Button>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
        <Grid item lg={6} sx={{ height: "fit-content" }}>
          <img
            src={joinUs}
            alt="Submit"
            style={{ width: "100%", height: "100% ", overflowY: "hidden" }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default JoinUs;
