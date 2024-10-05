import {
  Card,
  CardHeader,
  Dialog,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function LoginCard() {
  localStorage.setItem("token", false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [login, setLogin] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const fatchApi = async () => {
    try {
      const response = await axios.get(
        `https://6682391b04acc3545a08a832.mockapi.io/Todos`
      );
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.log("error", error.errorMessage);
    }
  };

  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleOpenDialog = () => {
    setOpenDialog(!openDialog);
  };

  const SignIn = () => {
    let index = users.findIndex(
      (item) => user.email == item.email && user.password == item.password
    );
    console.log(index);
    if (index != -1) {
      localStorage.setItem("token", true);
      localStorage.setItem("id", users[index].id);
      localStorage.setItem("name", users[index].name);
      localStorage.setItem("point", users[index].point);
      return setLogin(true);
    } else {
      setErrorMessage(true);
      return setLogin(false);
    }
  };

  useEffect(() => {
    fatchApi();
  }, []);

  useEffect(() => {
    if (login) {
      navigate("/");
    }
  }, [login]);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-blue-gray-600">
      <Card className="w-96">
        <CardBody className="flex flex-col gap-4">
          <Typography variant="h3" color="black">
            Sign In
          </Typography>
          <Typography color="gray">
            Enter your email and password to Sign In.
          </Typography>
          <Input name="email" label="Email" size="lg" onChange={handleUser} />
          <Input
            name="password"
            label="Password"
            size="lg"
            type="password"
            onChange={handleUser}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <div className=" h-5 m-2 text-center font-bold text-red-600">
            {errorMessage ? <div>login failed</div> : <></>}
          </div>
          <Button variant="gradient" onClick={SignIn}>
            Sign In
          </Button>
        </CardFooter>
      </Card>

      <Dialog //register
        size="xs"
        open={openDialog}
        handler={handleOpenDialog}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Sign Up
            </Typography>

            <Typography className="-mb-2" variant="h6">
              name
            </Typography>
            <Input label="Name" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Your Email
            </Typography>
            <Input label="Email" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Your Password
            </Typography>
            <Input label="Password" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Your Password 2
            </Typography>
            <Input label="Password" size="lg" />
            <div className="-ml-2.5 -mt-3">
              <Checkbox label="--" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpenDialog} fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
              กลับไปยังหน้าล๊อกอิน
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={handleOpenDialog}
              >
                Sign inx
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </div>
  );
}
