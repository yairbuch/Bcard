import React from "react";
import CardMedia from "@mui/material/CardMedia";
import ImageInterface from "../../interfaces-20230423T085937Z-001/interfaces/ImageInterface";

type Props = { image: ImageInterface };

const CardHead: React.FC<Props> = ({ image }) => {
  const { url, alt } = image;
  return (
    <CardMedia
      component="img"
      image={url}
      alt={alt}
      sx={{ width: "100%", aspectRatio: "16/9", objectFit: "cover" }}
    />
  );
};

export default CardHead;
