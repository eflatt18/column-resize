import React from "react";
import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid"

import "./styles.css";
const {
  DraggableHeader: { DraggableContainer }
} = require("react-data-grid-addons");



class Example extends React.Component {
  createRows = () => {
    let rows = [];
    for (let i = 1; i < 15; i++) {
      rows.push({
        id: i,
        title: "Title " + i,
        count: i + 1,
        firstName: "Name",


      });
    }

    return rows;
  };

  rowGetter = i => {
    return this.state.rows[i];
  };

  onHeaderDrop = (source, target) => {
    const stateCopy = Object.assign({}, this.state);
    const columnSourceIndex = this.state.columns.findIndex(
      i => i.key === source
    );
    const columnTargetIndex = this.state.columns.findIndex(
      i => i.key === target
    );

    stateCopy.columns.splice(
      columnTargetIndex,
      0,
      stateCopy.columns.splice(columnSourceIndex, 1)[0]
    );

    const emptyColumns = Object.assign({}, this.state, { columns: [] });
    this.setState(emptyColumns);

    const reorderedColumns = Object.assign({}, this.state, {
      columns: stateCopy.columns
    });
    this.setState(reorderedColumns);
  };

  state = {
    columns: [
      {
        key: "id",
        name: "ID",
        width: 300,
        draggable: true,
        resizable: true,



      },
      {
        key: "title",
        name: "Title",
        draggable: true,
        resizable: true,
        width: 300,

      },
      {
        key: "count",
        name: "Count",
        draggable: true,
        resizable: true,
        width: 300
      },
      {
        key: "firstName",
        name: "First Name",
        width: 300,
        draggable: true,
        resizable: true,
        extraClasses:"test"


  },

  {
    key: "firstName",
    name: "First Name",
    width: 300,
    draggable: true,
    resizable: true,
    extraClasses:"test"


}

    ],
    rows: this.createRows()
  };



  render() {
    return (
      <DraggableContainer onHeaderDrop={this.onHeaderDrop}>

        <ReactDataGrid id="test"
          columns={this.state.columns}
          rowGetter={this.rowGetter}
          rowsCount={this.state.rows.length}
          minHeight={500}
          minWidth={1215}
          isRowHovered={false}
        />

      </DraggableContainer>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Example />, rootElement);
