import React, { useDebugValue, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        backgroundColor: "#00308f",
        color: "white",
        textAlign:"center",
      }}
    >
      <Container>
        <div className="text-center">
          <Typography variant="caption" align="center">
            {/* TechGenzi Proprietary.Copyright &copy; {new Date().getFullYear()}{" "} */}
            {/* TechGenzi Private Limited */}
            Powered by TechGenzi Private Limited
          </Typography>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
