import { Box, Button, Paper, Skeleton, Typography } from "@mui/material";
import React from "react";
import GetAppTwoToneIcon from "@mui/icons-material/GetAppTwoTone";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import TableData from "../../../components/common/TableData";
import Header from "../../../components/header";

const HuddleReport = ({ drawerWidth, isLoading }) => {
  const clinicDetailsData = [
    {
      clinic: "Narberth",
      clinicSize: "XL",
      tmStatus: "NA",
      yoy: "NA",
      region: "MainLine",
      bDom: 20,
      crDay: 1,
    },
  ];
  const cliniColumns = React.useMemo(
    () => [
      { Header: "Clinic", accessor: "clinic", width: 100 },
      { Header: "Clinic Size", accessor: "clinicSize", width: 100 },
      { Header: "T12M Status", accessor: "tmStatus", width: 170 },
      { Header: "YOY", accessor: "yoy", width: 80 },
      { Header: "Region", accessor: "region", width: 150 },
      { Header: "# Business Days in Month", accessor: "bDom", width: 250 },
      { Header: "# Current Day", accessor: "crDay", width: 150 },
    ],
    []
  );
  const scorecardData = [
    { sCard: "Sales", goal: 220000, actual: 11113, score: 35.0 },
    { sCard: "Rev-gen Appts", goal: 87, actual: 2, score: 0.0 },
    { sCard: "Outcome Status", goal: 0, actual: 4, score: 0.0 },
    { sCard: "Emails Collected", goal: 1, actual: 1, score: 5.0 },
    { sCard: "Mobiles Collected", goal: 1, actual: 1, score: 5.0 },
    { sCard: "Google Reviews", goal: 2, actual: 0, score: 0.0 },
    { sCard: "Companion Rate", goal: 1, actual: 0, score: 0.0 },
    { sCard: "Callbacks (Patient Hub)", goal: 0, actual: 0, score: 0.0 },
  ];
  const scorecardColumns = React.useMemo(
    () => [
      {
        Header: "Scorecard",
        accessor: "sCard",
        width: 200,
        Footer: "Total Score",
      },
      { Header: "Goal", accessor: "goal", width: 100, Footer: "" },
      { Header: "Actual", accessor: "actual", width: 100, Footer: "" },
      {
        Header: "Score",
        accessor: "score",
        width: 100,
        Footer: (info) => {
          const total = info.rows.reduce(
            (sum, row) => row.values.score + sum,
            0
          );
          return total;
        },
      },
    ],
    []
  );
  const appontmentsData = [
    { appointments: "MTD", data: 2 },
    { appointments: "Remaining", data: 42 },
    { appointments: "Total", data: 44 },
    { appointments: "Target", data: 87 },
    { appointments: "Target%", data: "50%" },
    { appointments: "Appts Needed to Achieve Budget", data: 41 },
    { appointments: "Remaing Open T&E Slots Available", data: 55 },
  ];
  const appointmentsColumns = React.useMemo(
    () => [
      { Header: "Appointments", accessor: "appointments", width: 280 },
      { Header: "", accessor: "data", width: 100 },
    ],
    []
  );
  const budgetData = [
    { budget: "Target Revenue Ord. & Del. for Month", value: 220000 },
    { budget: "Delivered", value: null },
    { budget: "Net Delivered MTD", value: 203646 },
    { budget: "Projected Delivered", value: 203646 },
    { budget: "Projected Net % to Target Delivered", value: "93%" },
    { budget: "Awaiting Fit No Appt.", value: 62674 },
    { budget: "Ordered", value: null },
    { budget: "Net Ordered MTD", value: 173846 },
    { budget: "Net Projected Ordered", value: 173846 },
    { budget: "Net % to Target Ordered", value: "79%" },
  ];
  const budgetColumns = React.useMemo(
    () => [
      { Header: "Budget", accessor: "budget", width: 400 },
      { Header: "", accessor: "value", width: 80 },
    ],
    []
  );
  return (
    <Box
      sx={{
        width: `calc(100vw - ${drawerWidth + 10}px)`,
        position: "relative",
        left: drawerWidth,
        marginLeft: "10px",
      }}
    >
      <Box
        display={"flex"}
        justifyContent="space-between"
        mr={3}
        alignItems="center"
      >
        <Box
          display={"flex"}
          sx={{ margin: "10px" }}
          alignItems="center"
          justifyContent={"space-between"}
          width={800}
        >
          <Header title={"Huddle Report"} />
          <Box display={"flex"}>
            <Typography sx={{ color: (theme) => theme.palette.text.disabled }}>
              Date:
            </Typography>
            <Typography sx={{ fontWeight: 500 }}>02/01/2023</Typography>
          </Box>
          <Typography sx={{ color: (theme) => theme.palette.text.disabled }}>
            1 business day(s) of 20 in month
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ boxShadow: "0px 5px 5px 0px rgb(85 195 142 / 24%)" }}
          >
            <GetAppTwoToneIcon />
            <Typography>Export</Typography>
          </Button>
        </Box>
      </Box>
      <Box display={"flex"} alignItems="center" ml={"10px"} mb={2}>
        <Typography component={"div"} variant="subtitle1">
          Clinic:Narberth
        </Typography>
        <Button color="primary">
          <ArrowCircleLeftOutlinedIcon />
          <Typography>{'Go back to Regional Overview'}</Typography>
        </Button>
      </Box>
      <Box display={"flex"} width="auto" justifyContent={"center"} mb={2}>
        <Box width={"fit-content"}>
          <Paper elevation={6}>
            <TableData
              data={clinicDetailsData}
              columns={cliniColumns}
              isFooter={false}
              isTooltip={false}
            ></TableData>
          </Paper>
        </Box>
      </Box>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Box width={"fit-content"}>
          <Paper elevation={5} square>
            <TableData
              data={scorecardData}
              columns={scorecardColumns}
              isFooter={true}
              isTooltip={false}
            ></TableData>
          </Paper>
        </Box>{" "}
        <Box width={"fit-content"}>
          <Paper elevation={5} square>
            <TableData
              data={budgetData}
              columns={budgetColumns}
              isFooter={false}
              isTooltip={true}
            ></TableData>
          </Paper>
        </Box>
        <Box width={"fit-content"}>
          <Paper elevation={5} square>
            <TableData
              data={appontmentsData}
              columns={appointmentsColumns}
              isFooter={false}
              isTooltip={true}
            ></TableData>
          </Paper>
        </Box>
      </div>
    </Box>
  );
};

export default HuddleReport;
