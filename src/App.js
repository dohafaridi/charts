import React from "react";

import StockTabel from "./StockTable";
import StockChart from "./StockChart";

class App extends React.Component {
  state = {
    selectedStock: null
  };

  render() {
    const { selectedStock } = this.state;
    const { stocks } = this.props;

    return (
      <>
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
      </>
    );
  }
}

export default App;
