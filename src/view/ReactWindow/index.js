import React from "react";
import { VariableSizeList as List } from "react-window";
import Fullpage from "react-virtualized-auto-sizer";
import "./style.css";

export default class A extends React.Component {
  constructor(props){
    super(props)
    this.state={
    }
    this.index = 1;
  }
  next = () => {
    this.list.scrollToItem(this.index);
    this.index++;
  }

  render() {

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
      <>
      <div style={{ height: "600px", border:'1px silid #000' }}>
        <Fullpage>
          {({height, width}) => {
            console.log(height);
            return (
              <List
                className="List"
                ref={s => this.list = s}
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
      <button onClick={this.next}>下一个下一个</button>
      </>
    );
  }
}
