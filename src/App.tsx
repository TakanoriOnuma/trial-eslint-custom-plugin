import { FC } from "react";
import { Box, Button, IconButton, Typography, Stack } from "@mui/material";
import {
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon,
  AccessAlarm as AccessAlarmIcon,
} from "@mui/icons-material";

const App: FC = () => {
  return (
    <Stack sx={{ p: 1 }} spacing={1}>
      <Typography>Hello World!</Typography>
      <Box>
        <Button variant="contained" endIcon={<AccessAlarmIcon />}>
          アラームボタン
        </Button>
      </Box>
      <Stack direction="row" alignItems="center">
        <IconButton>
          <ArrowLeftIcon />
        </IconButton>
        <Typography>左右矢印ボタン</Typography>
        <IconButton>
          <ArrowRightIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default App;
