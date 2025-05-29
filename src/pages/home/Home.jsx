import Product from "@/components/product/Product";
import { useFetch } from "@/hooks/useFetch";
import React from "react";
import Skeleton from "../skeleton/Skeleton";

const Home = () => {
  const {data, loading, error} = useFetch("/products")

  
  return (
    <div>
      <Product data={data}/>
      {loading && <Skeleton count={20}/>}
    </div>
  );
};

export default React.memo(Home)
