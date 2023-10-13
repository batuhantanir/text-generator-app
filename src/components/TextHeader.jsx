import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeIncludeHTML, getParagraph } from "../store/Slices/getParagraph";

const TextHeader = () => {
  const dispatch = useDispatch();
  const [paragraphs, setParagraphs] = useState(4);
  const [includeHTML, setIncludeHTML] = useState("text");

  const handleChangeParagraphs = (e) => {
    setParagraphs(e.target.value);
  };
  const handleChangeIncludeHTML = (e) => {
    setIncludeHTML(e.target.value);
    dispatch(changeIncludeHTML(e.target.value));
  };

  useEffect(() => {
    dispatch(getParagraph({ paragraphs, includeHTML }));
  }, [paragraphs, includeHTML]);
  return (
    <div className="flex">
      <div className="flex flex-col">
        <label htmlFor="paragraphs">Paragraphs</label>
        <input
          className="border-2 p-1  border-black rounded text-black"
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
        <label htmlFor="includeHTML">Include HTML</label>
        <select
          className="border-2 max-w-fit p-1 rounded border-black text-black"
          id="includeHTML"
          value={includeHTML}
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
