import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/card";
import WeatherIconGenerator from "../components/weatherIconGenerator";
import { WeatherDataContext } from "../context/WeatherDataContext";

const StyledButton = styled.button`
  color: #363535;
  margin-top: 5%;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
`;
interface Parameter {
  name: string;
  values: number[];
  unit: string;
}

const Home = () => {
  const [forecast, setForecast] = useState<any>(null);
  // lat long for Sundsvall
  const [latitude, setLatitude] = useState<number>(62.39);
  const [longitude, setLongitude] = useState<number>(17.3);

  const [weatherSymbol, setWeatherSymbol] = useState<number>(1);
  const [temperatureValue, setTemperatureValue] = useState<number>(0);
  const weatherContext = useContext(WeatherDataContext);

  const formatWeatherData = (data: any) => {
    const parameters = data.timeSeries[0].parameters as Parameter[];

    const formattedData = parameters.reduce((acc: any, param) => {
      acc[param.name] = {
        value: param.values[0],
        unit: param.unit,
      };
      return acc;
    }, {});

    return formattedData;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // hämta data från SMHI
        const endPoint = `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${longitude.toFixed(
          6
        )}/lat/${latitude.toFixed(6)}/data.json`;
        const response = await fetch(endPoint);
        const data = await response.json();

        const formattedData = formatWeatherData(data);
        console.log(formattedData, "formatted data");

        console.log(formattedData.t.value, "formatted data");
        console.log(formattedData.Wsymb2.value, "formatted data symbol");

        if (weatherContext) {
          const chosenWeatherParameters = {
            temperatureValue: formattedData.t.value, // Ersätt med riktig data
            weatherSymbol: formattedData.Wsymb2.value, // Ersätt med riktig data
          };

          weatherContext?.setWeatherData(chosenWeatherParameters);
        }

        const firstDataobject = data.timeSeries[0].parameters.map(
          (p: any) => p
        );
        console.log(firstDataobject, "first object");

        console.log(data.timeSeries[0].parameters[0].values[0]);
        const temperatureValue = data.timeSeries[0].parameters.find(
          (p: any) => p.name === "t"
        )?.values[0];
        const weatherSymbol = data.timeSeries[0].parameters.find(
          (p: any) => p.name === "Wsymb2"
        )?.values[0];
        setWeatherSymbol(weatherSymbol);
        setTemperatureValue(temperatureValue);
        console.log(temperatureValue);
        console.log(weatherSymbol);
        setForecast(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [latitude, longitude]);

  return (
    <>
      <Card>
        {" "}
        <h1>SUNDSVALL</h1>
        <WeatherIconGenerator icon={weatherSymbol} />
        <h1>{temperatureValue}°C</h1>
        <Link to="/details">
          <StyledButton>DETALJERAD VÄDERINFORMATION</StyledButton>
        </Link>
        <Link to="/Idontknowyet">
          <StyledButton>BYT PLATS</StyledButton>
        </Link>
      </Card>

      <Outlet />
    </>
  );
};

export default Home;
