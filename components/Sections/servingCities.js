import classes from "./servingCities.module.css";
import { GeoAlt } from "react-bootstrap-icons";

const location = [
  {
    state: "Georgia",
    cities: [
      "Buford",
      "Suwanee",
      "Duluth",
      "Lawrenceville",
      "Alpharetta",
      "Norcross",
      "Lilburn",
      "Snellville",
      "Gainesville",
      "Winder",
      "Roswell",
      "Loganville",
      "Doraville",
      "Tucker",
      "Dunwoody",
    ],
  },
];

export const ServingCites = (props) => {
  return (
    <div id="ServingCities" className={classes.main}>
      <div className={classes.title}>Serving Cities</div>
      <div className={classes.imgDiv}>
        <GeoAlt />
      </div>
      <div className={classes.locations}>
        {location.map((l, idx) => {
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
    </div>
  );
};
