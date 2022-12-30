import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import loginOfferImg from "../public/static/login-offer.png";
import Image from "next/image";
import { Box } from "@mui/system";

const login = () => {
  return (
    <Box pt={7} sx={{ backgroundColor: "#fcefe8" }}>
      <Card sx={{ maxWidth: 500, margin: "auto" }}>
        <Image src={loginOfferImg} width="620px" height="auto" />
        <CardContent>
          <Box p={5}>
            <Typography gutterBottom variant="h5" component="div">
              <span>Login</span> or <span>Signup</span>
            </Typography>

            <TextField
              placeholder="Mobile Number"
              id="outlined-start-adornment"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    +91 &nbsp; &nbsp;
                  </InputAdornment>
                ),
              }}
            />

            <Typography gutterBottom variant="h5" component="div">
              <span>By continuing, I agree to the </span>{" "}
              <Link>Terms of Use</Link> & <Link>Privacy & Policy</Link>
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              <span>Having trouble logging in?</span> <Link>Get help</Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default login;
