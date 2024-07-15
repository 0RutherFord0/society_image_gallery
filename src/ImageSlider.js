import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, IconButton, Modal } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";

const ImageSlider = ({ images, open, handleClose, startIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  useEffect(() => {
    setCurrentIndex(startIndex);
  }, [startIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "background.paper",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "white",
            bgcolor: "rgba(0,0,0,0.5)",
            "&:hover": {
              bgcolor: "rgba(0,0,0,0.7)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              padding: "20px",
            }}
          />
        </AnimatePresence>
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: 10,
            top: "50%",
            transform: "translateY(-50%)",
            color: "white",
            bgcolor: "rgba(0,0,0,0.5)",
            "&:hover": {
              bgcolor: "rgba(0,0,0,0.7)",
            },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            color: "white",
            bgcolor: "rgba(0,0,0,0.5)",
            "&:hover": {
              bgcolor: "rgba(0,0,0,0.7)",
            },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default ImageSlider;
