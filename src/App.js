import React from "react";

import StockTabel from "./StockTable";
const StockChart = React.lazy(() =>
  import(/* webpackChunkName: 'StockChart' */ "./StockChart")
);

class App extends React.Component {
  state = {
    selectedStock: null
  };

  render() {
    const { selectedStock } = this.state;
    const { stocks } = this.props;

    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <StockTabel
          stocks={stocks}
          onSelect={selectedStock => this.setState({ selectedStock })}
        />
        {selectedStock ? (
          <StockChart
            stock={selectedStock}
            onClose={() => this.setState({ selectedStock: false })}
          />
        ) : null}
      </React.Suspense>
    );
  }
}

export default App;
