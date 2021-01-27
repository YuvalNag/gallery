import React  from 'react';
import './Gallery.css';
import ImageCard from '../../components/ImageCard/ImageCard';
import { ImageMeta } from '../../types/types';




type Props ={
  imagesList:ImageMeta[];
};

const aspectRatioCalc =( width:number, height:number)=>{
  const maxWidth = window.screen.width/1.2; // Max width for the image
  const maxHeight = window.screen.height/1.2;    // Max height for the image
  let ratio = 0;  // Used for aspect ratio
  const newRatio={ width, height };

  // Check if the current width is larger than the max
  if (width > maxWidth){
    ratio = maxWidth / width;   // get ratio for scaling image
    newRatio.width= maxWidth; // Set new width
    newRatio.height= height * ratio;  // Scale height based on ratio
  }

  // Check if current height is larger than max
  if (height > maxHeight){
    ratio = maxHeight / height; // get ratio for scaling image
    newRatio.height= maxHeight;   // Set new height
    newRatio.width=  width * ratio;    // Scale width based on ratio
  }
  return { width:Math.floor(newRatio.width),
    height:Math.floor(newRatio.height) };
};
const Gallery = ({ imagesList=[] }:Props)=>  (

  <div className="gallery">
    {imagesList.map(({ id, author, download_url, width, height }, index) =>
      <ImageCard
        index={index}
        author={author}
        key={id}
        src={download_url}
        width={aspectRatioCalc(width, height).width}
        height={aspectRatioCalc(width, height).height}
      />)}
    <div className="shadow" />
  </div>
);



export default Gallery;