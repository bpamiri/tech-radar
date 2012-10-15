function techRadar() {

    this.init = function () {
        var self = this;

        var canvasSize = 820;

        var container = d3.select("body")
            .append("svg")
            .attr("width", canvasSize)
            .attr("height", canvasSize);

        this.shadowDefs(container.append('svg:defs'));

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
            })
            .attr('filter', 'url(#dropShadow)');
    };


    this.shadowDefs = function (container) {
        var dropShadowFilter = container.append('svg:filter')
            .attr('id', 'dropShadow')
            .attr('filterUnits', "userSpaceOnUse")
            .attr('width', '100%')
            .attr('height', '100%');

        dropShadowFilter.append('svg:feGaussianBlur')
            .attr('in', 'SourceGraphic')
            .attr('stdDeviation', 2)
            .attr('result', 'blur-out');
        dropShadowFilter.append('svg:feColorMatrix')
            .attr('in', 'blur-out')
            .attr('type', 'hueRotate')
            .attr('values', 180)
            .attr('result', 'color-out');
        dropShadowFilter.append('svg:feOffset')
            .attr('in', 'color-out')
            .attr('dx', 3)
            .attr('dy', 3)
            .attr('result', 'the-shadow');
        dropShadowFilter.append('svg:feBlend')
            .attr('in', 'SourceGraphic')
            .attr('in2', 'the-shadow')
            .attr('mode', 'normal');
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