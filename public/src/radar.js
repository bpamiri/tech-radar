function techRadar() {

    this.init = function () {
        var canvasSize = 820;

        var container = d3.select("body")
            .append("svg")
            .attr("width", canvasSize)
            .attr("height", canvasSize);


        this.drawRings(container, canvasSize);
        this.drawQuadrants(container, canvasSize);
        this.drawBlips(container, canvasSize);
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

    this.drawBlips = function (container, canvasSize) {
        var self = this;

        radarData.forEach(function (item) {
            var coOrdinates = self.polarToCartesian(item.pc);

            container.append("circle")
                .attr("r", 5)
                .attr("cx", coOrdinates.x + canvasSize / 2)
                .attr("cy", coOrdinates.y + canvasSize / 2)
        });
    };


    this.polarToCartesian = function (polar) {
        var x = polar.r * Math.cos(polar.t);
        var y = polar.r * Math.sin(polar.t);

        return {"x":x, "y":y}
    }

}


window.onload = function () {
    new techRadar().init();
};