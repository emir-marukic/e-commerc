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
import "../../styles/Navbar.css";
import { Grid } from "@mui/material";
// import { devicesApi } from "../../api/App";

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
        <Box sx={{ p: 3 }} className="card">
          <Typography>{children}</Typography>
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
        if (str === "samsung") {
          setSamsung(response.data.data);
        } else if (str === "phones") {
          setIphone(response.data.data);
        } else if (str === "samsung-smart-watches") {
          setSamsungWatch(response.data.data);
        } else if (str === "iphone-watches") {
          setIphoneWatch(response.data.data);
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
    <Box sx={{ width: "100%", mx: "auto" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }} className="tabs">
        <Tabs
          value={value}
          onChange={handleTabChange}
          aria-label="basic tabs example"
        >
          <Tab label="Samsung" {...a11yProps(0)} />
          <Tab label="iPhone" {...a11yProps(1)} />
          <Tab label="Samsung Smart Watches" {...a11yProps(2)} />
          <Tab label="iPhone Smart Watches" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <CustomTabPanel value={value} index={0}>
            {samsung &&
              samsung.map((item) => (
                <MediaCard
                  key={item.id}
                  name={item.attributes.model}
                  img={item.attributes.img}
                  price={item.attributes.price}
                />
              ))}
          </CustomTabPanel>
        </Grid>
      </Grid>
      <CustomTabPanel value={value} index={1}>
        {iphone &&
          iphone.map((item) => (
            <MediaCard
              key={item.id}
              name={item.attributes.model}
              img={item.attributes.img}
              price={item.attributes.price}
            />
          ))}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {samsungWatch &&
          samsungWatch.map((item) => (
            <MediaCard
              key={item.id}
              name={item.attributes.model}
              img={item.attributes.img}
              price={item.attributes.price}
            />
          ))}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        {iphoneWatch &&
          iphoneWatch.map((item) => (
            <MediaCard
              key={item.id}
              name={item.attributes.model}
              img={item.attributes.img}
              price={item.attributes.price}
            />
          ))}
      </CustomTabPanel>
    </Box>
  );
}
