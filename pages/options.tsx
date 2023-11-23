import { Box, Button } from "@mui/material";

export default function Options() {
  return (
    <Box
      sx={{
        marginTop: "350px",
        marginLeft: "150px"
        
      }}
      
    >
      <Button variant="contained" >
        ABRIR
      </Button>
       <Button variant="contained">
        CERRAR
      </Button>
    </Box>
  );
}
