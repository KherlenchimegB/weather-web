import Daily from "@/components/Daily";
import { useEffect, useState } from "react";
// import SearchBox from "./components/Search";
import { Search, MapPin } from "lucide-react";

const weatherApiKey = "899d9c2c0f5845838dc70138240912";

export default function Home() {
  const [weatherData, setWeatherData] = useState();
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Ulan bator");
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        console.log("weather data", data);
      });
  }, [selectedCity]);

  useEffect(() => {
    fetchCountriesData();
  }, []);

  useEffect(() => {
    let searchResults = [];
    countries?.map((country) => {
      return country?.cities?.map((city) => {
        if (city.toLowerCase().includes(searchValue)) {
          searchResults.push({ name: city, country: country.country });
        }
      });
    });

    setFilteredCities(searchResults.slice(0, 5));
  }, [searchValue]);

  const fetchCountriesData = () => {
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.data);
      });
  };

  const handleCityClick = (cityName) => {
    setSelectedCity(cityName);
    setSearchValue("");
    setFilteredCities([]);
  };

  return (
    <div className="relative flex items-center justify-center w-screen h-screen border-amber-400 bg-[#F3F4F6]">
      {/* <Day /> */}
      <div className=" flex flex-col justify-center items-center w-1/2  h-full border-red-400 bg-[#F3F4F6]">
        <div className="relative flex items-center justify-center w-[420px] border-none h-[900px]">
          <img
            src="./orange.png"
            alt="sun"
            className="absolute -left-[70px] -top-[50px] z-0 w-[200px]"
          />

          <Daily
            date={weatherData?.forecast.forecastday[0].date}
            cityName={weatherData?.location.name}
            dailyNews={
              weatherData?.forecast.forecastday[0].hour[14].condition.text
            }
            dailyCelsium={weatherData?.forecast.forecastday[0].hour[14].temp_c}
            dayIcon={
              weatherData?.forecast.forecastday[0].hour[14].condition.icon
            }
            isLight={true}
          />

          <div className="absolute flex justify-start items-center gap-3 w-[568px] h-18 border-none rounded-full text-4xl bg-white font-extrabold pr-3 z-20 text-gray-400 -top-[50px] -left-[150px]">
            <Search className=" w-[48px] h-[48px] pl-2.5" />
            <input
              type="search"
              placeholder="Search..."
              className=" relative w-full text-2xl border-none outline-none"
              onChange={(e) => {
                setSearchValue(e.target.value.toLowerCase());
              }}
              value={searchValue}
              // onKeyDown={(event) => {
              //   handleCityClick(event);
              // }}
            />

            {/* dropdown element */}
            {searchValue != "" && (
              <div className="w-[568px] flex flex-col p-4 absolute top-[80px] left-0 bg-[#FFFFFFCC] rounded-2xl shadow-sm gap-2 z-30">
                {filteredCities.map((city) => {
                  return (
                    <div
                      key={city.name + city.country}
                      className=" hover:bg-[#9b9b9bcc] cursor-pointer w-full flex items-center gap-4 text-black px-6 text-[28px]"
                      onClick={() => handleCityClick(city.name)}
                    >
                      <MapPin color="gray" /> {city.name}, {city.country}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        {/* Search */}
      </div>

      {/* <Night /> */}
      <div className="relative z-10 flex flex-col items-center justify-center w-1/2 h-full bg-[#0F141E] border-white rounded-xl ">
        {/* circles, vector */}
        <div className=" bg-[#F3F4F6]  w-[140px]  -translate-y-1/2 h-[252px] absolute top-1/2 left-[-70px] z-15">
          <div className="absolute rounded-full flex bg-[#0F141E] right-0 top-[-32.5px] h-[95px] w-[70px]"></div>
          <div className="absolute flex bg-[#0F141E] rounded-full right-0 h-[95px] w-[70px] top-[189.5px]"></div>
          <div className="absolute flex bg-[#0F141E] left-[97px] top-[30px] w-[90px] h-[197px]"></div>
          <div className="border border-gray-300 rounded-full w-[540px] -translate-x-1/2 -translate-y-1/2 h-[540px] absolute top-1/2 left-1/2 z-15"></div>
          <div className="border border-gray-300 rounded-full w-[340px] -translate-x-1/2 -translate-y-1/2 h-[340px] absolute top-1/2 left-1/2 z-15"></div>
          <div className="border border-gray-300 rounded-full w-[940px] -translate-x-1/2 -translate-y-1/2 h-[940px] absolute top-1/2 left-1/2 z-15"></div>

          <div className="absolute flex items-center justify-center border border-gray-300 r bg-[#F3F4F6] rounded-full w-[140px] h-[140px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-15 gap-4">
            <img src="./vector-right.png" alt="vector" className=" h-[90px] " />
            <img src="./vector-left.png" alt="vector" className=" h-[90px]" />
          </div>
        </div>
        <div className="relative w-[568px] h-[900px] flex justify-center items-center">
          <img
            src="./purple.svg"
            alt="purple"
            className="absolute right-[10px] bottom-[-40px] z-0 w-[150px]"
          />

          <Daily
            date={weatherData?.forecast.forecastday[0].date}
            cityName={weatherData?.location.name}
            nightNews={
              weatherData?.forecast.forecastday[0].hour[21].condition.text
            }
            nightCelsium={weatherData?.forecast.forecastday[0].hour[21].temp_c}
            nightIcon={
              weatherData?.forecast.forecastday[0].hour[21].condition.icon
            }
            isLight={false}
          />
        </div>
      </div>
    </div>
  );
}
