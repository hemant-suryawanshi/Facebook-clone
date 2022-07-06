import { Box, Button, useToast } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carosel.css";
import { FaCartPlus } from "react-icons/fa";

export const DryfruiteCarasol = () => {
    const toast = useToast();
  const dryfruits= [
    {
        "image": "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/578/original/data?1635085993",
        "name": "Cashew 200gms (Pack of 2*100gms)",
        "quantity": "200 g",
        "price": "182"
    },
    {
        "image": "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/579/original/data?1635086198",
        "name": "Cashew 500gms (Pack of 5*100gms)",
        "quantity": "500 g",
        "price": "450"
    },
    {
        "image": "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/580/original/data?1635086672",
        "name": "Cashew Tukda - 100gm",
        "quantity": "100 g",
        "price": "84"
    },
    {
        "image": "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/584/original/data?1635137208",
        "name": "Walnut 200gms (Pack of 2*100gms)",
        "quantity": "200 g",
        "price": "335"
    },
    {
        "image": "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/585/original/data?1635137356",
        "name": "Walnut 500gms (Pack of 5*100gms)",
        "quantity": "500 g",
        "price": "825"
    },
    {
        "image": "https://images.fraazo.com/fraazo-prod/products/product_images/000/000/598/original/data/tr:w-256,h-256",
        "name": "Dry Dates (Pack of 5*200gms)",
        "quantity": "1 Kg",
        "price": "330"
    },
    {
        "image": "https://images.fraazo.com/fraazo-prod/products/product_images/000/000/598/original/data/tr:w-256,h-256",
        "name": "Dry Dates (Pack of 2*200gms)",
        "quantity": "400 g",
        "price": "135"
    },
    {
        "image": "https://images.fraazo.com/fraazo-prod/products/product_images/000/000/598/original/data/tr:w-256,h-256",
        "name": "Dry Dates",
        "quantity": "200 g",
        "price": "70"
    }
]
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
  return (
    <div style={{ display: "flex", textAlign: "center" ,marginTop:"5px"}}>
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
          {dryfruits.map((ele) => (
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
