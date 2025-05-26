import Daily from "@/components/Daily";
import { Search } from "lucide-react";
import data from "./index.jsx";
import { useState } from "react";
const Day = () => {
  const { inputSearch, setInputSearch } = useState("");
  const { filteredData, setFilteredData } = useState();
  const searchKeyDown = (event) => {
    if (event.key === "Enter") {
      searchByName();
    }
  };
  const searchByName = () => {
    let filteredData = data.include((data) => data.name === inputSearch);
    setFilteredData(filteredData);
  };
  return (
    <div className="relative flex flex-col justify-center items-center w-1/2  h-full border rounded-xl bg-[#F3F4F6]">
      <img
        src="./orange.png"
        alt="orange"
        className="absolute left-[280px] top-[90px] z-0 "
      />
      <div className="flex justify-start items-center gap-3 w-1/2 h-18 border rounded-full text-4xl bg-white font-extrabold pr-3 z-1 text-gray-400">
        <Search className="w-[48px] h-[48px] pl-2.5" />
        <input
          type="search"
          placeholder="Search..."
          className="w-full border-none"
          onChange={(e) => {
            props.setInputSearch(e.target.value);
          }}
          onKeyDown={(event) => {
            props.searchKeyDown(event);
          }}
        />
      </div>
      <Daily {...data} isLight={true} />
    </div>
  );
};
export default Day;
