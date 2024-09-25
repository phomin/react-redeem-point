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
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


   
  export function LoginCard() {
    const [errorMessage, setErrorMessage] = useState('')
    const [openDialog, setOpenDialog] = useState(false);
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({
      email: '',
      password: '',
    })
    const navigate = useNavigate()
    const [login, setLogin] = useState(false)

    const fatchApi = async ()=>{
      try { 
        const response = await axios.get(`https://6682391b04acc3545a08a832.mockapi.io/Todos`) 
        console.log(response.data)
        setUsers(response.data)
      }catch(error) {
        console.log('error', error.errorMessage)
      }

    }

    useEffect(()=>{
fatchApi()
    },[])


    const handleUser = (e)=> {
      setUser({...user, [e.target.name]: e.target.value})
    }
    
    const handleOpenDialog = ()=>{
        setOpenDialog(!openDialog)
    }
    


    


    const Signin=()=> {
     console.log('user',user)
     console.log('users',users)
  
     users.forEach(item=>{
      if(item.email == user.email && item.password == user.password){
      
        setLogin(true)
        localStorage.setItem('id', item.id)
        localStorage.setItem('name', item.name)
        localStorage.setItem('point', item.point)
        console.log("ooo",item)
        console.log("status",login)
      }

      if (login) {
          
        navigate("/")

      }
     })
    }

    

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-blue-gray-300">
      <Card className="w-96">
        
        <CardBody className="flex flex-col gap-4">
        <Typography variant="h3" color="black">
            Sign In 
          </Typography>
          <Typography  color="gray">Enter your email and password to Sign In.</Typography>
          <Input name="email" label="Email" size="lg" onChange={handleUser} />
          <Input name="password" label="Password" size="lg" type="password" onChange={handleUser} />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth onClick={Signin}>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
              onClick={handleOpenDialog}
            >
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
      </Card>

      <Dialog  //register 
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
                Sign in
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
      </div>
    );
  }