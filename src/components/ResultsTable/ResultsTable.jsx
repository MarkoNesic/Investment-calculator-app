import classes from "./ResultsTable.module.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const ResultsTable = (props) => {
  return (
    <div>
      <table className={classes.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((yeatData) => (
            <tr key={yeatData.year}>
              <td>{yeatData.year}</td>
              <td>{formatter.format(yeatData.savingsEndOfYear)}</td>
              <td>{formatter.format(yeatData.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  yeatData.savingsEndOfYear -
                    props.initialInvestment -
                    yeatData.yearlyContribution * yeatData.year
                )}
              </td>
              <td>
                {formatter.format(
                  props.initialInvestment +
                    yeatData.yearlyContribution * yeatData.year
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
