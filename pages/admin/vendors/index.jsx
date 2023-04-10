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
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import CustomDialog from "../../../components/CustomDialog";
import AddVendorForm from "../../../components/AdminComp/AddVendorForm";

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
    city: "Mars",
    status: "Active",
    email: "vision@gmail.com",
  },
  {
    _id: "3",
    firstName: "Raj",
    city: "Ballia",
    status: "Active",
    email: "raj@gmail.com",
  },
  {
    _id: "4",
    firstName: "Sashank",
    city: "Azamgrah",
    status: "Active",
    email: "sashank@gmail.com",
  },
  {
    _id: "5",
    firstName: "Devuser",
    city: "Mau",
    status: "Active",
    email: "devuser@gmail.com",
  },
];

const Vendors = () => {
  const [sure, setSure] = useState(false);
  const [open, setOpen] = useState(true);
  return (
    <Box>
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
          Vendor
        </Button>
      </Box>

      <TableContainer component={Paper} style={{ marginTop: "30px" }}>
        <Box mx={2} my={2}>
          <Typography fontWeight={600} variant="h6" color="#002884">
            {" "}
            Approved Vendors
          </Typography>
        </Box>{" "}
        <Divider />
        <Table stickyHeader aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Profile</TableCell>
              <TableCell>Vendor Name</TableCell>
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
                    onClick={() => setSure(true)}
                  >
                    View Profile
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="warning"
                    sx={{ ml: "5px" }}
                    endIcon={<BlockIcon />}
                  >
                    Block
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper} style={{ marginTop: "30px" }}>
        <Box mx={2} my={2}>
          <Typography fontWeight={600} variant="h6" color="#002884">
            {" "}
            Pending Vendors
          </Typography>
        </Box>
        <Divider />
        <Table stickyHeader aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Vendor Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Email</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((vendor) => (
              <TableRow>
                <TableCell>{vendor.firstName}</TableCell>
                <TableCell>{vendor.city}</TableCell>
                <TableCell>{vendor.status}</TableCell>
                <TableCell>{vendor.email}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Button
                    size="small"
                    variant="contained"
                    color="success"
                    sx={{ mr: "5px" }}
                    endIcon={<CheckCircleIcon />}
                  >
                    Approve
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    variant="contained"
                    sx={{ ml: "5px" }}
                    endIcon={<DeleteIcon />}
                  >
                    Decline
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper} style={{ marginTop: "30px" }}>
        <Box mx={2} my={2}>
          <Typography fontWeight={600} variant="h6" color="#002884">
            {" "}
            Blocked Vendors
          </Typography>
        </Box>
        <Divider />
        <Table stickyHeader aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Profile</TableCell>
              <TableCell>Vendor Name</TableCell>
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
                    variant="contained"
                    color="secondary"
                    sx={{ mr: "5px" }}
                    endIcon={<CheckCircleIcon />}
                  >
                    Unblock
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    variant="contained"
                    sx={{ ml: "5px" }}
                    endIcon={<DeleteIcon />}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <CustomDialog title="Add new Vendor" open={open} setOpen={setOpen}>
        <AddVendorForm setOpen={setOpen} />
      </CustomDialog>
    </Box>
  );
};

export default Vendors;
