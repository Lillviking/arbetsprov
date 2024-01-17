import React, { ReactNode, createContext, useState } from "react";

// Skapa en typ för din data
export type WeatherDataType = {
  temperatureValue: number;
  weatherSymbol: number;
};

// Skapa en kontext med en tom initial state
export const WeatherDataContext = createContext<{
  weatherData: WeatherDataType | null;
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherDataType | null>>;
} | null>(null);

interface IWeatherDataProvider {
  children: ReactNode; // Typa children explicit om du inte använder React.FC
}

export const WeatherDataProvider: React.FC<IWeatherDataProvider> = ({
  children,
}) => {
  const [weatherData, setWeatherData] = useState<WeatherDataType | null>(null);

  // Värdet som kommer att tillhandahållas till barnkomponenterna
  const value = { weatherData, setWeatherData };

  return (
    <WeatherDataContext.Provider value={value}>
      {children}
    </WeatherDataContext.Provider>
  );
};
