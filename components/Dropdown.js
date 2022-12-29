import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const firstrow = [
  "T-Shirts",
  "Casual Shirts",
  "Formal Shirts",
  "Sweatshirts",
  "Sweaters",
  "Jackets",
  " Blazers & Coats",
  "Suits",
  "Rain Jackets",
];
const firstrow2 = [
  "Kurtas & Kurta Sets",
  "Sherwanis",
  "Nehru Jackets",
  "Dhotis",
];

const secondrow = [
  "Jeans",
  "Casual Trousers",
  "Formal Trousers",
  " Shorts",
  "Track Pants & Joggers",
];
const secondrow2 = [
  "Briefs & Trunks",
  " Boxers",
  " Vests",
  "Sleepwear & Loungewear",
  "Thermals",
];

const Dropdown = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant="h5">Topwear</Typography>
          {firstrow.map((item) => (
            <Typography variant="body2">{item}</Typography>
          ))}
          <Typography variant="h5">Topwear</Typography>
          {firstrow2.map((item) => (
            <Typography variant="body2">{item}</Typography>
          ))}
        </Grid>

        <Grid item>
          <Typography variant="h5">Bottomwear</Typography>
          {secondrow.map((item) => (
            <Typography variant="body2">{item}</Typography>
          ))}
          <Typography variant="h5">Innerwear & Sleepwear</Typography>
          {secondrow2.map((item) => (
            <Typography variant="body2">{item}</Typography>
          ))}
          <Typography variant="h5">Plus size</Typography>
        </Grid>
        <Grid item></Grid>
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>
    </Container>
  );
};

export default Dropdown;
