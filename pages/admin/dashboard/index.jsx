import React from "react";
import DataCard from "../../../components/AdminComp/DashboardWidget";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SwitchAccountOutlinedIcon from "@mui/icons-material/SwitchAccountOutlined";
import {
  Button,
  Card,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import CustomTable from "../../../components/AdminComp/CustomTable";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { validateRole } from "../../../functions";
import { RoleConstant } from "../../../constants";
import { useAuth } from "../../../hooks";

const adminData = [
  {
    value: 12,
    Icon: <GroupRoundedIcon />,
    title: "Total Customers",
    color: "green",
  },
  {
    value: 7,
    Icon: <SwitchAccountOutlinedIcon />,
    title: "Approved Vendors",
    color: "indigo",
  },
  {
    value: 5,
    Icon: <HourglassBottomIcon />,
    title: "Pending Vendors",
    color: "blue",
  },
  {
    value: 5,
    Icon: <LocalMallIcon />,
    title: "Total Orders",
    color: "orange",
  },
];

const vendorData = [
  {
    value: 12,
    Icon: <GroupRoundedIcon />,
    title: "Total Customers",
    color: "green",
  },
  {
    value: 7,
    Icon: <SwitchAccountOutlinedIcon />,
    title: "Approved Orders",
    color: "indigo",
  },
  {
    value: 5,
    Icon: <HourglassBottomIcon />,
    title: "Pending Order",
    color: "blue",
  },
  {
    value: 5,
    Icon: <LocalMallIcon />,
    title: "Total Orders",
    color: "orange",
  },
  {
    value: 15,
    Icon: <LocalMallIcon />,
    title: "Total Payments",
    color: "orange",
  },
];

const Dashboard = () => {
  const { user } = useAuth();

  const tableData = [
    {
      _id: "1",
      firstName: "Ashutosh",
      city: "Lucknow",
      status: "Pending",
      email: "ashutosh@gmail.com",
    },
    {
      _id: "2",
      firstName: "Vison",
      city: "Lucknow",
      status: "Pending",
      email: "vision@gmail.com",
    },
    {
      _id: "3",
      firstName: "Raj",
      city: "Lucknow",
      status: "Pending",
      email: "raj@gmail.com",
    },
    {
      _id: "4",
      firstName: "Sashank",
      city: "Lucknow",
      status: "Pending",
      email: "sashank@gmail.com",
    },
    {
      _id: "5",
      firstName: "Devuser",
      city: "Lucknow",
      status: "Pending",
      email: "devuser@gmail.com",
    },
  ];

  return (
    <div>
      <Grid container gap={2}>
        {validateRole(RoleConstant.ADMIN, user?.roles) &&
          adminData.map((item) => (
            <DataCard
              title={item.title}
              value={item.value}
              Icon={item.Icon}
              color={item.color}
            />
          ))}

        {validateRole(RoleConstant.VENDOR, user?.roles) &&
          vendorData.map((item) => (
            <DataCard
              title={item.title}
              value={item.value}
              Icon={item.Icon}
              color={item.color}
            />
          ))}
      </Grid>

      {/* Pending users list */}
      <Box mt={7}>
        <TableContainer component={Paper}>
          <Box mx={2} my={2}>
            <Typography fontWeight={600} variant="h6" color="#002884">
              {" "}
              Vendors List
            </Typography>
          </Box>
          <Divider />
          <Table stickyHeader aria-label="customized table">
            <TableHead>
              <TableRow sx={{ bgcolor: "#999fff" }}>
                <TableCell> Vendor Name</TableCell>
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
      </Box>
    </div>
  );
};

export default Dashboard;
