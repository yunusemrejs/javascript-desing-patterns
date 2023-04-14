function DataTable(table) {
  this.table = table;
}

DataTable.prototype.setData = function(data) {
  this.table.innerHTML = '';
  var rows = data.map(function(row) {
    var rowHTML = '<tr>';
    for (var i in row) {
      if (row.hasOwnProperty(i)) {
        rowHTML += '<td>' + row[i] + '</td>';
      }
    }
    rowHTML += '</tr>';
    return rowHTML;
  });
  this.table.innerHTML = rows.join('');
};

function JSONAdapter(json) {
  this.json = json;
}

JSONAdapter.prototype.getData = function() {
  var data = JSON.parse(this.json);
  var tableData = data.map(function(row) {
    var tableRow = {};
    for (var i in row) {
      if (row.hasOwnProperty(i)) {
        tableRow[i] = row[i];
      }
    }
    return tableRow;
  });
  return tableData;
};


var json = '[{"name": "John", "age": 30}, {"name": "Jane", "age": 25}]';
var adapter = new JSONAdapter(json);
var table = new DataTable(document.getElementById('myTable'));
table.setData(adapter.getData());
