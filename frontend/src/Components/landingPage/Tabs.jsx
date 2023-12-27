import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import MediaCard from "./Card";
import { useEffect } from "react";
import { devices } from "../../api/App";
import axios from "axios";

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
        <Box sx={{ p: 3 }}>
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
  const [device, setDevice] = useState(null);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/devices?populate=*"
        );
        setDevice(response.data);
        console.log(response.data?.data?.attributes);
      } catch (error) {
        throw error("Error fetching data: ", error);
      }
    };
    fetchingData();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Samsung" {...a11yProps(0)} />
          <Tab label="iPhone" {...a11yProps(1)} />
          <Tab label="Samsuns Smart Watches" {...a11yProps(2)} />
          <Tab label="iPhone Smart Watches" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {/* {samsung &&
          samsung.map((item) => (
            <MediaCard
              key={item.id}
              name={item.attributes.model}
              img={item.attributes.img}
              price={item.attributes.price}
            />
          ))} */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
