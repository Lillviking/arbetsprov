import React, { ReactNode, createContext, useState } from "react";

export type CoordinateDataType = {
  latitude: number;
  longitude: number;
  name?: string;
};

export const CoordinateDataContext = createContext<{
  coordinateData: CoordinateDataType;
  setCoordinateData: React.Dispatch<React.SetStateAction<CoordinateDataType>>;
}>({
  coordinateData: { latitude: 62.38, longitude: 17.3, name: "Sundsvall" },
  setCoordinateData: () => {},
});

interface ICoordinateDataProvider {
  children: ReactNode;
}

export const CoordinateDataProvider: React.FC<ICoordinateDataProvider> = ({
  children,
}) => {
  const [coordinateData, setCoordinateData] = useState<CoordinateDataType>({
    latitude: 62.38,
    longitude: 17.3,
    name: "Sundsvall",
  });

  const value = { coordinateData, setCoordinateData };

  return (
    <CoordinateDataContext.Provider value={value}>
      {children}
    </CoordinateDataContext.Provider>
  );
};
