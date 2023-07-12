import { Product } from "@/types";
import { getAllProducts } from "@/store/api";
import { GetStaticProps, NextPage } from "next";
import Products from "@/components/product/products";


const Home: NextPage<{ products: Product[] }> = ({ products }) => {
  return (
    <>
      <Products products={products} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data: Product[] = await getAllProducts();
  return {
    props: {
      products: data,
    },
    revalidate: 600
  };
};
export default Home;
