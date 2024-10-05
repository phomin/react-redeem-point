import React, { useEffect, useState, createContext } from "react";
import HomeIcon from "@mui/icons-material/Home";
import CardHome from "../components/CardHome";
import axios from "axios";
import Navbar from "../components/Navbar";
import DrawerBasic from "../components/Menu";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export const DataUser = createContext();

function dashboard() {
  const UserID = localStorage.getItem("id");
  const UserName = localStorage.getItem("name");
  const UserPoint = localStorage.getItem("point");
  const navigate = useNavigate();
  const [Data, setData] = useState([]);

  const fatApi = async () => {
    try {
      const response = await axios.get(
        `https://6682391b04acc3545a08a832.mockapi.io/Todos/${UserID}/cxcxccx`
      );
      setData(response?.data);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    fatApi();
  }, []);

  console.log("Data", Data);
  let a = 0;
  Data.forEach((val) => {
    console.log(val);
    console.log(val.Data_Product.Product_Use);
    if (!val.Data_Product.Product_Use) {
      a++;
    }
  });
  return (
    <>
      <div className="bg-gray-300 w-full h-screen pt-[60px] pl-72">
        <div className="w-fit flex justify-center p-4 ml-6 mt-4">
          <div className="bg-gray-300 w-full h-full flex items-center">
            <div className=" h-full w-13 flex items-center p-2 bg-[#00A9FF] rounded">
              <HomeIcon sx={{ fontSize: 40 }} color="" />
            </div>
            <div className="ml-3 font-mono  text-2xl ">HOME</div>
          </div>
        </div>

        <div className="flex">
          <CardHome
            title={"Your Point"}
            h1={UserPoint}
            style={
              "rounded mr-6 mt-6 ml-6 w-full bg-gradient-to-r from-[#F4CE14] to-[#FADFA1]"
            }
          />
          <CardHome
            title={"Available coupon"}
            h1={a}
            style={
              "rounded mr-6 mt-6 ml-6 w-full bg-gradient-to-r from-[#98DE] to-[#0766AD]"
            }
          />
          <CardHome
            title={"User"}
            h1={UserName}
            style={
              "rounded mr-6 mt-6 ml-6 w-full bg-gradient-to-r from-[#A1EEBD] to-[#29ADB2]"
            }
          />
        </div>

        <div className="w-ful mr-11 h-96">
          <Card className=" rounded mr-6 h-72 mt-10 ml-6 w-full bg-gradient-to-r from-[#FF6868] to-[#FFEAA7]">
            <CardBody className="ml-6">
              <Typography className="mb-5 text-black flex items-center">
                <img
                  className="w-1/6 mr-28"
                  src="../public/Coupon.png"
                  alt="gift voucher"
                ></img>

                <Button
                  className="flex items-center gap-2 text-sm w-fit h-14 rounded-xl "
                  onClick={() => {
                    navigate("/Product");
                  }}
                >
                  SHOP NOW
                </Button>
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default dashboard;
