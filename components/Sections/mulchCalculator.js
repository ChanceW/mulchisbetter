import classes from "./mulchCalculator.module.css";
import { Calculator, ArrowBarUp } from "react-bootstrap-icons";
import DataGrid from "react-data-grid";

const getCalculations = () => {
  let result = [];
  let sqft = 100;
  const inches = [1, 2, 3, 4];
  while (sqft <= 1000) {
    let row = { sqft: sqft.toString() };
    for (let inch of inches) {
      const eq = (sqft / 12 / 27) * inch;
      row[inch] = eq < 1 ? "1.0" : eq.toFixed(1);
    }
    result.push(row);
    sqft += 50;
  }
  return result;
};

const columns = [
  { key: "sqft", name: "SqFt", resizable: true },
  { key: "1", name: '1"', resizable: true },
  { key: "2", name: '2"', resizable: true },
  { key: "3", name: '3"', resizable: true },
  { key: "4", name: '4"', resizable: true },
];

export const MulchCalculator = () => {
  const data = getCalculations();
  return (
    <div id="calculator" className={classes.main}>
      <div className={classes.title}>Mulch calculator</div>
      <div className={classes.imgDiv}>
        <Calculator />
      </div>
      <div className="my-4 w-50 mx-auto">
        <DataGrid
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
