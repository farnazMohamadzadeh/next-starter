import * as React from "react";
import { Cart } from "@/types";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch } from "@/store/redux/hooks";
import { removeFromCart } from "@/store/redux/reducer/cart";

const CartProducts = ({ product }: { product: Cart }) => {
  console.log("product", product);
  const dispatch = useAppDispatch();
  const deleteHandler = (id: number) => {
    dispatch(removeFromCart(id));
  };
  return (
    <>
      {product && (
        <>
          <MenuItem
            sx={{
              display: "flex",
              minWidth: "500px",
              justifyContent: "space-between",
              cursor: "default",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "80%",
              }}
            >
              <Image src={product.image} alt="" width={100} height={100} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  direction: "rtl",
                  gap: "8px",
                  width: "70%",
                  fontFamily: "IRANSans Num",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {product.title}
                </Typography>

                <Typography sx={{ color: "#1976d2" }}>
                  {" "}
                  {product.price} تومان{" "}
                </Typography>
                <Typography> {product.count} :تعداد </Typography>
              </div>
            </div>
            <IconButton onClick={() => deleteHandler(product.id)}>
              <DeleteIcon color="error" />
            </IconButton>
          </MenuItem>
          <Divider />
        </>
      )}
    </>
  );
};
export default CartProducts;
