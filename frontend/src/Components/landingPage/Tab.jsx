import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, CssBaseline, Grid } from "@mui/material";
<<<<<<< HEAD:frontend/src/Components/landingPage/Tabs.jsx

import "../../styles/Navbar.css";
=======
import MediaCard from "./Card";
import { devicesApi } from "../../api/App";
import "../../styles/styles.css";
import { useState } from "react";
import { useEffect } from "react";
>>>>>>> 0b7b06096f747e3d507b8dd40cb20fff9e4a77e7:frontend/src/Components/landingPage/Tab.jsx

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ marginTop: 10 }}>
          {children === null || children.length === 0 ? (
            <Typography component="div">Loading...</Typography>
          ) : (
            <Typography component="div">{children}</Typography>
          )}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function TabsSegmentedControls() {
  const [value, setValue] = React.useState(0);
  const [samsung, setSamsung] = useState(null);
  const [iphone, setIphone] = useState(null);
  const [samsungWatch, setSamsungWatch] = useState(null);
  const [iphoneWatch, setIphoneWatch] = useState(null);

  useEffect(() => {
    const fetchData = async (str) => {
      try {
        const response = await devicesApi.get(`api/${str}`);
        switch (str) {
          case "samsungs":
            setSamsung(response.data.data);
            break;
          case "phones":
            setIphone(response.data.data);
            break;
          case "samsung-smart-watches":
            setSamsungWatch(response.data.data);
            break;
          case "iphone-watches":
            setIphoneWatch(response.data.data);
            break;
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData(getTabDataName(value));
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getTabDataName = (tabIndex) => {
    const tabDataNames = [
      "samsungs",
      "phones",
      "samsung-smart-watches",
      "iphone-watches",
    ];
    return tabDataNames[tabIndex];
  };

  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Tabs
          value={value}
          onChange={(event, newValue) => {
            handleChange(event, newValue);
            event.preventDefault();
          }}
<<<<<<< HEAD:frontend/src/Components/landingPage/Tabs.jsx
          aria-label="basic tabs example"
          className="tab"
=======
          aria-label="tabs"
          defaultValue={0}
          sx={{ bgcolor: "transparent" }}
>>>>>>> 0b7b06096f747e3d507b8dd40cb20fff9e4a77e7:frontend/src/Components/landingPage/Tab.jsx
        >
          <TabList
            disableUnderline
            sx={{
              p: 0.5,
              gap: 0.5,
              borderRadius: "xl",
              bgcolor: "background.level1",
              [`& .${tabClasses.root}[aria-selected="true"]`]: {
                boxShadow: "sm",
                bgcolor: "background.surface",
              },
            }}
          >
            <Tab disableIndicator>Samsung</Tab>
            <Tab disableIndicator>iPhone</Tab>
            <Tab disableIndicator>Samsung Smart Watch</Tab>
            <Tab disableIndicator>iPhone Smart Watch</Tab>
          </TabList>
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <CssBaseline />
        <Container maxWidth="xl">
          <Grid container spacing={10}>
            {samsung &&
              samsung.map((item) => (
                <MediaCard
                  key={item.id}
                  name={item.attributes.model}
                  img={item.attributes.img}
                  price={"$" + item.attributes.price}
                />
              ))}
          </Grid>
        </Container>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <CssBaseline />
        <Container maxWidth="xl">
          <Grid container spacing={10}>
            {iphone &&
              iphone.map((item) => (
                <MediaCard
                  key={item.id}
                  name={item.attributes.model}
                  img={item.attributes.img}
                  price={"$" + item.attributes.price}
                />
              ))}
          </Grid>
        </Container>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <CssBaseline />
        <Container maxWidth="xl">
          <Grid container spacing={10}>
            {samsungWatch &&
              samsungWatch.map((item) => (
                <MediaCard
                  key={item.id}
                  name={item.attributes.model}
                  img={item.attributes.img}
                  price={"$" + item.attributes.price}
                />
              ))}
          </Grid>
        </Container>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <CssBaseline />
        <Container maxWidth="xl">
          <Grid container spacing={10}>
            {iphoneWatch &&
              iphoneWatch.map((item) => (
                <MediaCard
                  key={item.id}
                  name={item.attributes.model}
                  img={item.attributes.img}
                  price={"$" + item.attributes.price}
                />
              ))}
          </Grid>
        </Container>
      </CustomTabPanel>
    </Box>
  );
}
