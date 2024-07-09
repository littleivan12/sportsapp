document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('data-container');

    console.log('Document loaded, attempting to fetch data...');

    // Fetch data from the Football Data API
    fetch('https://api.football-data.org/v4/matches', {
        headers: {
            'X-Auth-Token': 'YOUR_API_KEY_HERE' // Replace with your actual API key
        }
    })
    .then(response => {
        console.log('Response status:', response.status);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Data received:', data);
        // Display filters
        const filters = data.filters;
        const filtersElement = document.createElement('div');
        filtersElement.innerHTML = `
            <h3>Filters</h3>
            <p>Date From: ${filters.dateFrom}</p>
            <p>Date To: ${filters.dateTo}</p>
            <p>Permission: ${filters.permission}</p>
        `;
        dataContainer.appendChild(filtersElement);

        // Display result set count
        const resultSet = data.resultSet;
        const resultSetElement = document.createElement('div');
        resultSetElement.innerHTML = `
            <h3>Result Set</h3>
            <p>Count: ${resultSet.count}</p>
        `;
        dataContainer.appendChild(resultSetElement);

        // Display matches
        const matches = data.matches;
        if (matches.length > 0) {
            const matchesElement = document.createElement('div');
            matchesElement.innerHTML = '<h3>Matches</h3>';
            matches.forEach(match => {
                const matchElement = document.createElement('div');
                matchElement.innerHTML = `
                    <p>${JSON.stringify(match)}</p>
                `;
                matchesElement.appendChild(matchElement);
            });
            dataContainer.appendChild(matchesElement);
        } else {
            const noMatchesElement = document.createElement('p');
            noMatchesElement.textContent = 'No matches found.';
            dataContainer.appendChild(noMatchesElement);
        }
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        dataContainer.textContent = 'Failed to load data: ' + error.message;
    });
});
