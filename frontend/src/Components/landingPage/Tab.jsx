import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, CssBaseline, Grid, TextField } from "@mui/material";
import { devicesApi } from "../../api/App";
import "../../styles/styles.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import MediaCard from "./Card";
import FilterSearch from "../Util/FilterSearch";

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
  const [searchValue, setSearchValue] = useState("");

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

    const currentTabData = getTabDataName(value);
    fetchData(currentTabData);
  }, [value]);

  const tabContainerRef = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSearchValue("");
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
    <Container maxWidth="xl">
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          background: "#7a7d7d",
          borderRadius: "20px",
        }}
        id="tabContainer"
        ref={tabContainerRef}
        data-scroll-to="tabContainer"
      >
        <Box sx={{ display: "flex", justifyContent: "center", paddingTop: 10 }}>
          <Tabs
            value={value}
            onChange={(event, newValue) => {
              handleChange(event, newValue);
              event.preventDefault();
            }}
            aria-label="basic tabs example"
            className="tab"
            defaultValue={0}
            sx={{ bgcolor: "transparent" }}
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
        <div style={{ marginTop: 40 }}>
          <TextField
            sx={{ background: "white", width: "500px", borderRadius: "20px" }}
            label="Search"
            variant="filled"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
        </div>
        <CustomTabPanel value={value} index={0}>
          <CssBaseline />
          <Container maxWidth="xl">
            <Grid container spacing={10}>
              {samsung &&
                samsung
                  .filter((item) =>
                    item.attributes.model
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                  )
                  .map((item) => (
                    <MediaCard
                      key={item.id}
                      name={item.attributes.model}
                      img={item.attributes.img}
                      price={"$" + item.attributes.price}
                      type="samsungs"
                      id={item.id}
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
                iphone
                  .filter((item) =>
                    item.attributes.model
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                  )
                  .map((item) => (
                    <MediaCard
                      key={item.id}
                      name={item.attributes.model}
                      img={item.attributes.img}
                      price={"$" + item.attributes.price}
                      type="phones"
                      id={item.id}
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
                samsungWatch
                  .filter((item) =>
                    item.attributes.model
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                  )
                  .map((item) => (
                    <MediaCard
                      key={item.id}
                      name={item.attributes.model}
                      img={item.attributes.img}
                      price={"$" + item.attributes.price}
                      type="samsung-smart-watches"
                      id={item.id}
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
                iphoneWatch
                  .filter((item) =>
                    item.attributes.model
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                  )
                  .map((item) => (
                    <MediaCard
                      key={item.id}
                      name={item.attributes.model}
                      img={item.attributes.img}
                      price={"$" + item.attributes.price}
                      type="iphone-watches"
                      id={item.id}
                    />
                  ))}
            </Grid>
          </Container>
        </CustomTabPanel>
      </Box>
    </Container>
  );
}
