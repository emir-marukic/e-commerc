import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function FilterSearch({ device }) {
  const [searchValue, setSearchValue] = useState("");

  const formattedOptions = device.map((option) => ({
    label: option.model,
    value: option, // You can include the entire option object if needed
  }));

  const filteredDevices = formattedOptions.filter(
    (option) =>
      option.label &&
      option.label.toLowerCase().includes(searchValue?.toLowerCase())
  );

  return (
    <Autocomplete
      id="free-solo-demo"
      freeSolo
      options={filteredDevices}
      getOptionLabel={(option) => option.label}
      value={searchValue}
      onChange={(event, newValue) => setSearchValue(newValue)}
      renderInput={(params) => <TextField {...params} label="Search" />}
    />
  );
}
