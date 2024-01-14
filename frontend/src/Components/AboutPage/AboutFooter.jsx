import {
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";

const AboutFooter = () => {
  return (
    <div style={{ background: "#05705A", height: "400px" }}>
      <Container>
        <Grid container alignItems="center">
          <Grid mt={20} width={"60%"} xl={6}>
            <Stack spacing={5}>
              <Typography variant="h3">Meet the Team</Typography>
              <Typography variant="h6">
                Get to know the talented individuals who make SyncSphere a hub
                of creativity and innovation.
              </Typography>
            </Stack>
          </Grid>
          <Grid
            xl={6}
            mt={30}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Link to="/">
              <Button variant="primary">
                <span style={{ marginRight: "20px" }}>Go to main page</span>{" "}
                <EastIcon />
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutFooter;
