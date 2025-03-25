document.addEventListener('DOMContentLoaded', function () {
  const resultsTable = document.getElementById('results-table');

  // Example data for results
  const resultsData = [
    { name: 'John Doe', class: '9th', olympiad: 'WMO', result: 'Excellence' },
    { name: 'Jane Smith', class: '7th', olympiad: 'WSO', result: 'Merit' },
    { name: 'Mike Johnson', class: '4th', olympiad: 'WCO', result: 'Participation' }
  ];

  resultsData.forEach(data => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${data.name}</td>
      <td>${data.class}</td>
      <td>${data.olympiad}</td>
      <td>${data.result}</td>
    `;
    resultsTable.appendChild(row);
  });
});
