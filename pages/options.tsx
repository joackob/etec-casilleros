import { Box, Button } from "@mui/material";

export default function Options() {
  return (
    <Box
      sx={{
        marginTop: "50px",
        
      }}
    >
      <Button variant="contained">
        ABRIR
      </Button>
       <Button variant="contained">
        CERRAR
      </Button>
    </Box>
  );
}
