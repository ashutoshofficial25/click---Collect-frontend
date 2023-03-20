import {
  Avatar,
  Box,
  Button,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import BlockIcon from "@mui/icons-material/BlockOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import CustomDialog from "../../../components/CustomDialog";

const tableData = [
  {
    _id: "1",
    firstName: "Ashutosh",
    city: "Lucknow",
    status: "Active",
    email: "ashutosh@gmail.com",
  },
  {
    _id: "2",
    firstName: "Vison",
    city: "Lucknow",
    status: "Active",
    email: "vision@gmail.com",
  },
  {
    _id: "3",
    firstName: "Raj",
    city: "Lucknow",
    status: "Active",
    email: "raj@gmail.com",
  },
  {
    _id: "4",
    firstName: "Sashank",
    city: "Lucknow",
    status: "Active",
    email: "sashank@gmail.com",
  },
  {
    _id: "5",
    firstName: "Devuser",
    city: "Lucknow",
    status: "Active",
    email: "devuser@gmail.com",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);
  const [sure, setSure] = useState(false);
  return (
    <div>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" gap={2}>
          <TextField type="search" size="small" />{" "}
          <Button variant="outlined">Search</Button>
          <Button variant="contained" color="warning">
            Show all
          </Button>
        </Box>
        <Button
          variant="contained"
          color="primary"
          startIcon={<PersonAddIcon />}
          onClick={() => setOpen(true)}
        >
          Customer
        </Button>
      </Box>
      <TableContainer component={Paper} style={{ marginTop: "30px" }}>
        <Box mx={2} my={2}>
          <Typography fontWeight={600} variant="h6" color="#002884">
            {" "}
            All Customers
          </Typography>
        </Box>{" "}
        <Divider />
        <Table stickyHeader aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Profile</TableCell>
              <TableCell> Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Email</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((vendor) => (
              <TableRow>
                <TableCell>
                  <Avatar src="#" alt={vendor.firstName} />
                </TableCell>
                <TableCell>{vendor.firstName}</TableCell>
                <TableCell>{vendor.city}</TableCell>
                <TableCell>{vendor.status}</TableCell>
                <TableCell>{vendor.email}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    sx={{ mr: "5px" }}
                    endIcon={<PersonPinIcon />}
                  >
                    View Profile
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="warning"
                    sx={{ ml: "5px" }}
                    endIcon={<BlockIcon />}
                    onClick={() => setSure(true)}
                  >
                    Block
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomDialog title="Add Costumer" open={open} setOpen={setOpen}>
        hello
      </CustomDialog>
      <CustomDialog
        title="Are you sure"
        maxWidth="md"
        open={sure}
        setOpen={setSure}
      >
        <Box display="flex" gap={3} mx={7}>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => setSure(false)}
          >
            Yes
          </Button>
          <Button
            size="small"
            onClick={() => setSure(false)}
            variant="outlined"
          >
            No
          </Button>
        </Box>
      </CustomDialog>
    </div>
  );
};

export default Users;
