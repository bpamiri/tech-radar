function init() {

    var radius = radarArcs[3].r;
    var canvasSize = radius * 2;

    var container = d3.select("body")
        .append("svg")
        .attr("width", canvasSize)
        .attr("height", canvasSize);

    radarArcs.forEach(function(ring){
        container.append("circle")
            .attr("r", ring.r)
            .attr("cx", canvasSize / 2)
            .attr("cy", canvasSize / 2)
            .attr("class", "ring");
    });

}


window.onload = function () {
    init();
};