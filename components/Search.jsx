import { useState, useEffect } from "react";
import { Import, Search } from "lucide-react";

const SearchBox = () => {
  const handleCityClick = (cityName) => {
    setSelectedCity(cityName);
  };
  // const searchKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     searchByName();
  //   }
  // };

  return (
    <div className="absolute flex justify-start items-center gap-3 w-1/3 h-18 border-none rounded-full text-4xl bg-white font-extrabold pr-3 z-1 text-gray-400 top-[50px] left-[50px]">
      <Search className="w-[48px] h-[48px] pl-2.5" />
      <input
        type="search"
        placeholder="Search..."
        className="w-full text-4xl border-none outline-none"
        onChange={(e) => {
          props.setSearchValue(e.target.value.toLowerCase());
        }}
        value={searchValue}
        // onKeyDown={(event) => {
        //   props.searchKeyDown(event);
        // }}
      />
      {/* <div>{countryData?.data[0]?.cities[0]}</div> */}
      {filteredCities.map((city) => {
        return (
          <div
            key={city.name + city.country}
            className="hover:bg-[#9b9b9bcc] cursor-pointer "
            onClick={() => handleCityClick(city.name)}
          >
            {city.name}, {city.country}
          </div>
        );
      })}
    </div>
  );
};
export default SearchBox;
