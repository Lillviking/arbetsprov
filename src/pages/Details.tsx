import { useContext } from "react";
import Card from "../components/card";
import { WeatherDataContext } from "../context/WeatherDataContext";

const Details = () => {
  const context = useContext(WeatherDataContext);

  if (!context || !context.weatherData) {
    return <div>Ingen väderinformation tillgänglig</div>;
  }

  const { weatherData } = context;

  return (
    <Card>
      <h1>{weatherData.weatherSymbol}</h1>
    </Card>
  );
};

export default Details;
