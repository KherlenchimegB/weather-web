import Daily from "@/components/Daily";
import Night from "./night";
import Day from "./day";
import { useEffect, useState } from "react";
// import { Search } from "lucide-react";
import SearchBox from "@/components/Search";

const weatherApiKey = "899d9c2c0f5845838dc70138240912";

export default function Home() {
  const [weatherData, setWeatherData] = useState();
  const [cityName, setCityName] = useState("Tokyo");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${cityName}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        console.log("weather data", data);
      });
  }, []);
  return (
    <div className="relative flex items-center justify-center h-screen w-screen border-none rounded-md">
      <SearchBox />
      {/* <Day /> */}
      <div className="relative flex flex-col justify-center items-center w-1/2  h-full border-none rounded-xl bg-[#F3F4F6]">
        <img
          src="./orange.png"
          alt="orange"
          className="absolute left-[280px] top-[90px] z-0 "
        />

        <Daily
          date={weatherData?.forecast.forecastday[0].date}
          cityName={weatherData?.location.name}
          dailyNews={
            weatherData?.forecast.forecastday[0].hour[14].condition.text
          }
          dailyCelsium={weatherData?.forecast.forecastday[0].hour[14].temp_c}
          dayIcon={weatherData?.forecast.forecastday[0].hour[14].condition.icon}
          isLight={true}
        />
      </div>
      {/* <Night /> */}
      <div
        className="relative flex flex-col justify-center items-center w-1/2  h-full border-none rounded-xl bg-black-400
         bg-no-repeat bg-cover bg-center "
        style={{ backgroundImage: `url("./bg-black.png")` }}
      >
        <img
          src="./purple.svg"
          alt="purple"
          className="absolute right-[280px] bottom-[50px] z-0 w-[180px]"
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
      {/* circles, vector */}
      <div className="flex relative justify-center items-center bg-white rounded-full z-0">
        <img
          src="./vector-left.png"
          alt="vector"
          className="absolute h-[100px]"
        />
        <img
          src="./vector-right.png"
          alt="vector"
          className="absolute h-[100px]"
        />
      </div>
      <div className="border border-gray-300 rounded-full w-[540px] -translate-x-1/2 -translate-y-1/2 h-[540px] absolute top-1/2 left-1/2 "></div>
      <div className="border border-gray-300 rounded-full w-[340px] -translate-x-1/2 -translate-y-1/2 h-[340px] absolute top-1/2 left-1/2 "></div>
      <div className="border border-gray-300 rounded-full w-[140px] -translate-x-1/2 -translate-y-1/2 h-[140px] absolute top-1/2 left-1/2 "></div>
      <div className="border border-gray-300 rounded-full w-[940px] -translate-x-1/2 -translate-y-1/2 h-[940px] absolute top-1/2 left-1/2 z-0"></div>
    </div>
  );
}
