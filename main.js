// Function to update the progress chart based on habit completion
function updateChart() {
    let tasks = [
        document.getElementById('habit1').checked,
        document.getElementById('habit2').checked,
        document.getElementById('habit3').checked
    ];
    let completed = tasks.filter(task => task).length;
    let total = tasks.length;

    // Calculate completion percentage
    let percentage = (completed / total) * 100;

    // Get the canvas context for the chart
    let ctx = document.getElementById('progressChart').getContext('2d');

    // Create or update the chart
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Completed', 'Remaining'],
            datasets: [{
                data: [percentage, 100 - percentage],
                backgroundColor: ['#36a2eb', '#ff6384'],
            }]
        }
    });
}

// Event listeners for habit checkboxes
document.getElementById('habit1').addEventListener('change', updateChart);
document.getElementById('habit2').addEventListener('change', updateChart);
document.getElementById('habit3').addEventListener('change', updateChart);

// Initialize the chart on page load
updateChart();
