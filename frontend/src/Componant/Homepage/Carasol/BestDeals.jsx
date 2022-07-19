import { Box, Button, useToast } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carosel.css";
import { FaCartPlus } from "react-icons/fa";

export const BestDealCarasol = () => {
    const toast = useToast();
    
      const Bestdeal=   [
            {
                "image": "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VMAN12.png",
                "name": "Mango Raw",
                "quantity": "250 g",
                "price": 14
            },
            
            {
                "image": "https://s3.ap-south-1.amazonaws.com/fraazo-prod/images/images/000/004/597/original/data?1647577454",
                "name": "Mango Totapuri Raw",
                "quantity": "1 Kg",
                "price": 108
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
                "image": "https://images.fraazo.com/fraazo-master/FBAN14.png/tr:w-256,h-256",
                "name": "Banana Robusta",
                "quantity": "1 Kg",
                "price": "49"
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
                "image": "https://images.fraazo.com/fraazo-master/EBRO12.png/tr:w-256,h-256",
                "name": "Broccoli",
                "quantity": "450-550 gm",
                "price": "199"
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
                "image": "https://images.fraazo.com/fraazo-prod/products/product_images/000/000/598/original/data/tr:w-256,h-256",
                "name": "Dry Dates (Pack of 2*200gms)",
                "quantity": "400 g",
                "price": "135"
            },
            
          
            {
                "image": "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/438/original/data?1643108714",
                "name": "Maya Chana Dal Standerd 500G",
                "quantity": "500 g",
                "price": "49"
            },
            {
                "image": "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/439/original/data?1643108717",
                "name": "Maya Groundnut 500G",
                "quantity": "500 g",
                "price": "85"
            },
            {
                "image": "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/440/original/data?1643108719",
                "name": "Maya Juwar Premium 1Kg",
                "quantity": "1 kg",
                "price": "56"
            },
       
            {
                "image": "https://images.fraazo.com/fraazo-prod/products/product_images/000/003/449/original/data/tr:w-256,h-256",
                "name": "Maya Premium Suji",
                "quantity": "500 g",
                "price": "29"
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
    <div style={{ display: "flex", textAlign: "center", marginTop:"5px"}}>
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
          {Bestdeal.map((ele) => (
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
