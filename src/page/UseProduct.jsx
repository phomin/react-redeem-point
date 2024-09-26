import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import { Button } from "@material-tailwind/react";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';


import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

import moment from "moment";

function UseProduct() {
  const UserId = localStorage.getItem("id");

  const [Data, setData] = useState([]);

  const [open, setOpen] = useState(false);
  const [isShowCode, setShowCode] = useState(true);

  const [ProductCode, SetProductCode] = useState({
    id: "",
    TodoId: "",
    Data_Product: {
      Product_ID: 0,
      Product_name: "",
      Product_Title: "",
      Product_Point: 1500,
      Product_Date: "",
      Product_Number: 0,
      Product_Pin: "",
      Product_Use: Boolean,
    },
  });

  const [isLoading, setLoading] = useState(false);

  const FatchApi = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://6682391b04acc3545a08a832.mockapi.io/Todos/${UserId}/cxcxccx`
      );
      setData(response.data);
      if (response) {
        setLoading(false);
      }
    } catch (error) {
      console.log("API error", error);
    }
  };

  const PutApi = async () => {
    try {
      await axios.put(
        `https://6682391b04acc3545a08a832.mockapi.io/Todos/${UserId}/cxcxccx/${ProductCode.id}`,
        {
          Data_Product: {
            Product_ID: ProductCode.Data_Product.Product_ID,
            Product_name: ProductCode.Data_Product.Product_name,
            Product_Title: ProductCode.Data_Product.Product_Title,
            Product_Point: ProductCode.Data_Product.Product_Point,
            Product_Date: ProductCode.Data_Product.Product_Date,
            Product_Number: ProductCode.Data_Product.Product_Number,
            Product_Pin: ProductCode.Data_Product.Product_Pin,
            Product_Use: true,
          },
        }
      );
      alert(`Successfully`);
    } catch (error) {
      console.log("Put error", error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    FatchApi();
  }, []);

  console.log("test", Data);
  console.log("test2", ProductCode);

  return (
    <>
      <div className="bg-gray-300 w-full h-screen pt-[60px] pl-72 ">
      <div className="w-fit flex justify-center p-4 ml-6 mt-4">
          <div className="bg-gray-300 w-full h-full flex items-center">
            <div className=" h-full w-13 flex items-center p-2 bg-[#00A9FF] rounded">
              <CardGiftcardRoundedIcon sx={{ fontSize: 40 }} color="" />
            </div>
            <p className="ml-3 font-mono  text-2xl ">Use</p>
          </div>
        </div>
        {isLoading && (
          <div className="flex justify-center items-center min-h-screen">
            <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        )}
        {!isLoading && (
          <div>
            {Data.length === 0 ? (
              <div className="flex text-center text-2xl ">ไม่มีคำสั่งซื้อ</div>
            ) : (
              <div className="  flex justify-center  p-10 bg-gray-300">
                <div>
                  {Data.map((item) => (
                    <Card
                      sx={{ width: 800, height: 200 }}
                      className="flex  mt-3"
                      key={item.id}
                    >
                      <img
                        className="w-100"
                        src="../public/gift-voucher-coupon.png"
                        alt="gift voucher"
                      ></img>
                      <CardActionArea className="">
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            text 1 {item.Data_Product.Product_name}
                          </Typography>
                          <br></br>
                          <Typography variant="h5" sx={{ color: "" }}>
                            text 2 {item.Data_Product.Product_Date}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        {item.Data_Product.Product_Use ? (
                          <Button
                            disabled={item.Data_Product.Product_Use}
                            className="bg-red-900 w-24 h-screen"
                          >
                            Used
                          </Button>
                        ) : (
                          <Button
                            className="bg-light-green-600 hover:bg-light-green-700 w-24 h-screen"
                            onClick={() => {
                              SetProductCode(item), handleClickOpen();
                            }}
                          >
                            Show Code
                          </Button>
                        )}
                      </CardActions>
                    </Card>
                  ))}
                </div>

                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Click to open code"}
                  </DialogTitle>

                  {isShowCode ? ( 
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        <Button
                          className="w-full bg-blue-gray-700"
                          variant="contained"
                          color="secondary"
                          onClick={() => {
                            setShowCode(false);
                          }}
                        >
                          Click{" "}
                        </Button>
                      </DialogContentText>
                    </DialogContent>
                  ) : (
                    <DialogContent>
                      {" "}
                      <DialogContentText id="alert-dialog-description">
                        <Button
                          className="w-full bg-blue-gray-400 text-black"
                          
                          
                        >
                          {ProductCode.Data_Product.Product_Pin}
                        </Button>
                      </DialogContentText>
                    </DialogContent>
                  )}

                  <DialogActions>
                    <Button
                    className="rounded-full w-28 bg-red-600 text-black   "
                      onClick={() => {
                        setShowCode(true), handleClose();
                      }}
                    >
                      cancel
                    </Button>
                    <Button
                    className="rounded-full w-28 bg-green-700 " onClick={PutApi} >
                    confirm
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default UseProduct;
