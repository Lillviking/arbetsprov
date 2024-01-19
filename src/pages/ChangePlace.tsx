import { Link } from "react-router-dom";
import Card from "../components/card";
import Map from "../components/map";
import { GlobalButton } from "../styles/globalStyleComponents";

const ChangePlace = () => {
    return (
      <div>
        <Card><h1>Byt plats</h1>
          <Map /> 
          <Link to="/"><GlobalButton>&laquo; Tillbaka</GlobalButton>
          </Link></Card>
      </div>
    );
  };

export default ChangePlace;  