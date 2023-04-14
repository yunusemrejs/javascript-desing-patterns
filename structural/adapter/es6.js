class DataTable {
  constructor(table) {
    this.table = table;
  }

  setData(data) {
    this.table.innerHTML = '';
    const rows = data.map(row => {
      let rowHTML = '<tr>';
      for (const value of Object.values(row)) {
        rowHTML += `<td>${value}</td>`;
      }
      rowHTML += '</tr>';
      return rowHTML;
    });
    this.table.innerHTML = rows.join('');
  }
}

class JSONAdapter {
  constructor(json) {
    this.json = json;
  }

  getData() {
    const data = JSON.parse(this.json);
    const tableData = data.map(row => {
      const tableRow = {};
      for (const key of Object.keys(row)) {
        tableRow[key] = row[key];
      }
      return tableRow;
    });
    return tableData;
  }
}


const json = '[{"name": "John", "age": 30}, {"name": "Jane", "age": 25}]';
const adapter = new JSONAdapter(json);
const table = new DataTable(document.getElementById('myTable'));
table.setData(adapter.getData());
