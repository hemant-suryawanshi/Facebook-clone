import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FetchOnedata } from "../../Redux/ProductDetails/Action";

const ProductDetails = () => {
  const { query, productname,id } = useParams();
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchOnedata(query,id));
  
  }, [dispatch, query]);

  const Oneproducts = useSelector((store) => store?.OneProduct?.Product);
  console.log("oneproduct",Oneproducts)

 

  return (
    <>
      <h1>Product Details Page</h1>
    </>
  );
};

export default ProductDetails;
