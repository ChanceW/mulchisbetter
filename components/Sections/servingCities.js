import classes from "./servingCities.module.css";
import { GeoAlt, ArrowBarUp } from "react-bootstrap-icons";
import { Data } from "../../data";

export const ServingCites = (props) => {
  return (
    <div id="serving" className={classes.main}>
      <div className={classes.title}>Serving Cities</div>
      <div className={classes.imgDiv}>
        <GeoAlt />
      </div>
      <div className={classes.locations}>
        {Data.locations.map((l, idx) => {
          return (
            <div key={`state_${idx}`}>
              <div className={classes.state}>{l.state}</div>
              {l.cities.map((c, idx2) => {
                return (
                  <div key={`city_${idx2}`} className={classes.city}>
                    {c}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <a href="#Products" title="Scroll Up" className={`btn ${classes.home}`}>
        <ArrowBarUp />
      </a>
    </div>
  );
};
