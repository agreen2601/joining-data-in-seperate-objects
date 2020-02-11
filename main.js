const displayToDOM = employees => {
  return `
    <h3>${employees.name}</h3>
    <div><strong>Department:</strong> ${employees.department.name}</div>
    <div><strong>Computer:</strong> &nbsp&nbsp ${employees.computer.name}</div>
    <hr>
    `;
};

const renderData = data => {
  const container = document.querySelector("#container");
  data.forEach(datum => {
    container.innerHTML += displayToDOM(datum);
  });
};

const getData = () => {
  return fetch(
    "http://localhost:3000/employees?_expand=computer&_expand=department"
  ).then(response => response.json());
};

getData().then(renderData);
