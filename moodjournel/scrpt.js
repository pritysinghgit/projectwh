let journal = JSON.parse(localStorage.getItem("journal")) || [];

function displayEntries() {
  const list = document.getElementById("journalList");
  list.innerHTML = "";
  journal.forEach((entry, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${entry.mood}</strong><br>${entry.note}
      <button class="delete-btn" onclick="deleteEntry(${index})">X</button>`;
    list.appendChild(li);
  });
}

function addEntry() {
  const mood = document.getElementById("moodInput").value;
  const note = document.getElementById("noteInput").value;

  if (mood.trim() === "" || note.trim() === "") {
    alert("Please enter both mood and note!");
    return;
  }

  journal.push({ mood, note });
  localStorage.setItem("journal", JSON.stringify(journal));
  document.getElementById("moodInput").value = "";
  document.getElementById("noteInput").value = "";
  displayEntries();
}

function deleteEntry(index) {
  journal.splice(index, 1);
  localStorage.setItem("journal", JSON.stringify(journal));
  displayEntries();
}

window.onload = displayEntries;