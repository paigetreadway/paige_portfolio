import React, { useEffect,useState, useCallback } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ImageViewer from 'react-simple-image-viewer';

function Art() {


  const resumeData = require('../assets/data.json');
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  
  const openImageViewer = useCallback((index) => {
    console.log(index)
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  
  const IMG = (imgName) => {

    return require (`../assets/art/${imgName}`)
  }

  const images = resumeData.art.map((image)=>{
    return image.img
  })

  const images_obj = resumeData.art.map((image)=>{
    return require (`../assets/art/${image.img}`)
  })


  return (
      <div class="container art">
        <div class="paintings">
            {images.map((src, index) => (
              <div class="col-lg-4">
              <img 
                class="img-fluid rounded img-thumbnail mb-4"
                src={IMG(src)} 
                onClick={ () => openImageViewer(index) }
                key={ index }
                style={{ margin: '2px' }}
                alt=""
              />
              </div>
            ))}
        </div>
        <div>
            {isViewerOpen && (
              <ImageViewer
                src={images_obj} 
                currentIndex={ currentImage }
                disableScroll={ false }
                closeOnClickOutside={ true }
                onClose={ closeImageViewer }
              />
            )}
        </div> 
      </div>
  );
}


export default Art;
