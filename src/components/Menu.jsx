import * as React from "react";
import { useContext } from "react";
import { DataUser } from "../page/dashboard";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';

import SendIcon from "@mui/icons-material/Send";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useNavigate } from "react-router-dom";

export default function DrawerBasic() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  return (
    <>
      <div className="bg-red-700">
        <List
          sx={{
            width: "100%",
            maxWidth: 288,
            bgcolor: "#7C00FE",
            height: "100%",
            position: "fixed",
            top: "60px",
          }}
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={()=>navigate('/')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Dashbord" className="text-white "  />
          </ListItemButton>

          <ListItemButton onClick={()=>navigate('/Product')}>
            <ListItemIcon>
              <AddShoppingCartIcon  />
            </ListItemIcon>
            <ListItemText primary="Product" className="text-white"  />
          </ListItemButton>

          <ListItemButton onClick={()=>navigate('/UseProduct')}>
            <ListItemIcon>
              <CardGiftcardRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="UseProduct" className="text-white"  />
          </ListItemButton>

          <ListItemButton onClick={()=>navigate('/history')}>
            <ListItemIcon>
              <PendingActionsIcon />
            </ListItemIcon>
            <ListItemText primary="Order History" className="text-white" />
          </ListItemButton>

          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <ExitToAppIcon/>
            </ListItemIcon>
            <ListItemText
              primary="Logout"
              className="text-white"
              
            />
          </ListItemButton>
        </List>
      </div>
    </>
  );
}
