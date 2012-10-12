function init() {

    var canvasSize = 820;

    var container = d3.select("body")
        .append("svg")
        .attr("width", canvasSize)
        .attr("height", canvasSize);

    radarArcs.forEach(function (ring) {
        container.append("circle")
            .attr("r", ring.r)
            .attr("cx", canvasSize / 2)
            .attr("cy", canvasSize / 2)
            .attr("class", "ring");
    });


    radarData.forEach(function (item) {
        var x = item.pc.r * Math.cos(item.pc.t);
        var y = item.pc.r * Math.sin(item.pc.t);

        console.log(x);

        container.append("circle")
            .attr("r", 5)
            .attr("cx", x + canvasSize / 2)
            .attr("cy", y + canvasSize / 2)
    });
}


window.onload = function () {
    init();
};