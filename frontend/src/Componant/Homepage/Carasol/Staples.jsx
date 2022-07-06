import { Box, Button, useToast } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carosel.css";
import { FaCartPlus } from "react-icons/fa";

export const StaplesCarasol = () => {
    const toast = useToast();
  const staples = [
    {
      image:
        "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/435/original/data?1643108708",
      name: "Maya Besan 500G",
      quantity: "500 g",
      price: "54",
    },
    {
      image:
        "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/437/original/data?1643108712",
      name: "Maya Chana Dal Premium 500G",
      quantity: "500 g",
      price: "57",
    },
    {
      image:
        "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/438/original/data?1643108714",
      name: "Maya Chana Dal Standerd 500G",
      quantity: "500 g",
      price: "49",
    },
    {
      image:
        "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/439/original/data?1643108717",
      name: "Maya Groundnut 500G",
      quantity: "500 g",
      price: "85",
    },
    {
      image:
        "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/440/original/data?1643108719",
      name: "Maya Juwar Premium 1Kg",
      quantity: "1 kg",
      price: "56",
    },
    {
      image:
        "https://images.fraazo.com/fraazo-prod/images/images/000/005/083/original/data/tr:w-256,h-256",
      name: "Maya HMT Kolam Rice(5 Kg)",
      quantity: "5 kg",
      price: "254",
    },
    {
      image:
        "https://images.fraazo.com/fraazo-prod/products/product_images/000/003/449/original/data/tr:w-256,h-256",
      name: "Maya Maida",
      quantity: "500 g",
      price: "22",
    },
    {
      image:
        "https://images.fraazo.com/fraazo-prod/products/product_images/000/003/449/original/data/tr:w-256,h-256",
      name: "Maya Premium Suji",
      quantity: "500 g",
      price: "29",
    },
  ];
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
  }
  return (
    <div style={{ display: "flex", textAlign: "center",  marginTop:"5px" }}>
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
          {staples.map((ele) => (
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
