import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/card";
import WeatherIconGenerator from "../components/weatherIconGenerator";
import { WeatherDataContext } from "../context/WeatherDataContext";
import { FlexContainerRow, GlobalButton } from "../styles/globalStyleComponents";

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
  // lat long for Sundsvall
  const [latitude, setLatitude] = useState<number>(62.39);
  const [longitude, setLongitude] = useState<number>(17.3);

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
        // fetch weather data from SMHI
        const endPoint = `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${longitude.toFixed(
          6
        )}/lat/${latitude.toFixed(6)}/data.json`;
        const response = await fetch(endPoint);
        const data = await response.json();
        const formattedData = formatWeatherData(data);

        console.log(formattedData, "formattedData");

        // set context data
        if (weatherContext) {
          const chosenWeatherParameters = {
            temperature: {
              value: formattedData.t.value,
              unit: formattedData.t.unit,
            },
            weatherSymbol: {
              value: formattedData.Wsymb2.value,
              unit: formattedData.Wsymb2.unit,
            },
            windSpeed: {
              value: formattedData.ws.value,
              unit: formattedData.ws.unit,
            },
            windDirection: {
              value: formattedData.wd.value,
              unit: formattedData.wd.unit,
            },
            relativeHumidity: {
              value: formattedData.r.value,
              unit: formattedData.r.unit,
            },
            precipitationCategory: {
              value: formattedData.pcat.value,
              unit: formattedData.pcat.unit,
            },
          };

          weatherContext?.setWeatherData(chosenWeatherParameters);
        }
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
        <h1>Sundsvall</h1>
        <WeatherIconGenerator icon={weatherContext?.weatherData?.weatherSymbol.value || 1} />
        <h1>{weatherContext?.weatherData?.temperature.value || 0}°C</h1>
        <FlexContainerRow>
          <Link to="/details">
            <GlobalButton>Vädret i detalj</GlobalButton>
          </Link>
          <Link to="/changePlace">
            <GlobalButton>Byt plats</GlobalButton>
          </Link>
        </FlexContainerRow>
      </Card>

      <Outlet />
    </>
  );
};

export default Home;
