import Link from "next/link";
import * as React from "react";
import Image from "next/image";
import { Product } from "@/types";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "3px",
          }}
        >
          <Image
            src={product.media.path}
            alt={product.title}
            width={200}
            height={200}
          />
        </CardMedia>
        <CardContent
          sx={{
            flexGrow: 1,
            paddingBottom: "0px",
            height: "100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
            variant="body1"
            component="h6"
          >
            {product.title}
          </Typography>
          <Typography
            sx={{ fontWeight: "bold" }}
            color="GrayText"
            variant="caption"
          >
            دسته بندی : {product.category.title}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "16px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "IRANSans Num",
              backgroundColor: "#cae9ff",
              borderRadius: "4px",
              padding: "5px",
            }}
            variant="body1"
          >
            {product.price.price} {product.price_unit_title}
          </Typography>
          <Link href={`/product/${product.id}`}>
            <Button size="small" variant="contained">
              مشاهده جزئیات{" "}
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;
