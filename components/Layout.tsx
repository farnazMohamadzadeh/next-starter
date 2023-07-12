import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Nav from "./ui/nav";
const THEME = createTheme({
  typography: {
    fontFamily: "IranSans Regular",
    fontSize: 12,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={THEME}>
      <Nav />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
