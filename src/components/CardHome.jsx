import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

  import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
  import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function CardHome(props) {
  return (
    <>
<Card className={props.style}>
      <CardBody className='ml-6'>
        <Typography className='mb-5 text-white text-base'>
          {props.title}
        </Typography>
       
        <Typography variant="h3" color="blue-gray" className="mb-10 text-white">
          {props.h1}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button size="sm" variant="text" className="flex items-center gap-2 text-sm text-white"><ArrowRightAltIcon/></Button>
      </CardFooter>
    </Card>
    </>
  )
}

export default CardHome