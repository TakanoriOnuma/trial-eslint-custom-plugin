import { FC } from "react";
import { Box, Button, IconButton, Typography, Stack } from "@mui/material";
import { ArrowLeft, ArrowRight, AccessAlarm } from "@mui/icons-material";

const App: FC = () => {
  return (
    <Stack sx={{ p: 1 }} spacing={1}>
      <Typography>Hello World!</Typography>
      <Box>
        <Button variant="contained" endIcon={<AccessAlarm />}>
          アラームボタン
        </Button>
      </Box>
      <Stack direction="row" alignItems="center">
        <IconButton>
          <ArrowLeft />
        </IconButton>
        <Typography>左右矢印ボタン</Typography>
        <IconButton>
          <ArrowRight />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default App;
