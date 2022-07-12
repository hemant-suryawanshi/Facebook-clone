import { Box, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import "./ProductList.css";
import { FaCartPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const ProductList = () => {
  const { query } = useParams();
  const products = useSelector((store) => store.Product.Products);

  const HandelCart = (ele) => {
    console.log(ele);
    const cart = JSON.parse(localStorage.getItem("FraazoCart")) || [];
    cart.push(ele);
    localStorage.setItem("FraazoCart", JSON.stringify(cart));
  };

  return (
    <Box id="mainContainer">
      <Box id="container1">
        {products.map((ele) => (
          <Link to={`/product/${query}/${ele.name}/${ele._id}`}>
            <Box id="container11">
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
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default ProductList;
