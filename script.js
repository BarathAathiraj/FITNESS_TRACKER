window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {  
      document.querySelector('.navbar').classList.add('sticky');
    } else {
      document.querySelector('.navbar').classList.remove('sticky');
    }
  });

// Get the form and progress dashboard elements
const logActivityForm = document.getElementById('log-activity-form');
const loggedActivitiesList = document.getElementById('logged-activities');
const progressChartCanvas = document.getElementById('progress-chart');

// Initialize an array to store logged activities
let loggedActivities = [];

// Add an event listener to the form submission
logActivityForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const activity = document.getElementById('activity').value;
  const duration = document.getElementById('duration').value;
  const newActivity = { activity, duration, date: new Date() };
  loggedActivities.push(newActivity);
  displayLoggedActivities();
  updateProgressChart();
});

// Function to display logged activities
function displayLoggedActivities() {
  loggedActivitiesList.innerHTML = '';
  loggedActivities.forEach((activity) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${activity.activity} - ${activity.duration} minutes on ${activity.date.toLocaleDateString()}`;
    loggedActivitiesList.appendChild(listItem);
  });
}

// Function to update the progress chart
function updateProgressChart() {
  // TO DO: Implement chart.js or a similar library to display the progress chart
  // For now, let's just log the data to the console
  console.log(loggedActivities);
}