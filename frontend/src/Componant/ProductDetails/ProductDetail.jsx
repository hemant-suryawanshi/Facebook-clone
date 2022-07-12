import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { query, productname,id } = useParams();

  console.log(query, productname,id);

  return (
    <>
      <h1>Product Details Page</h1>
    </>
  );
};

export default ProductDetails;
