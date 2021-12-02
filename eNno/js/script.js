

const urlVisitas = "https://raw.githubusercontent.com/Cmenesess/DAWM/main/visitas.json";
const urlRegistrados = "https://raw.githubusercontent.com/Cmenesess/DAWM/main/registrados.json";
const urlConcretados = "https://raw.githubusercontent.com/Cmenesess/DAWM/main/concretados.json";
const urlCancelados = "https://raw.githubusercontent.com/Cmenesess/DAWM/main/cancelados.json";


let chartVisitas = document.getElementById("visits");
chartVisitas.addEventListener("click", () => {
    fetch(urlVisitas)
        .then(function(response) { return response.json(); })
        .then(function(data){
            var clean = d3.select("svg");
            clean.selectAll("*").remove();
            var parsedData = parseVisitas(data);
            drawChart(parsedData, "Visits (#)");
        })
        .catch(function(err) { console.log(err); })
});

function parseVisitas(data){
    var arr = [];
    for (var i in data.visitas){
        arr.push({
            month: new Date(i),
            visits: +data.visitas[i]
        });
    }
    return arr;
}

let chartRegistrados = document.getElementById("registers");
chartRegistrados.addEventListener("click", () => {
    fetch(urlRegistrados)
        .then(function(response) { return response.json(); })
        .then(function(data){
            var clean = d3.select("svg");
            clean.selectAll("*").remove();
            var parsedData = parseRegistrados(data);
            drawChart(parsedData, "Registers (#)");
        })
        .catch(function(err) { console.log(err); })
});

function parseRegistrados(data){
    var arr = [];
    for (var i in data.registrados){
        arr.push({
            month: new Date(i),
            visits: +data.registrados[i]
        });
    }
    return arr;
}

let chartConcretados = document.getElementById("completed");
chartConcretados.addEventListener("click", () => {
    fetch(urlConcretados)
        .then(function(response) { return response.json(); })
        .then(function(data){
            var clean = d3.select("svg");
            clean.selectAll("*").remove();
            var parsedData = parseConcretados(data);
            drawChart(parsedData, "Completed (#)");
        })
        .catch(function(err) { console.log(err); })
});

function parseConcretados(data){
    var arr = [];
    for (var i in data.concretados){
        arr.push({
            month: new Date(i),
            visits: +data.concretados[i]
        });
    }
    return arr;
}

let chartCancelados = document.getElementById("cancels");
chartCancelados.addEventListener("click", () => {
    fetch(urlCancelados)
        .then(function(response) { return response.json(); })
        .then(function(data){
            var clean = d3.select("svg");
            clean.selectAll("*").remove();
            var parsedData = parseCancelados(data);
            drawChart(parsedData, "Cancels (#)");
        })
        .catch(function(err) { console.log(err); })
});

function parseCancelados(data){
    var arr = [];
    for (var i in data.cancelados){
        arr.push({
            month: new Date(i),
            visits: +data.cancelados[i]
        });
    }
    return arr;
}




function drawChart(data, label) {
    var svgWidth = 600;
    var svgHeight = 400;
    var margin = {top: 20, right: 20, bottom: 30, left: 50};
    var width = svgWidth - margin.left - margin.right;
    var height = svgHeight - margin.top - margin.bottom;

    var svg = d3.select("svg")
                .attr("width", svgWidth)
                .attr("height", svgHeight);

    var g = svg.append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleTime()
                .rangeRound([0, width]);

    var y = d3.scaleLinear()
                .rangeRound([height, 0]);

    var line = d3.line()
                .x(function(d) { return x(d.month)})
                .y(function(d) { return y(d.visits)})
                x.domain(d3.extent(data, function(d) {return d.month }));
                y.domain(d3.extent(data, function(d) {return d.visits }));

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .select(".domain")
        .remove();

    g.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text(label);

    g.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 1.5)
        .attr("d", line);
}

