import React from "react";
import Background from "./home3.jpg";

var sectionStyle = {
  backgroundImage: `url(${Background})`
};


function Home() {
  const resumeData = require('../assets/data.json');
  return (
    
    <div className="bg">
      <div class="mask">
      <div class="container">
        <div class="row align-items-center pt-5">
          <div class="col-lg-auto">
            <h1 class="font-weight-normal mb-3">{resumeData.home.heading}</h1>
            <p class="font-weight-normal mb-3">{resumeData.home.body}</p>
            <div class="mt-5">
            <code className="py-code">
              <span className="py-def">def </span> 
              <span className="py-hwf">hello_word()</span>
              <span className="py-none">None</span>: <br/> &#8195; &#8195; 
              <span className="py-print">print</span>(
              <span className="py-hwt">"Hello World :)"</span>)
            </code>
            </div>

          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home;


{/* <div className="home">
<div style={{"backgroundImage":"url(../assets/home3.jpg)"}}>
<div class="container">
  <div class="row align-items-center my-5">
    <div class="col-lg-7">
    </div>
    <div class="col-lg-5">
      <h1 class="font-weight-light">Home page</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book.
      </p>
    </div>
  </div>
  </div>
</div>
</div> */}