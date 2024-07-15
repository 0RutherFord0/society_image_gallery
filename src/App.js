import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  CssBaseline,
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { motion } from "framer-motion";
import ImageSlider from "./ImageSlider";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
  },
});

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../public/images", false, /\.(png|jpe?g|svg)$/)
);

function App() {
  const [sliderOpen, setSliderOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const handleImageClick = (index) => {
    setStartIndex(index);
    setSliderOpen(true);
  };

  const handleSliderClose = () => {
    setSliderOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ my: 4, textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h3" component="h1" gutterBottom>
              Bama Society, Vitawa
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              color="text.secondary"
            >
              Created by Aditya Tawade
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Grid container spacing={2}>
              {images.map((image, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card>
                    <CardActionArea onClick={() => handleImageClick(index)}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={image}
                        alt={`Image ${index + 1}`}
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>
      </Container>
      <ImageSlider
        images={images}
        open={sliderOpen}
        handleClose={handleSliderClose}
        startIndex={startIndex}
      />
    </ThemeProvider>
  );
}

export default App;
