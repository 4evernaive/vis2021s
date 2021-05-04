<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script>
d3.text("data.csv", function (data) {
    var parsedCSV = d3.csv.parseRows(data);

    d3.select("body")
        .selectAll("div")
        .data(parsedCSV)
        .enter()
        .append("div")
        .filter(function (d, i) {
            return (i != 0);
        })
        .attr("class", "bar")
        .style("height", function (d) {
            return 7 * d[1] + "px";
        })
        .append("text")
        .text(function (d) {
            return d[1];
        })
});
</script>