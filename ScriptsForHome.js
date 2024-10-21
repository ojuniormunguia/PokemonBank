const ctx = document.getElementById('expenseChart').getContext('2d');
        const expenseChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'], // Meses como etiquetas
                datasets: [{
                    label: 'Historial de Gastos ($)',
                    data: [500, 600, 400, 700, 300, 450], // Gastos de cada mes
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true,
                    tension: 0.4, // Hace la línea más curva
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                return '$' + tooltipItem.raw; // Formatea los valores con $
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true, // Asegura que el eje Y comience en 0
                        title: {
                            display: true,
                            text: 'Cantidad en USD'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Mes'
                        }
                    }
                }
            }
        });