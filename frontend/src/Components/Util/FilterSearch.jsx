import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function FilterSearch({ device }) {
  return (
    <Stack spacing={2} sx={{ width: 300, background: "white" }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={device.map((option) => option.model)}
        renderInput={(params) => <TextField {...params} label="freeSolo" />}
      />
    </Stack>
  );
}
