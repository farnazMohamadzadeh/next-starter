import * as React from "react";
import Image from "next/image";
import { Product } from "@/types";
import Button from "@mui/material/Button";
import style from "./productDetails.module.css";
import { useAppDispatch } from "@/store/redux/hooks";
import { addToCart } from "@/store/redux/reducer/cart";

export default function ProductDetails({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  const handleClick = (product: Product) => {
    dispatch(addToCart(product));
  };
  return (
    <>
      <div className={style.product}>
        <div className={style.product_images}>
          <Image
            src={product.media.path}
            alt={product.title}
            width={300}
            height={300}
          />
        </div>
        <div className={style.product_details}>
          <h4>{product.title}</h4>
          <h3>
            {product.price.price} {product.price_unit_title}
          </h3>
          <div className={style.about}>
            <p>
              کد محصول: <span>{product.code}</span>
            </p>
            <p>
              تگ ها :{" "}
              {product.tag_list.map((item, index) => (
                <span key={index}>
                  {item}
                  {"، "}
                </span>
              ))}{" "}
            </p>
            <p>
              توضیحات محصول: <span>{product.short_description}</span>
            </p>
          </div>
          <Button
            fullWidth
            size="medium"
            variant="contained"
            onClick={() => handleClick(product)}
          >
            اضافه به سبد خرید{" "}
          </Button>
        </div>
      </div>
    </>
  );
}
