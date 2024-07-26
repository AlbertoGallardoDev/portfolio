document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('frontendContainer', {
        chart: {
            type: 'column',
            backgroundColor: 'transparent' // Fondo transparente
        },
        title: {
            text: 'Front-end'
        },
        xAxis: {
            categories: ['HTML', 'CSS', 'JavaScript', 'Angular', 'React']
        },
        yAxis: {
            title: {
                text: 'Nivel'
            },
            min: 0,
            max: 10,
        },
        series: [{
            name: 'Frontend',
            data: [9, 8, 8, 6, 7]
        }],
        credits: {
            enabled: false // Deshabilitar la marca de agua
        },
        exporting: {
            enabled: false // Deshabilitar el botón de opciones
        }
    });

    Highcharts.chart('backendContainer', {
        chart: {
            type: 'column',
            backgroundColor: 'transparent' // Fondo transparente
        },
        title: {
            text: 'Back-end'
        },
        xAxis: {
            categories: ['MySQL', 'PHP', 'Codeigniter 3', 'Laravel']
        },
        yAxis: {
            title: {
                text: 'Nivel'
            },
            min: 0,
            max: 10,
        },
        series: [{
            name: 'Backend',
            data: [7, 7, 9, 8]
        }],
        credits: {
            enabled: false // Deshabilitar la marca de agua
        },
        exporting: {
            enabled: false // Deshabilitar el botón de opciones
        }
    });
});
