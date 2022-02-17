import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Painting() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);
 

  const IMG = (imgName) => {
    return require (`../../assets/art/${imgName}`)
  }

  const getPainting = (image)=>{
    return (
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            class="img-fluid rounded img-thumbnail mb-4"
            src={IMG(image)} 
            alt=""
          />
      </div>
    )
  }


  return (
      <div class="container">
        <h1 className="mt-5">Paiting Name</h1>
        <Link to={"/art"}><p> &lt; Back</p></Link>
        {getPainting(postSlug)}
        <h6 className="mb-5">The post slug is, {postSlug}</h6>
      </div>
  );
}

export default Painting;
