import { Box, Button, Container, Stack, TextField } from "@mui/material";

import "./style.css";

const From = () => {
  return (
    <Container>
    <form onSubmit={(e) => e.preventDefault}>
      <Box
        className="form-box"
        sx={{ display: "flex", alignItems: "flex-end" }}
      >
      <div className="icon">
      <i class="fa fa-pencil" aria-hidden="true"></i>
      </div>
        <TextField
          className="form-input"
          id="input-with-sx"
          label="Add something"
          variant="standard"
        />
      </Box>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="success">
          Add
        </Button>
      </Stack>
    </form>
    </Container>
  );
};

export default From;
