import { Box, Button, Select, Toast, useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import "./ProductList.css";
import { FaCartPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import AddtoCartButton from "../../AddToCartButton/AddtoCartButton";



const ProductList = () => {
  const { query } = useParams();
  const toast = useToast();
  const products = useSelector((store) => store.Product.Products);
  var newarray = products;

  const [sort, setSort] = useState("");
 
  

  const handelSortofFrazzo = () => {
   
    if (sort == "low") {
      newarray = products.sort(function (a, b) {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      });
    } else if (sort == "high") {
      newarray = products.sort(function (a, b) {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      });
    }
  };

  const HandelCart = (ele) => {
    const cart = JSON.parse(localStorage.getItem("FraazoCart")) || [];
    cart.push(ele);
    localStorage.setItem("FraazoCart", JSON.stringify(cart));
 
    toast({
      title: "Successfull",
      description: `${ele.name} Added to the cart`,
      status: "success",
      duration: 1500,
      isClosable: true,
      position: "top",
    });
   
  };
  useEffect(() => {
    
   handelSortofFrazzo();

   return () => {
     newarray = [];
   };

 }, [sort,HandelCart]);

  return (
    <Box id="mainContainerProductList">
      <Box id="filterSortBox">
        <Box id="marginBoxforsort"></Box>

        {/* Filter Select Tag */}
        <Select
          placeholder="Sort by"
          id="selectforFilter"
          variant="flushed"
          borderColor="teal"
          color={"gray"}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="low">Price Low to High</option>
          <option value="high">Price High to low</option>
        </Select>
      </Box>
      <Box id="container1list">
        {newarray.map((ele) => (
          <Box id="container11">
            <Link to={`/product/${query}/${ele.name}/${ele._id}`}>
              <Box id="imgbox">
                <img src={ele.image} />
              </Box>
            </Link>
            <Box id="textBox">
              <p id="name">
                {ele.name.slice(0, 26)}
                {ele.name.length > 26 && "..."}
              </p>
              <Box id="lowerboxlist">
                <Box id="leftbox">
                  <p id="qty">{ele.quantity}</p>
                  <p id="price">₹{ele.price}</p>
                </Box>
                <Box id="rightbox">
                 
                  <AddtoCartButton HandelCart={HandelCart} ele={ele}/>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProductList;
