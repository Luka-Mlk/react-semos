import React from "react";

export class DateClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = [];
  }
  _addDate() {
    let date = new Date().toString();
    let dates = [];
    dates.push(date);
    this.setState(dates);
  }
  render() {
    return (
      <div>
        <div>
          <button onClick={this._addDate}>Add date</button>
        </div>
      </div>
    );
  }
}
