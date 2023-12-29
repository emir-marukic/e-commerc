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
  const [samsung, setSamsung] = useState(null);
  const [iphone, setIphone] = useState(null);

  useEffect(() => {
    const fetchData = async (str) => {
      try {
        const response = await devicesApi.get(`api/${str}`);
        if (str === "samsung") {
          setSamsung(response.data.data);
        } else if (str === "phones") {
          setIphone(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    // Fetch data for the initially selected tab
    fetchData(getTabDataName(value));
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getTabDataName = (tabIndex) => {
    // Define a mapping between tab index and data names
    const tabDataNames = [
      "samsungs",
      "iphones",
      "samsungWatches",
      "iphoneWatches",
    ];
    return tabDataNames[tabIndex];
  };

  const handleTabChange = (event, newValue) => {
    // Fetch data when a tab is changed
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
          onChange={handleTabChange} // Use handleTabChange for tab changes
          aria-label="basic tabs example"
        >
          <Tab label="Samsung" {...a11yProps(0)} />
          <Tab label="iPhone" {...a11yProps(1)} />
          <Tab label="Samsung Smart Watches" {...a11yProps(2)} />
          <Tab label="iPhone Smart Watches" {...a11yProps(3)} />
        </Tabs>
      </Box>
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
      <CustomTabPanel value={value} index={0}>
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
    </Box>
  );
}
