google.load("visualization", "1", {packages:["table"]});
google.setOnLoadCallback(drawTable);
function drawTable(){
    var data = new google.visualization.DataTable();
    data.addColumn("string","State");
    data.addColumn("number","Drug specified");
    data.addRows([["Louisiana",{"v":0.348,"f":"34.8%"}],["Mississippi",{"v":0.434,"f":"43.4%"}],["Pennsylvania",{"v":0.45,"f":"45.0%"}],["Alabama",{"v":0.45,"f":"45.0%"}],["Indiana",{"v":0.45799999999999996,"f":"45.8%"}],["Kansas",{"v":0.588,"f":"58.8%"}],["New Jersey",{"v":0.593,"f":"59.3%"}],["Idaho",{"v":0.596,"f":"59.6%"}],["South Carolina",{"v":0.598,"f":"59.8%"}],["Kentucky",{"v":0.648,"f":"64.8%"}],["Wyoming",{"v":0.648,"f":"64.8%"}],["Michigan",{"v":0.6579999999999999,"f":"65.8%"}],["New Mexico",{"v":0.687,"f":"68.7%"}],["Florida",{"v":0.688,"f":"68.8%"}],["Nebraska",{"v":0.6940000000000001,"f":"69.4%"}],["Montana",{"v":0.6990000000000001,"f":"69.9%"}],["Colorado",{"v":0.7040000000000001,"f":"70.4%"}],["Ohio",{"v":0.7140000000000001,"f":"71.4%"}],["Georgia",{"v":0.7140000000000001,"f":"71.4%"}],["California",{"v":0.731,"f":"73.1%"}],["Texas",{"v":0.747,"f":"74.7%"}],["Arkansas",{"v":0.767,"f":"76.7%"}],["Connecticut",{"v":0.768,"f":"76.8%"}],["Tennessee",{"v":0.778,"f":"77.8%"}],["Delaware",{"v":0.7929999999999999,"f":"79.3%"}],["Missouri",{"v":0.7929999999999999,"f":"79.3%"}],["Arizona",{"v":0.802,"f":"80.2%"}],["Minnesota",{"v":0.8240000000000001,"f":"82.4%"}],["Hawaii",{"v":0.831,"f":"83.1%"}],["Wisconsin",{"v":0.8590000000000001,"f":"85.9%"}],["Illinois",{"v":0.865,"f":"86.5%"}],["North Dakota",{"v":0.879,"f":"87.9%"}],["South Dakota",{"v":0.888,"f":"88.8%"}],["Maine",{"v":0.897,"f":"89.7%"}],["Oregon",{"v":0.912,"f":"91.2%"}],["Washington",{"v":0.9259999999999999,"f":"92.6%"}],["Virginia",{"v":0.927,"f":"92.7%"}],["North Carolina",{"v":0.929,"f":"92.9%"}],["New York",{"v":0.94,"f":"94.0%"}],["Utah",{"v":0.9420000000000001,"f":"94.2%"}],["Alaska",{"v":0.955,"f":"95.5%"}],["Iowa",{"v":0.961,"f":"96.1%"}],["Massachusetts",{"v":0.97,"f":"97.0%"}],["Oklahoma",{"v":0.972,"f":"97.2%"}],["Rhode Island",{"v":0.973,"f":"97.3%"}],["Nevada",{"v":0.977,"f":"97.7%"}],["Maryland",{"v":0.986,"f":"98.6%"}],["Vermont",{"v":0.9890000000000001,"f":"98.9%"}],["New Hampshire",{"v":0.991,"f":"99.1%"}],["West Virginia",{"v":0.9940000000000001,"f":"99.4%"}]]);
    var options = {page:"enable",pageSize:20};
    var table = new google.visualization.Table(document.getElementById("table-div"));
    table.draw(data,options);
    var source = 'Source: 2013 report by Margaret Warner of the CDC and other researchers, <a href="https://www.documentcloud.org/documents/1151267-heroin-project-2014-study-on-overdose-deaths.html" target="_blank">"State Variation in Certifying Manner of Death and Drugs involved in drug intoxication deaths"</a>'; //text and html in source line
    var credits = 'Vaughn Hagerty, MaryJo Webster / DFM'; //same for credits
    var div_id = 'sources-credits'; //id of div where this should appear
    var config = {credits: credits,sources: source,div_id: div_id}; //config object
    dfm_sources_credits(config);

}