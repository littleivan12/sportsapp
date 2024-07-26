document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded and parsed");
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function goBack() {
    window.history.back();
}

function sendMessage(event, modalId) {
    event.preventDefault();
    alert('Message sent to the captain!');
    closeModal(modalId);
}

function addLeague() {
    console.log("Add League button clicked");

    // Get form values
    const leagueName = document.getElementById('leagueName').value;
    const location = document.getElementById('location').value;
    const dates = document.getElementById('dates').value;
    const ages = document.getElementById('ages').value;
    const format = document.getElementById('format').value;

    console.log(`League Name: ${leagueName}`);
    console.log(`Location: ${location}`);
    console.log(`Dates: ${dates}`);
    console.log(`Ages: ${ages}`);
    console.log(`Format: ${format}`);

    // Create new row and cells
    const table = document.getElementById('leagueTable');
    const newRow = table.insertRow();
    const nameCell = newRow.insertCell(0);
    const locationCell = newRow.insertCell(1);
    const datesCell = newRow.insertCell(2);
    const agesCell = newRow.insertCell(3);
    const formatCell = newRow.insertCell(4);

    // Fill cells with data
    nameCell.innerHTML = `<a href="#">${leagueName}</a>`;
    locationCell.textContent = location;
    datesCell.textContent = dates;
    agesCell.textContent = ages;
    formatCell.textContent = format;

    console.log("New row added to the table");

    // Reset form
    document.getElementById('leagueForm').reset();
    console.log("Form reset");

    // Close modal
    closeModal('addLeagueModal');
}

function sendMessage(event) {
    event.preventDefault();
    alert('Message sent to the captain!');
    closeModal();
}
