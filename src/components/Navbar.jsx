import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@material-tailwind/react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
  const UserPoint = localStorage.getItem("point");
  const UserName = localStorage.getItem("name");
  console.log("point", UserPoint);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar className="bg-[#7C00FE]">
            <Typography
              variant="h6"
              sx={{ flexGrow: 1 }}
              className="flex justify-start"
            >
              React
            </Typography>

            <div className="flex items-center mr-4 ">
              <AccountCircleIcon sx={{ fontSize: 40 }} />
              <Typography variant="h6">{UserName}
                </Typography>
            </div>
            <Button
              className="rounded-full text-black bg-white  flex max-h-11  text-base items-center"
              color="yellow"
              variant="outlined"
            >
              <div className="mr-2">{UserPoint}</div>
              <img
                className="w-5"
                src="../public/coin.png"
                alt="gift voucher"
              ></img>
            </Button>
            
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
