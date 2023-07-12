import * as React from "react";
import AppBar from "@mui/material/AppBar";
import AppsIcon from "@mui/icons-material/Apps";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ProductItem from "./productItem";
import { Product } from "@/types";

const Products = ({ products }: { products: Product[] }) => {
  return (
    <>
      <Toolbar>
        <AppsIcon sx={{ ml: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          لیست محصولات
        </Typography>
      </Toolbar>
      <main>
        <Container sx={{ py: 10 }} maxWidth="xl">
          <Grid container spacing={4}>
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};
export default Products;
