const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/api/all-data", async (req, res) => {
  try {
    // Fetch data from the existing endpoints
    const iphoneData = await axios.get("http://localhost:1337/api/phones");
    const samsungData = await axios.get("http://localhost:1337/api/samsungs");
    const iphoneWatchData = await axios.get(
      "http://localhost:1337/api/iphone-watches"
    );
    const samsungWatchData = await axios.get(
      "http://localhost:1337/api/samsung-smart-watches"
    );

    // Combine the data
    const combinedData = {
      iphoneData: iphoneData.data,
      samsungData: samsungData.data.data,
      iphoneWatchData: iphoneWatchData.data,
      samsungWatchData: samsungWatchData.data,
    };

    // Send the combined data as the response
    res.json(combinedData);
  } catch (error) {
    console.error("Error fetching data: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
