import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const DashboardWidget = ({ title, Icon, color, value }) => {
  return (
    <Card>
      <CardContent>
        <Box>
          <Grid container justify="space-between" spacing={2}>
            <Grid item>
              <Typography color="textSecondary" gutterBottom variant="body2">
                {title}
              </Typography>
              <Typography color="textPrimary" variant="h4">
                {value}
              </Typography>
            </Grid>
            <Grid item>
              <Avatar style={{ backgroundColor: color }}>{Icon}</Avatar>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DashboardWidget;
