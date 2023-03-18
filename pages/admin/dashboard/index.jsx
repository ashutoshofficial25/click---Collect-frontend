import React from "react";
import DataCard from "../../../components/AdminComp/DashboardWidget";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SwitchAccountOutlinedIcon from "@mui/icons-material/SwitchAccountOutlined";
import {
  Button,
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import CustomTable from "../../../components/AdminComp/CustomTable";
import { Box } from "@mui/system";
const Dashboard = () => {
  let data = [
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
        {data.map((item) => (
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
        <TableContainer>
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
                    >
                      Approve
                    </Button>
                    <Button
                      size="small"
                      color="error"
                      variant="contained"
                      sx={{ ml: "5px" }}
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
