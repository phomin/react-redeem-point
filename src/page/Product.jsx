import React, { createContext, useState, useEffect } from "react";
import CardProduct from "../components/Card";
import moment from "moment";
import axios from "axios";
import { Button } from "@material-tailwind/react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Alert } from "@material-tailwind/react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Fullscreen } from "@mui/icons-material";
import { green } from "@mui/material/colors";

export const Data = createContext();

const start = Date.now();
const dateNow = moment(start).format("DD/MM/YYYY HH:mm:ss");
const UserID = localStorage.getItem("id");

const getRandomSixDigitNumber = () => {
  return Math.floor(Math.random() * 900000) + 100000;
};

const getNewPoint = (a, b) => {
  return a - b;
};

const getRandomLetter = () => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return letters[Math.floor(Math.random() * letters.length)];
};

// Utility function to generate a random digit (0-9)
const getRandomDigit = () => Math.floor(Math.random() * 10);

function Product() {
  const [isOpenDialog, setDialog] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [Pin, setPin] = useState("");
  const [isDisabled, setDisabled] = useState(false);
  const [ProductNumber, SetProductNumber] = useState(0);
  const [User, SetUser] = useState({});
  const [NewPoint, setPoint] = useState(0);
  const [Data_Product, setData_Product] = useState(null);
  const Product = [
    {
      Product_ID: 1,
      Product_name: "Coupon A",
      Product_Title: "voucher  10% discount",
      Product_Point: 1000,
    },
    {
      Product_ID: 2,
      Product_name: "Coupon B",
      Product_Title: "voucher  15% discount",
      Product_Point: 1500,
    },
    {
      Product_ID: 3,
      Product_name: "Coupon C",
      Product_Title: "voucher  20% discount",
      Product_Point: 2000,
    },
    {
      Product_ID: 4,
      Product_name: "Coupon D",
      Product_Title: "voucher  30% discount",
      Product_Point: 3000,
    },
    {
      Product_ID: 5,
      Product_name: "Coupon AB",
      Product_Title: "voucher  40% discount",
      Product_Point: 4000,
    },
    {
      Product_ID: 6,
      Product_name: "Coupon AC",
      Product_Title: "voucher  50% discount",
      Product_Point: 5000,
    },
    {
      Product_ID: 7,
      Product_name: "Coupon BB",
      Product_Title: "voucher  100% discount",
      Product_Point: 10000,
    },
    {
      Product_ID: 8,
      Product_name: "Super Coupon",
      Product_Title: "gift voucher",
      Product_Point: 100000,
    },
  ];

  const OpenDialog = () => {
    setDialog(true);
  };

  const DialogClose = () => {
    setDialog(false);
  };

  const generatePin = () => {
    const digits = Array.from({ length: 2 }, getRandomDigit);
    const letters = Array.from({ length: 4 }, getRandomLetter);

    // Combine digits and letters, then shuffle
    const pinArray = [...digits, ...letters];
    for (let i = pinArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pinArray[i], pinArray[j]] = [pinArray[j], pinArray[i]]; // Swap elements
    }

    return pinArray.join("");
  };

  const fatchApi = async () => {
    try {
      const response = await axios.get(
        `https://6682391b04acc3545a08a832.mockapi.io/Todos/${UserID}`
      );
      SetUser(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const PutApi = async () => {
    try {
      await axios.put(
        `https://6682391b04acc3545a08a832.mockapi.io/Todos/${UserID}`,
        { point: NewPoint }
      );
      setTimeout(() => {
        setShowAlert(true);
      }, 500);
      setInterval(() => {
        const timer2 = setShowAlert(false);
        clearTimeout(timer2);
      }, 5000);
      setTimeout(() => {
        localStorage.setItem("point", NewPoint);
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.log("error", error);
    }
  };

  const HandleClick = async () => {
    if (Data_Product != null && NewPoint != 0) {
      await axios.post(
        `https://6682391b04acc3545a08a832.mockapi.io/Todos/${UserID}/cxcxccx`,
        { Data_Product }
      );
      PutApi();
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    fatchApi();
  }, []);

  useEffect(() => {
    setPin(generatePin());
    SetProductNumber(getRandomSixDigitNumber());
    console.log("Runing...");
  }, [Data_Product]);

  console.log("test", Data_Product);
  return (
    <>
      <div className="bg-gray-300 w-full h-fit pt-[60px] pl-72 ">
        <div className="w-fit flex justify-center p-4 ml-6 mt-4">
          <div className="bg-gray-300 w-full h-full flex items-center">
            <div className=" h-full w-13 flex items-center p-2 bg-[#00A9FF] rounded">
              <AddShoppingCartIcon sx={{ fontSize: 40 }} color="" />
            </div>
            <p className="ml-3 font-mono  text-2xl ">PRODUCT</p>
          </div>
        </div>
        {showAlert ? (
          <div className="flex w-full flex-col gap-2 z-0">
            <Alert color="green">An error alert for showing message.</Alert>
          </div>
        ) : null}
        <div className="grid-container flex flex-wrap flex-row p-5">
          {Product.map((item) => (
            <CardProduct
              a={User?.point}
              b={item.Product_Point}
              disabledButton={
                User?.point - item.Product_Point < 0 ? true : false
              }
              key={item.Product_ID}
              Product_Name={item.Product_name}
              Product_Title={item.Product_Title}
              Point={item.Product_Point}
              ActionClick={() => {
                setPoint(() => getNewPoint(User.point, item.Product_Point));
                console.log("click", NewPoint);
                setData_Product(item);
                setData_Product((add) => ({
                  ...add,
                  Product_Date: dateNow,
                  Product_Number: ProductNumber,
                  Product_Pin: Pin,
                  Product_Use: false,
                }));

                OpenDialog();
              }}
            />
          ))}
        </div>
        <Dialog
          open={isOpenDialog}
          onClose={DialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {" Would you like to use your points ?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" className="flex justify-center">
              <p className="text-2xl text-black mr-2">- {Data_Product?.Product_Point}</p> 
              <img
                className="w-5"
                src="../public/coin.png"
                alt="gift voucher"
              ></img>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button className="rounded-full w-28 bg-red-600 text-black   " onClick={DialogClose}>cancel</Button>
            <Button
            className="rounded-full w-28 bg-green-700 "
              onClick={() => {
                HandleClick();
                DialogClose();
              }}
            >
              confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default Product;
