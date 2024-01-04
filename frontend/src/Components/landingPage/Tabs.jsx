import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import MediaCard from "./Card";
import { useEffect } from "react";
import { devicesApi } from "../../api/App";
import { Container, CssBaseline, Grid } from "@mui/material";
import "../../styles/Navbar.css";

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
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
          case "samsung":
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

  useEffect(() => {
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

  const handleTabChange = (event, newValue) => {
    const dataName = getTabDataName(newValue);
    fetchData(dataName);
    handleChange(event, newValue);
  };

  const fetchData = async (str) => {
    try {
      const response = await devicesApi.get(`api/${str}`);
      setSamsung(response.data.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={(event, newValue) => {
            handleTabChange(event, newValue);
            event.preventDefault();
          }}
          aria-label="basic tabs example"
          className="tab"
        >
          <Tab label="Samsung" {...a11yProps(0)} />
          <Tab label="iPhone" {...a11yProps(1)} />
          <Tab label="Samsung Smart Watches" {...a11yProps(2)} />
          <Tab label="iPhone Smart Watches" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <CssBaseline />
        <Container maxWidth="lg">
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
