import React, { useState } from "react";

const TextHeader = () => {
  const [paragraphs, setParagraphs] = useState(4);
  const [includeHTML, setIncludeHTML] = useState("text");

  const handleChangeParagraphs = (e) => {
    setParagraphs(e.target.value);
  };
  const handleChangeIncludeHTML = (e) => {
    setIncludeHTML(e.target.value);
  };
  return (
    <div className="flex">
      <div className="flex flex-col">
        <label htmlFor="paragraphs">Paragraphs</label>
        <input
          className="border-2 border-black rounded"
          onChange={(e) => {
            handleChangeParagraphs(e);
          }}
          value={paragraphs}
          type="number"
          id="paragraphs"
          name="paragraphs"
        />
      </div>
      <div className="flex flex-col ml-5">
        <label htmlFor="">Include HTML</label>
        <select
          className="border-2 border-black"
          onChange={handleChangeIncludeHTML}
        >
          <option value="text">No</option>
          <option value="html">Yes</option>
        </select>
      </div>
    </div>
  );
};

export default TextHeader;
