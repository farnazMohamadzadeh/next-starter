import * as React from "react";
import Menu from "@mui/material/Menu";
import Badge from "@mui/material/Badge";
import CartProducts from "./cartProducts";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "@/store/redux/hooks";
import { selectCart } from "@/store/redux/reducer/cart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


export default function Cart() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const cartProducts = useAppSelector(selectCart);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const totalPrice = cartProducts.reduce((prev, current) => {
    return prev + current.count * current.price;
  }, 0);

  return (
    <React.Fragment>
      <IconButton aria-label="cart" onClick={handleClick}>
        <Badge badgeContent={cartProducts.length} color="error">
          <ShoppingCartIcon sx={{ color: "white" }} />
        </Badge>
      </IconButton>
      {cartProducts.length > 0 && (
        <Menu
          anchorEl={anchorEl}
          id="cart"
          open={open}
          onClose={handleClose}
          PaperProps={{
            sx: {
                direction:"ltr",
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,         
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
        >
          {cartProducts.map((product) => (
            <CartProducts key={product.id} product={product} />
          ))}
          <Typography
            sx={{
              width: "100%",
              textAlign: "center",
              fontFamily: "IRANSans Num",
              fontWeight: "600",
              color: "#1976d2",
            }}
          >
            قیمت کل: {totalPrice} تومان
          </Typography>
        </Menu>
      )}
    </React.Fragment>
  );
}
