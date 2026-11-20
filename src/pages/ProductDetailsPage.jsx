import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Spinner from "../components/ui/Spinner";
import NotFound from "../components/ui/NotFound";
import ProductDetails from "../components/product/ProductDetails";

function ProductDetailsPage() {
  // L1 => Global Data & States & Declare Hooks
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");
  const { id } = useParams();

  // L2 => Effect
  useEffect(() => {
    const getProduct = async () => {
      setStatus("loading");
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`,
        );

        setProduct(response.data);
        setStatus("success");
      } catch (error) {
        if (error.response?.status === 404) {
          setStatus("not-found");
        } else {
          setStatus("error");
        }
      }
    };

    getProduct();
  }, [id]);
  // L3 => Handler
  // L4 => View
  if (status === "loading") {
    return <Spinner />;
  }
  if (status === "not-found") {
    return <NotFound />;
  }
  if (status === "error") {
    return <p>Error</p>;
  }
  return <ProductDetails product={product} />;
}

export default ProductDetailsPage;
