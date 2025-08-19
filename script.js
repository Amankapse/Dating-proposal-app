function showDatePicker(response) {
    if (response === 'Yes') {
        document.getElementById('date-invitation').classList.add('hidden');
        document.getElementById('date-picker').classList.remove('hidden');
    } else if (response === 'No') {
        showNoOption();
    }
}

function confirmDate() {
    const selectedDate = document.getElementById('selected-date').value;

    if (selectedDate === '2025-08-21') {
        document.getElementById('date-picker').classList.add('hidden');
        document.getElementById('celebration').classList.remove('hidden');


        loadDancingCreatureAnimation();
    } else {
        alert('Oops! Please select August 21, 2025 for a special surprise! 🎉');
        
    }
}


function confirmDate() {
    const selectedDate = document.getElementById('selected-date').value;

    if (selectedDate === '2025-08-21') {
        document.getElementById('date-picker').classList.add('hidden');
        document.getElementById('celebration').classList.remove('hidden');


        document.getElementById('dancing-bunny').src = 'https://media2.giphy.com/media/wSv0sqJI7uoqSBPbNc/giphy.gif'; // Replace with the actual path
        document.getElementById('dancing-bunny').classList.remove('hidden');
    } else {
        alert('Oops! Please select August 21, 2025 for a special surprise! 🎉');
    }
}


function showNoOption() {
    document.getElementById('date-invitation').classList.add('hidden');
    document.getElementById('no-option').classList.remove('hidden');

    setTimeout(restartPage, 4000);
}

function restartPage() {
    location.reload();
}


