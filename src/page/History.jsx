import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PendingActionsIcon from '@mui/icons-material/PendingActions';


import axios from "axios";

function History() {
  const UserId = localStorage.getItem("id");
  const [Data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const rows = [
    {
      id: 1,
      name: "John Doe",
      OrderNumber: 112454,
      point: 1500,
      date: "03/08/2024",
    },
    {
      id: 1,
      name: "John Doe2",
      OrderNumber: 355697,
      point: 2000,
      date: "04/08/2024",
    },
    {
      id: 1,
      name: "John Doe3",
      OrderNumber: 305694,
      point: 1500,
      date: "05/08/2024",
    },
    {
      id: 1,
      name: "John Doe4",
      OrderNumber: 899568,
      point: 3000,
      date: "06/08/2024",
    },
    {
      id: 1,
      name: "John Doe5",
      OrderNumber: 112558,
      point: 1000,
      date: "07/08/2024",
    },
  ];

  const FatchApi = async () => {
    try {
      const response = await axios.get(
        `https://6682391b04acc3545a08a832.mockapi.io/Todos/${UserId}/cxcxccx`
      );
      setData(response.data);
    } catch (error) {
      console.log("APi error", error);
    }
  };

  useEffect(() => {
    FatchApi();
  }, []);

  console.log("Id", UserId);

  console.log("api", Data);

  return (
    <>
      <div className="bg-gray-300 w-full h-screen pt-[60px] pl-72 ">
      <div className="w-fit flex justify-center p-4 ml-6 mt-4">
          <div className="bg-gray-300 w-full h-full flex items-center">
            <div className=" h-full w-13 flex items-center p-2 bg-[#00A9FF] rounded">
              <PendingActionsIcon sx={{ fontSize: 40 }} color="" />
            </div>
            <p className="ml-3 font-mono  text-2xl ">รายการ</p>
          </div>
        </div>
        {Data.length === 0 ? (
          <div className="p-10">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} size="medium" aria-label="simple table">
                <TableHead >
                  <TableRow className="bg-blue-gray-400">
                    <TableCell align="center"> <p className="text-blue-gray-400"><br></br></p></TableCell>
                  </TableRow>
                </TableHead>

                <TableHead>
                  <TableRow >
                    <TableCell align="center"> NoData</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </div>
        ) : (
          <div className="p-10">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} size="medium" aria-label="simple table">
                <TableHead>
                  <TableRow className="bg-blue-gray-400">
                    <TableCell></TableCell>
                    <TableCell align="left" >Name</TableCell>
                    <TableCell align="right">OrderNumber</TableCell>
                    <TableCell align="right">Point</TableCell>
                    <TableCell align="right">DATE</TableCell>
                  </TableRow>
                </TableHead>
                <TableHead>
                  {Data.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <img
                          className="w-10"
                          src="../public/gift-voucher-coupon.png"
                          alt="gift voucher"
                        ></img>
                      </TableCell>
                      <TableCell align="left">
                        {item.Data_Product.Product_name}
                      </TableCell>
                      <TableCell align="right">
                        #{item.Data_Product.Product_Number}
                      </TableCell>
                      <TableCell align="right">
                        {item.Data_Product.Product_Point}
                      </TableCell>
                      <TableCell align="right">
                        {item.Data_Product.Product_Date}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableHead>
              </Table>
            </TableContainer>
          </div>
        )}
      </div>
    </>
  );
}

export default History;
