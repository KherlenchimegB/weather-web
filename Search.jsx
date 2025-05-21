import { useState, useEffect } from "react";
import { Search } from "lucide-react";
const allSities = [];
const SearchBox = () => {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [weather, setWeather] = useState({});
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Ulan bator");

  useEffect(() => {
    setIsLoading(true);
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((response) => response.json())
      .then((countryData) => {
        setCountryData(countryData.data);
        console.log("country data", countryData);
      });
  }, []);

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
        className="w-full border-none"
        onChange={(e) => {
          props.setInputSearch(e.target.value);
        }}
        // onKeyDown={(event) => {
        //   props.searchKeyDown(event);
        // }}
      />
      {/* <div>{countryData?.data[0]?.cities[0]}</div> */}
    </div>
  );
};
export default SearchBox;
