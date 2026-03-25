const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const subjects = [
  ["Math", "English", "Short Break", "Science", "Social", "Long Break", "Computer", "GK"],
  ["English", "Math", "Short Break", "Computer", "Science", "Long Break", "Social", "PT"],
  ["Science", "Computer", "Short Break", "Math", "English", "Long Break", "GK", "Drawing"],
  ["Social", "Math", "Short Break", "English", "Computer", "Long Break", "Science", "Library"],
  ["Computer", "Science", "Short Break", "Social", "Math", "Long Break", "English", "PT"]
];

const tbody = document.querySelector("#timetable tbody");

days.forEach((day, i) => {
  const row = document.createElement("tr");

  const dayCell = document.createElement("td");
  dayCell.textContent = day;
  dayCell.classList.add("day");
  row.appendChild(dayCell);

  subjects[i].forEach(sub => {
    const cell = document.createElement("td");
    cell.textContent = sub;

    if (sub === "Short Break") cell.classList.add("short-break");
    if (sub === "Long Break") cell.classList.add("long-break");

    row.appendChild(cell);
  });

  tbody.appendChild(row);
});

