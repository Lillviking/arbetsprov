import React, { ReactNode, createContext, useState } from "react";

// Create a type for your data
export type CoordinateDataType = {
    latitude: number | null;
    longitude: number | null;
};

// Create a context with an empty initial state
export const CoordinateDataContext = createContext<{
    coordinateData: CoordinateDataType | null;
    setCoordinateData: React.Dispatch<React.SetStateAction<CoordinateDataType | null>>;
} | null>(null);

interface ICoordinateDataProvider {
    children: ReactNode; // Type children explicitly if not using React.FC
}

export const CoordinateDataProvider: React.FC<ICoordinateDataProvider> = ({
    children,
}) => {
    const [coordinateData, setCoordinateData] = useState<CoordinateDataType | null>(null);

    // The value to be provided to child components
    const value = { coordinateData, setCoordinateData };

    return (
        <CoordinateDataContext.Provider value={value}>
            {children}
        </CoordinateDataContext.Provider>
    );
};
