import React from "react";

export default function Expanded({ open, grades }) {

  return (
    <div open={open}>
      <div>
        {grades.map((grade, idx) => {
          return <div key={idx}>
            <p>Test{idx + 1}: {grade}</p>
          </div>;
        })}
      </div>
    </div>
  );
}

