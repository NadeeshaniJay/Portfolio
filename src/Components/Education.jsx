import React from "react";

const Education = () => {
  return (
    <section className="padding" id="education">
      <div
        style={{
          textAlign: "center",
          fontSize: "1.25rem",
          margin: "2rem",
          backgroundColor: "white",
        }}
      >
        <h2 style={{ padding: "2rem" }}>Education</h2>
        <div className="flex-item">
          <h3>University of Ruhuna</h3>
          <p>2021 - 2023</p>
          <p>Computer Engineering</p>
        </div>
        <div className="flex-item" style={{ padding: "2rem 0 0 0" }}>
          <h3>R/Balangoda Anandaa Maithreya Central College</h3>
          <p>2009 - 2018</p>
          <p>GCE O/L & GCE Advanced Level</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
