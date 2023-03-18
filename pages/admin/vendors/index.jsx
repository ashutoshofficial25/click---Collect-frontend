import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import BlockIcon from "@mui/icons-material/BlockOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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

const Vendors = () => {
  return (
    <Box>
      <TableContainer style={{ marginTop: "30px" }}>
        <Box mb={2}>
          <Typography fontWeight={600} variant="h6" color="#002884">
            {" "}
            Approved Vendors
          </Typography>
        </Box>
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
                    color="warning"
                    sx={{ mr: "5px" }}
                    endIcon={<BlockIcon />}
                  >
                    Block
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

      <TableContainer style={{ marginTop: "30px" }}>
        <Box mb={2}>
          <Typography fontWeight={600} variant="h6" color="#002884">
            {" "}
            Pending Vendors
          </Typography>
        </Box>

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
      <TableContainer style={{ marginTop: "30px" }}>
        <Box mb={2}>
          <Typography fontWeight={600} variant="h6" color="#002884">
            {" "}
            Blocked Vendors
          </Typography>
        </Box>
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
    </Box>
  );
};

export default Vendors;
