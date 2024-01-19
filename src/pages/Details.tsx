import { useContext } from "react";
import Card from "../components/card";
import { WeatherDataContext } from "../context/WeatherDataContext";

const Details = () => {
  const context = useContext(WeatherDataContext);

  console.log("context", context);
  

  if (!context || !context.weatherData) {
    return <div>Ingen väderinformation tillgänglig</div>;
  }

  const { weatherData } = context;

  return (
    <Card>
    <div>
      <h1>Vädret i detalj</h1>
      <table>
        <tbody>
          <tr>
            <td>Temperatur:</td>
            <td>{weatherData?.temperature.value}</td>
            <td>{weatherData?.temperature.unit}</td>
          </tr>
          <tr>
            <td>Vindhastighet:</td>
            <td>{weatherData?.windSpeed.value}</td>
            <td>{weatherData?.windSpeed.unit}</td>
          </tr>
          <tr>
            <td>Wind Direction:</td>
            <td>{weatherData?.windDirection.value}</td>
            <td>{weatherData?.windDirection.unit}</td>
          </tr>
          <tr>
            <td>Relativ luftfuktighet:</td>
            <td>{weatherData?.relativeHumidity.value}</td>
            <td>{weatherData?.relativeHumidity.unit}</td>
          </tr>
          <tr>
            <td>Regnkategori:</td>
            <td>{weatherData?.precipitationCategory.value}</td>
            <td>{weatherData?.precipitationCategory.unit}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </Card>
  );
};

export default Details; 
