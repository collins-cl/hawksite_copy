import React from "react";
import "../TrustedBy/TrustedBy.scss";
import Images from "../../Variable/Images";

const TrustedBy = () => {
  return (
    <div className="trusted">
      <h2>Trusted By</h2>

      <p>
        Top crypto funds, exchanges, and 1,914,601+ everyday investors from 36+
        countries
      </p>

      <div className="images">
        {Images.slice(0, 15).map((image) => (
          <img src={image.image} width={150} alt="" />
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
