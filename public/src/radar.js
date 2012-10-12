function techRadar() {

    this.init = function () {
        var canvasSize = 820;

        var container = d3.select("body")
            .append("svg")
            .attr("width", this.canvasSize)
            .attr("height", this.canvasSize);


        this.drawRings(container, canvasSize);
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