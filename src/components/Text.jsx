import React from "react";
import { useSelector } from "react-redux";

const Text = () => {
  const text = useSelector((state) => state.paragraph.paragraphs);
  const html = useSelector((state) => state.paragraph.includeHTML);
  console.log(html);
  return (
    <div className="rounded  px-10 py-10 mt-5 mb-5 bg-[#303030] " >
      {html === "text" ? (
        <div>{text}</div>
      ) : (
        <>
          {text.map((txt, idx) => (
            <div key={idx}>{`<p>${txt}</p>`}</div>
          ))}
        </>
      )}
    </div>
  );
};

export default Text;
