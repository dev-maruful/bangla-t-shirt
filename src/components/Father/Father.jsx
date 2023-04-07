import React from "react";
import Sister from "../Sister/Sister";
import Brother from "../Brother/Brother";
import MySelf from "../Myself/Myself";

const Father = ({ ring }) => {
  return (
    <div>
      <h2>Father</h2>
      <section className="flex">
        <MySelf ring={ring}></MySelf>
        <Sister></Sister>
        <Brother></Brother>
      </section>
    </div>
  );
};

export default Father;
