import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Paintings() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  const resumeData = require('../../assets/data.json');

  
  
  const IMG = (imgName) => {

    return require (`../../assets/art/${imgName}`)
  }

  const images = resumeData.art.map((image)=>{
    return (
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <Link to={`/art/${image.img}`}>
      <img
        class="img-fluid rounded img-thumbnail mb-4"
        src={IMG(image.img)} 
        alt=""
      />
    </Link>
    </div>
    )
  })


  return (
    <div className="home">
      <div class="container">
        <h1 className="mt-5">Paiting Name</h1>
        <div class="row align-items-center my-5">
          {images}
        </div> 
      </div>
    </div>
  );
}

export default Paintings;
