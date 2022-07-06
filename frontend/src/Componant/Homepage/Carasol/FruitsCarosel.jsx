import { Box, Button, useToast } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carosel.css";
import { FaCartPlus } from "react-icons/fa";

export const FruiteCarasol = () => {
    const toast = useToast();
  const fruits= [
    {
        "image": "https://images.fraazo.com/fraazo-prod/products/product_images/000/000/432/original/data/tr:w-256,h-256",
        "name": "Grape Fruit",
        "quantity": "1 Pc",
        "price": "66"
    },
    {
        "image": "https://images.fraazo.com/fraazo-master/FAVO21.png/tr:w-256,h-256",
        "name": "Avocado Indian",
        "quantity": "1 Pc",
        "price": "89"
    },
    {
        "image": "https://images.fraazo.com/fraazo-master/FBLU1.png/tr:w-256,h-256",
        "name": "Blueberry",
        "quantity": "1 Unit",
        "price": "319"
    },
    {
        "image": "https://images.fraazo.com/fraazo-master/FKIW2.png/tr:w-256,h-256",
        "name": "Kiwi Green",
        "quantity": "1 Unit",
        "price": "102"
    },
    {
        "image": "https://images.fraazo.com/fraazo-prod/images/images/000/008/185/original/data/tr:w-256,h-256",
        "name": "Kashmir Cherry",
        "quantity": "200g",
        "price": "92"
    },
    {
        "image": "https://images.fraazo.com/fraazo-prod/images/images/000/008/251/original/data/tr:w-256,h-256",
        "name": "Fresh green Almond",
        "quantity": "250g",
        "price": "79"
    },
    {
        "image": "https://images.fraazo.com/fraazo-prod/images/images/000/008/053/original/data/tr:w-256,h-256",
        "name": "Plum Indian",
        "quantity": "250g",
        "price": "69"
    },
    {
        "image": "https://images.fraazo.com/fraazo-master/FDRA1.png/tr:w-256,h-256",
        "name": "Dragon Fruit",
        "quantity": "1 Pc",
        "price": "105"
    },
    {
        "image": "https://images.fraazo.com/fraazo-prod/products/product_images/000/000/235/original/data/tr:w-256,h-256",
        "name": "Avocado Imported",
        "quantity": "1 Pc",
        "price": "115"
    },
    {
        "image": "https://images.fraazo.com/fraazo-master/FPEA1.png/tr:w-256,h-256",
        "name": "Indian Peach",
        "quantity": "500 g",
        "price": "135"
    },
    {
        "image": "https://images.fraazo.com/fraazo-prod/images/images/000/007/690/original/data/tr:w-256,h-256",
        "name": "Litchi / Lychee",
        "quantity": "500 g",
        "price": "275"
    },
    {
        "image": "https://images.fraazo.com/fraazo-prod/images/images/000/008/022/original/data/tr:w-256,h-256",
        "name": "Premium Apricot Shakarpara",
        "quantity": "200 g",
        "price": "49"
    },
    {
        "image": "https://images.fraazo.com/fraazo-prod/products/product_images/000/000/261/original/data/tr:w-256,h-256",
        "name": "Pomegranate (Anar)",
        "quantity": "3 Pc",
        "price": "141"
    },
    {
        "image": "https://images.fraazo.com/fraazo-prod/products/product_images/000/000/157/original/data/tr:w-256,h-256",
        "name": "Pineapple",
        "quantity": "800g - 1Kg",
        "price": "109"
    },
    {
        "image": "https://images.fraazo.com/fraazo-master/VPAP12.png/tr:w-256,h-256",
        "name": "Papaya Raw",
        "quantity": "1 Pc",
        "price": "29"
    },
    {
        "image": "https://images.fraazo.com/fraazo-master/FBAN14.png/tr:w-256,h-256",
        "name": "Banana Robusta",
        "quantity": "1 Kg",
        "price": "49"
    },
    {
        "image": "https://images.fraazo.com/fraazo-master/FMOS13.png/tr:w-256,h-256",
        "name": "Mosambi (Sweet Lime)",
        "quantity": "1 Kg",
        "price": "129"
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
          {fruits.map((ele) => (
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
