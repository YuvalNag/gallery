import React from 'react';



type Props ={
  src:string;
  width:number;
  height:number;
};
const ImagePreview = ({ src, width, height }:Props)=>(
  <img
    alt='preview'
    src={src}
    width={width}
    height={height}
  />
);



export default ImagePreview;