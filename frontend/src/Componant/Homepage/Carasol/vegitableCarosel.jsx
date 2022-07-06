import { Box, Button, useToast } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carosel.css";
import { FaCartPlus } from "react-icons/fa";

export const VegitableCarasol = () => {
    const toast = useToast();
  const vegetables= [
    {
        "image": "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VBEE12.png",
        "name": "Beetroot",
        "quantity": "500 g",
        "price": "16"
    },
    {
        "image": "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/BONI11.png",
        "name": "Onion",
        "quantity": "1 kg",
        "price": "15"
    },
    {
        "image": "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/101/original/data?1612451098",
        "name": "Pumpkin Green",
        "quantity": "500 g",
        "price": "15"
    },
    {
        "image": "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VSWE12.png",
        "name": "Sweet Potato",
        "quantity": "500 g",
        "price": "40"
    },
    {
        "image": "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VSUR12.png",
        "name": "Yam (Suran / Elephant Foot)",
        "quantity": "500 g",
        "price": "35"
    },
    {
        "image": "https://images.fraazo.com/fraazo-master/EMUS2.png/tr:w-256,h-256",
        "name": "Mushrooms Button",
        "quantity": "1 Unit",
        "price": "39"
    },
    {
        "image": "https://images.fraazo.com/fraazo-master/EBAS11.png/tr:w-256,h-256",
        "name": "Basil Italian",
        "quantity": "50 g",
        "price": "9"
    },
    {
        "image": "https://images.fraazo.com/fraazo-prod/products/product_images/000/000/387/original/data/tr:w-256,h-256",
        "name": "Capsicum Yellow / Bell Pepper",
        "quantity": "2 Pcs (250-350g)",
        "price": "109"
    },
    {
        "image": "https://images.fraazo.com/fraazo-prod/products/product_images/000/000/386/original/data/tr:w-256,h-256",
        "name": "Capsicum Red",
        "quantity": "2 Pcs",
        "price": "109"
    },
    {
        "image": "https://images.fraazo.com/fraazo-master/EZUC12.png/tr:w-256,h-256",
        "name": "Zucchini Green",
        "quantity": "200-300 gm/pc",
        "price": "59"
    },
    {
        "image": "https://images.fraazo.com/fraazo-master/ELET22.png/tr:w-256,h-256",
        "name": "Lettuce Iceberg",
        "quantity": "200-300 gm",
        "price": "109"
    },
    {
        "image": "https://images.fraazo.com/fraazo-master/EBRO12.png/tr:w-256,h-256",
        "name": "Broccoli",
        "quantity": "450-550 gm",
        "price": "199"
    },
    {
        "image": "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VCHI22.png",
        "name": "Chillies Green",
        "quantity": "100 g",
        "price": "9"
    },
    {
        "image": "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/LCOR21.png",
        "name": "Coriander Leaves / Dhania / Kothimbir",
        "quantity": "100 g",
        "price": "15"
    },
    {
        "image": "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VGAR12.png",
        "name": "Garlic Bunch / Lahsun / Vellulipaya",
        "quantity": "100 g",
        "price": "10"
    },
    {
        "image": "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VGIN12.png",
        "name": "Ginger / Adrak",
        "quantity": "100 g",
        "price": "6"
    },
    {
        "image": "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/LMET1.png",
        "name": "Methi (Fenugreek Leaves)",
        "quantity": "100 g",
        "price": "11"
    }
]
const HandelCart = (ele) => {
    console.log(ele);
    toast({
      title: "Successfull",
      description: `${ele.name} Added to the cart`,
      status: "success",
      duration: 1500,
      isClosable: true,
      position: "top",
    });
    const cart = JSON.parse(localStorage.getItem("FraazoCart")) || [];
    cart.push(ele);
    localStorage.setItem("FraazoCart", JSON.stringify(cart));
  };
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div style={{ display: "flex", textAlign: "center",  marginTop:"5px"}}>
      <div
        style={{
          width: "86%",
          margin: "auto",
        }}
      >
        <Carousel
          responsive={responsive}
          autoPlay={false}
          autoPlaySpeed={50000}
        >
          {vegetables.map((ele) => (
            <Box id="carosel11">
              <Box id="imgbox">
                <img src={ele.image} />
              </Box>
              <Box id="textBox">
                <p id="name">
                  {ele.name.slice(0, 26)}
                  {ele.name.length > 26 && "..."}
                </p>
                <Box id="lowerbox">
                  <Box id="leftbox">
                    <p id="qty">{ele.quantity}</p>
                    <p id="price">₹{ele.price}</p>
                  </Box>
                  <Box id="rightbox">
                    <Button
                      colorScheme="green"
                      variant="outline"
                      height={"35px"}
                      id="cartbutton"
                      rounded={"full"}
                      onClick={() => HandelCart(ele)}
                    >
                      <FaCartPlus />
                      Add
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
