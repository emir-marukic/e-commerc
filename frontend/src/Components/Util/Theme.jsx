import { ThemeProvider, createTheme } from "@mui/material";

export const Theme = ({ children }) => {
  const theme = createTheme({
    typography: {
      fontFamily: "Open Sans",
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  );
};
