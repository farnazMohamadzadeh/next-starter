import Link from "next/link";
import * as React from "react";
import Cart from "../cart/cart";
import Badge from '@mui/material/Badge';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';


const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    padding: '0 4px',
  },
}));

export default function Nav() {
  return (
      <AppBar position="static">
        <Toolbar sx={{display:"flex", justifyContent:"space-between", margin:'0 10px'}}>
        <Link href="/">
        <HomeIcon fontSize="medium" sx={{color:"#fff"}} />
        </Link>
          <Cart />
          
        </Toolbar>
      </AppBar>

  );
}
