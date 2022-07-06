import { Box, Button, useToast } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carosel.css";
import { FaCartPlus } from "react-icons/fa";

export const MangoesCarasol = () => {
  const toast = useToast();
  const mangoes = [
    {
      image:
        "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VMAN12.png",
      name: "Mango Raw",
      quantity: "250 g",
      price: 14,
    },
    {
      image:
        "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FKES1.png",
      name: "Mango Kesar",
      quantity: "1 Kg",
      price: 219,
    },
    {
      image:
        "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/135/original/data?1612689931",
      name: "Mango Badami",
      quantity: "1 Kg",
      price: 129,
    },
    {
      image:
        "https://s3.ap-south-1.amazonaws.com/fraazo-prod/images/images/000/004/597/original/data?1647577454",
      name: "Mango Totapuri Raw",
      quantity: "1 Kg",
      price: 108,
    },
    {
      image:
        "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/329/original/data?1616795305",
      name: "Alphonso Mango Devgad",
      quantity: "6 pcs",
      price: 479,
    },
    {
      image:
        "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/339/original/data?1620237313",
      name: "Alphonso Mango Devgad (2 x 6 pcs)",
      quantity: "1 Dozen",
      price: 949,
    },
    {
      image:
        "https://s3.ap-south-1.amazonaws.com/fraazo-prod/images/images/000/007/294/original/data?1650906368",
      name: "Mango Mallika",
      quantity: "1 Kg",
      price: 179,
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
  };
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
          {mangoes.map((ele) => (
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
