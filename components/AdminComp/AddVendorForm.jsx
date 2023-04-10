import {
  Box,
  Button,
  Divider,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const AddVendorForm = ({ setOpen }) => {
  return (
    <div>
      <form>
        <Grid container spacing={3} mb={2}>
          <Grid item md={6}>
            <TextField
              name="firstName"
              fullWidth
              variant="outlined"
              label="First Name"
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              name="lastName"
              label="Last Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              name="email"
              variant="outlined"
              label="Email"
              fullWidth
            />
          </Grid>

          <Grid item md={6}>
            <TextField
              type="number"
              name="age"
              variant="outlined"
              label="Age"
              fullWidth
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              name="location"
              variant="outlined"
              label="Location "
              fullWidth
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              type="password"
              name="password"
              variant="outlined"
              label="Password"
              fullWidth
            />
          </Grid>
          <Grid
            item
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography>Not active</Typography>
            <Switch />
            <Typography>Active</Typography>
          </Grid>
        </Grid>

        <Divider />

        <Box pt={2} textAlign="center">
          <Button variant="contained" onClick={() => setOpen(false)}>
            Create Vendor
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddVendorForm;
