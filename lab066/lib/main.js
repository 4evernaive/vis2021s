function resizeRight() {
    d3.select("#train-vs-test").style("width", d3.select("#right").node().clientWidth + "px")
}
d3.select(window).on("load", function() {
    resizeRight(), d3.select(window).on("resize", function() {
        resizeRight()
    });
    var t = new BinaryDecisionTree({
        el: "#train-vs-test",
        trainingSection: "#training-section",
        testSection: "#testing-section"
    });

    function n(t, n) {
        n = d3.select(t).selectAll("div").data(n).enter().append("div").style("margin-bottom", "6px").style("padding", "1px 8px").style("font-size", "16px");
        n.filter(function(t) {
            return "t" == t[0]
        }).text(function(t) {
            return t[1]
        }), n.filter(function(t) {
            return "img" == t[0]
        }).append("img").style("width", "100%").style("height", "270px").style("object-fit", "contain").attr("src", function(t) {
            return "./media/" + t[1]
        }), n.filter(function(t) {
            return "h" == t[0]
        }).append("h2").text(function(t) {
            return t[1]
        }), n.filter(function(t) {
            return "s" == t[0]
        }).append("div").style("text-align", "center").style("font-style", "italic").style("font-size", "16px").text(function(t) {
            return t[1]
        })
    }
    t.setDataFromJson("./dataset.json", function() {
        t.install(), t.play()
    }), d3.text("./article/training.txt", function(t) {
        n("#training-section", t.split("\n").filter(function(t) {
            return 0 != t.length
        }).map(function(t) {
            return t.split("/")
        }))
    }), d3.text("./article/testing.txt", function(t) {
        n("#testing-section", t.split("\n").filter(function(t) {
            return 0 != t.length
        }).map(function(t) {
            return t.split("/")
        }))
    })
});