import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Product from "../page/Product";
import { useContext, useState ,useRef, useEffect } from "react";
import { Data } from "../page/Product";
import moment from "moment";

export default function CardProduct(props) {

  

  return (
    <div className="flex flex-wrap flex-row p-5 ">
    
        <Card sx={{ maxWidth: 345, margin: 0.2 }} key={props.Product_Id}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              src="../public/gift-voucher-coupon.png"
              alt="gift voucher"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.Product_Name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.Product_Title}
              </Typography>
              
            </CardContent>
          </CardActionArea>
          <CardActions>
            <div className={`flex justify-center w-full  ${props.a - props.b <0 ? "hover:bg-red-900 bg-red-600" : "bg-light-green-300 hover:bg-light-green-600"}`}>
            <Button

            disabled={props.disabledButton}
              size="large"
              color="success"
              onClick={props.ActionClick}
              className="w-full"
            >
             <div className="text-black"> {props.Point}</div>
            </Button>
            </div>
          </CardActions>
        </Card>
      
    </div>
  );
}
