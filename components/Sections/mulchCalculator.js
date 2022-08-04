import classes from "./mulchCalculator.module.css";
import { Calculator, ArrowBarUp } from "react-bootstrap-icons";
import DataGrid from "react-data-grid";

const getCalculations = () => {
  let result = [];
  let sqft = 100;
  const inches = [2, 3, 4];
  while (sqft <= 1000) {
    let row = { sqft: sqft.toString() };
    for (let inch of inches) {
      const eq = (sqft / 12 / 27) * inch;
      row[inch] = eq < 1 ? "1.0" : (Math.round(eq * 2) / 2).toFixed(1);
    }
    result.push(row);
    sqft += 50;
  }
  return result;
};

const columns = [
  {
    key: "sqft",
    name: "SqFt",
    resizable: true,
    width: 100,
    formatter(props) {
      return <div className={classes.sqftCell}>{props.row.sqft}</div>;
    },
  },
  { key: "2", name: '2"', width: "28.5%", resizable: true },
  { key: "3", name: '3"', width: "28.5%", resizable: true },
  { key: "4", name: '4"', width: "28.5%", resizable: true },
];

export const MulchCalculator = () => {
  const data = getCalculations();
  return (
    <div id="calculator" className={classes.main}>
      <div className={classes.title}>Mulch Calculator</div>
      <div className={classes.imgDiv}>
        <Calculator />
      </div>
      <div className={classes.gridContainer}>
        <DataGrid
          className={classes.grid}
          columns={columns}
          rows={data}
          style={{ resize: "both", width: "100%", height: "45%" }}
        />
      </div>
      <a href="#Products" title="Scroll Up" className={`btn ${classes.home}`}>
        <ArrowBarUp />
      </a>
    </div>
  );
};
