import { Box, Button, Select, Toast, useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import "./ProductList.css";
import { FaCartPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const ProductList = () => {
  const { query } = useParams();
  const toast = useToast();
  const products = useSelector((store) => store.Product.Products);
  var newarray = products;

  const [sort, setSort] = useState("");

  useEffect(() => {
    handelSortofFrazzo();

    return () => {
      newarray = [];
    };
  }, [sort]);

  const handelSortofFrazzo = () => {
    if (sort == "low") {
      newarray = products.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (sort == "high") {
      newarray = products.sort((a, b) => {
        return b.price - a.price;
      });
    } else if (sort == "abc") {
      newarray = products.sort((a, b) => {
        return b.name - a.name;
      });
    } else if (sort == "cba") {
      newarray = products.sort((a, b) => {
        return b.name - a.name;
      });
    }
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
          <option value="abc">A to Z</option>
          <option value="cba">Z to A</option>
        </Select>
      </Box>
      <Box id="container1">
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
      </Box>
    </Box>
  );
};

export default ProductList;
