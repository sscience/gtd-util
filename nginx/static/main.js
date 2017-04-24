// run filter.py to populate this //
d3.csv("afghanistan_gtd_grouped.csv",function(err,data){
var chartColumns = ['kill_count', 'wounded_count']
var dataToPlot = Object.keys(data[0]).filter(function(k){return chartColumns.indexOf(k) >= 0})
  .map(function(k){
    return {"key":k,"values":data.map(function(d){
     return {
       "x":d3.time.format("%Y-%m-%d").parse(d.date),
       "y":+d[k],
       }
    })}
  })
nv.addGraph(function() {
  var chart = nv.models.lineChart()
    .useInteractiveGuideline(true)
  ;

chart.xAxis
  .tickFormat(function(d) {
    return d3.time.format('%x')(new Date(d))
});


chart.yAxis
  .axisLabel('Voltage (v)')
  .tickFormat(d3.format('.02f'))
;

chart.color(['red', 'black'])

var width = 1200, height = 400;

console.log('width: ', width)
d3.select('#chart1 svg')
    .datum(dataToPlot)
    .transition().duration(500)
    .call(chart)
    .style({ 'width': width, 'height': height });

  nv.utils.windowResize(chart.update);
  return chart;
});
})
