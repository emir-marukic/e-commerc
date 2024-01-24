import { IconButton } from "@mui/material";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";

export const AboutIcons = () => {
  return (
    <div style={{ background: "#05705A", height: "70px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "20%",
          margin: "auto",
        }}
      >
        <IconButton variant="plain">
          <a href="https://www.facebook.com/">
            <FacebookOutlinedIcon />
          </a>
        </IconButton>
        <IconButton variant="plain">
          <a href="https://github.com/emir-marukic">
            <GitHubIcon />
          </a>
        </IconButton>
      </div>
    </div>
  );
};
