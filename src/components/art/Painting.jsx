import React, { useEffect } from "react";
import { useParams } from "react-router";

function Painting() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="home">
      <div class="container">
        <h1 className="mt-5">Paiting Name</h1>
        <h6 className="mb-5">The post slug is, {postSlug}</h6>
        <p>
        </p>
      </div>
    </div>
  );
}

export default Painting;
