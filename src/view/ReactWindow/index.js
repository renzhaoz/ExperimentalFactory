import React from "react";
import { VariableSizeList as List } from "react-window";
import Fullpage from "react-virtualized-auto-sizer";
import "./style.css";

export default class A extends React.Component {
  render() {
    // These row heights are arbitrary.
    // Yours should be based on the content of the row.
    const rowSizes = new Array(1000)
      .fill(true)
      .map(() => 25 + Math.round(Math.random() * 50));

    const getItemSize = (index, ...b) => {
      console.log(index, b);
      return Math.random() > 0.5 ? 20 : 60;
    };

    const Row = ({ index, style }) => (
      <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
        Row {index}
      </div>
    );
    return (
      <div style={{ height: "600px", border:'1px silid #000' }}>
        <Fullpage>
          {({height, width}) => {
            console.log(height);
            return (
              <List
                className="List"
                height={height}
                itemCount={1000}
                itemSize={getItemSize}
                width={width}
              >
                {Row}
              </List>
            );
          }}
        </Fullpage>
      </div>
    );
  }
}
