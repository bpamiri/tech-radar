function techRadar() {

    this.init = function () {
        var self = this;

        var canvasSize = 820;

        var container = d3.select("body")
            .append("svg")
            .attr("width", canvasSize)
            .attr("height", canvasSize);

        this.drawRings(container, canvasSize);
        this.drawQuadrants(container, canvasSize);

        container.selectAll("svg")
            .data(radarData).enter()
            .append("path")
            .attr("transform", function (d) {
                var coOrdinates = self.polarToCartesian(d.pc, canvasSize);
                return "translate(" + coOrdinates.x + "," + coOrdinates.y + ")";
            })
            .attr("d", d3.svg.symbol()
            .type(function (d, i) {
                return self.getSymbolForBlip(d);
            }))
            .attr("class", function (d) {
                return d.movement
            });
    };


    this.getSymbolForBlip = function (d) {
        if (d.movement == "c") {
            return "circle";
        } else if (d.movement == "t") {
            return "triangle-up";
        } else {
            console.log("Unknown movement for blip: " + d.movement);
        }
    };


    this.drawRings = function (container, canvasSize) {
        radarArcs.forEach(function (ring) {
            container.append("circle")
                .attr("r", ring.r)
                .attr("cx", canvasSize / 2)
                .attr("cy", canvasSize / 2)
                .attr("class", "ring");
        });
    };


    this.drawQuadrants = function (container, canvasSize) {
        container.append("line")
            .attr("x1", canvasSize / 2)
            .attr("y1", 0)
            .attr("x2", canvasSize / 2)
            .attr("y2", canvasSize)
            .attr("class", "quadrant");

        container.append("line")
            .attr("x1", 0)
            .attr("y1", canvasSize / 2)
            .attr("x2", canvasSize)
            .attr("y2", canvasSize / 2)
            .attr("class", "quadrant");
    };


    this.polarToCartesian = function (polar, canvasSize) {
        var x = (polar.r * Math.cos(polar.t)) + canvasSize / 2;
        var y = (polar.r * Math.sin(polar.t)) + canvasSize / 2;

        return {"x":x, "y":y}
    }

}


window.onload = function () {
    new techRadar().init();
};