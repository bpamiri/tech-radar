function init() {

    var radius = radarArcs[3].r;
    var canvasSize = radius * 2;

    var container = d3.select("body")
        .append("svg")
        .attr("width", canvasSize)
        .attr("height", canvasSize);

    container.append("circle")
        .attr("r", radius)
        .attr("cx", canvasSize / 2)
        .attr("cy", canvasSize / 2)
        .attr("stroke", "black")
        .attr("stroke-width", "1")
        .style("fill", "pink");

}


window.onload = function () {
    init();
};