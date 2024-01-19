import { useContext } from "react";
import Card from "../components/card";
import { WeatherDataContext } from "../context/WeatherDataContext";
import styled from "styled-components";

const Table = styled.table`
border-spacing: 1.2rem;
`;

interface ITableCell {
  textAlign?: string;
}

const TableCell = styled.td<ITableCell>`
  text-align: ${(props) => props.textAlign || "right"};
`;

const categoryTranslation: { [key: number]: string } = {
  0: "Ingen nederbörd",
  1: "Snö",
  2: "Snöblandat regn",
  3: "Regn",
  4: "Duggregn",
  5: "Underkylt regn",
  6: "Underkylt duggregn",
}

const getCategoryTranslation = (category: number) => {
  return categoryTranslation[category] || "Ingen nederbörd";
}

const Details = () => {
  const context = useContext(WeatherDataContext);
  
  if (!context || !context.weatherData) {
    return <div>Ingen väderinformation tillgänglig</div>;
  }

  const { weatherData } = context;

        return (
          <Card>
            <div>
              <h1>Vädret i detalj</h1>
              <Table>
                <tbody>
                  <tr>
                    <TableCell textAlign="left">Temperatur:</TableCell>
                    <TableCell>{weatherData?.temperature.value}{" "}°C</TableCell>
                  </tr>
                  <tr>
                    <TableCell textAlign="left">Vindhastighet:</TableCell>
                    <TableCell>
                      {weatherData?.windSpeed.value} {weatherData?.windSpeed.unit}
                    </TableCell>
                  </tr>
                  <tr>
                    <TableCell textAlign="left">Vindriktning:</TableCell>
                    <TableCell>{weatherData?.windDirection.value}°</TableCell>
                  </tr>
                  <tr>
                    <TableCell textAlign="left">Relativ luftfuktighet:</TableCell>
                    <TableCell>
                      {weatherData?.relativeHumidity.value}{" "}%
                    </TableCell>
                  </tr>
                  <tr>
                    <TableCell textAlign="left">Typ av nederbörd:</TableCell>
                    <TableCell>
                      {getCategoryTranslation(weatherData?.precipitationCategory?.value || 0)} 
                    </TableCell>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card>
        );
      };

export default Details; 
