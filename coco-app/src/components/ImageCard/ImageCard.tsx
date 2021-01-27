import React, { useState } from 'react';
import './ImageCard.css';
import Modal from '../UI/Modal/Modal';
import ImagePreview from '../UI/ImagePreview/ImagePreview';



type Props ={
  src:string;
  author:string;
  index:number;
  width:number;
  height:number;
};
const resizeImage=(url:string, width:number, height:number)=>{
  const urlParts=url.split('/');
  urlParts[urlParts.length-2]=`${width}`;
  urlParts[urlParts.length-1]=`${height}`;
  return urlParts.join('/');
};
const ImageCard = ({ src, author, index, width, height }:Props)=> {
  const [show, setShow] = useState(false);
  return (
    <>
      {show &&
      <Modal
        handleClose={() => setShow(false)}
        show={show}
      >
        <ImagePreview
          src={resizeImage(src, width, height)}
          width={width}
          height={height}
        />
      </Modal>}
      <div
        className="clipped-border"
        onClick={()=>setShow(true)}
        onKeyPress={()=>setShow(true)}
        role="button"
        tabIndex={index}
      >
        <img
          alt={author}
          src={resizeImage(src, 200, 200)}
          id="clipped"
        />
      </div>
    </>
  );
};


export default ImageCard;