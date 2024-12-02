import React from "react";
import SubCard from "./subCard";

const Subscription = () => {
  return (
    <div className="bg-sub">
      <div className="pl-5 container pt-4 pb-5">
        <div className="row">
          <h3 className="text-center" >Select Subscription</h3>
        </div>
        <div className="row mt-5 my-4 d-flex justify-content-center align-items-center">
          <div className="col-sm-6 text-center">
            <SubCard />
          </div>
         
          

        </div>
   
      </div>
    </div>
  );
};

export default Subscription;
