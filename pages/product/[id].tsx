import React from "react";
import { Product } from "@/types";
import { getAllProducts, getProduct } from "@/store/api";
import ProductDetails from "@/components/product/productDetails";

const ProductDetail = ({ product }: { product: Product }) => {
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const data: Product[] = await getAllProducts();
  const ProductPaths = data.map((product) => {
    return { params: { id: String(product.id) } };
  });
  return {
    paths: ProductPaths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const data = await getProduct(params.id);
  return {
    props: {
      product: data,
    },
    revalidate: 600,
  };
};

export default ProductDetail;
