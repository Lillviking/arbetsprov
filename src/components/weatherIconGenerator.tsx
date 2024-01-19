import { Cloud, CloudRain, CloudSnow, CloudSun, Sun, Zap } from "lucide-react";
import React from "react";

interface WeatherIconGeneratorProps {
  icon: number;
}

const WeatherIconGenerator: React.FC<WeatherIconGeneratorProps> = ({
  icon,
}) => {
  const weatherIcons: { [key: number]: JSX.Element } = {
    1: <Sun size={150} />,
    2: <CloudSun size={150} />,
    3: <CloudSun size={150} />,
    4: <CloudSnow size={150} />,
    5: <Zap size={150} />,
    6: <Cloud size={150} />,
    7: <Cloud size={150} />,
    8: <CloudRain size={150} />,
    9: <CloudRain size={150} />,
    10: <CloudRain size={150} />,
    11: <Zap size={150} />,
    12: <CloudSnow size={150} />,
    13: <CloudSnow size={150} />,
    14: <CloudSnow size={150} />,
    15: <CloudSnow size={150} />,
    16: <CloudSnow size={150} />,
    17: <CloudSnow size={150} />,
    18: <CloudRain size={150} />,
    19: <CloudRain size={150} />,
    20: <CloudRain size={150} />,
    21: <Zap size={150} />,
    22: <CloudSnow size={150} />,
    23: <CloudSnow size={150} />,
    150: <CloudSnow size={150} />,
    25: <CloudSnow size={150} />,
    26: <CloudSnow size={150} />,
    27: <CloudSnow size={150} />,
  };

  const getWeatherIcon = (icon: number) => {
    return weatherIcons[icon] || null;
  };

  return <div>{getWeatherIcon(icon)}</div>;
};

export default WeatherIconGenerator;
