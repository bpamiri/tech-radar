var radarData = [
    {"name":"Progressive Enhancement", "pc":{"r":140, "t":120}, "movement":"t"},
    {"name":"Automate Database Deployment", "pc":{"r":140, "t":135}, "movement":"t"},
    {"name":"Platform roadmaps", "pc":{"r":40, "t":112}, "movement":"c"},
    {"name":"Evolutionary database", "pc":{"r":50, "t":158}, "movement":"c"},
    {"name":"Emergent design", "pc":{"r":75, "t":100}, "movement":"c"},
    {"name":"Visualization and metrics", "pc":{"r":75, "t":148}, "movement":"c"},
    {"name":"Coding architects", "pc":{"r":70, "t":175}, "movement":"c"},
    {"name":"Evolutionary architecture", "pc":{"r":140, "t":112}, "movement":"t"},
    {"name":"DevOps", "pc":{"r":140, "t":157}, "movement":"t"},
    {"name":"Simple Performance Trending", "pc":{"r":70, "t":130}, "movement":"t"},
    {"name":"Continuous Delivery", "pc":{"r":145, "t":175}, "movement":"t"},
    {"name":"Concurrency abstractions and patterns", "pc":{"r":266, "t":157}, "movement":"c"},
    {"name":"Acceptance Test of Journeys", "pc":{"r":265, "t":135}, "movement":"c"},
    {"name":"Categorization & Prioritization of Technical Debt", "pc":{"r":265, "t":95}, "movement":"c"},
    {"name":"Continuous deployment", "pc":{"r":265, "t":100}, "movement":"c"},
    {"name":"Capability modeling", "pc":{"r":250, "t":140}, "movement":"c"},
    {"name":"Thoughtful Caching", "pc":{"r":200, "t":144}, "movement":"t"},
    {"name":"Iterative Data Warehousing", "pc":{"r":260, "t":165}, "movement":"t"},
    {"name":"Build your own radar", "pc":{"r":200, "t":162}, "movement":"t"},
    {"name":"Event API's", "pc":{"r":255, "t":170}, "movement":"t"},
    {"name":"Event Driven Business Intelligence", "pc":{"r":300, "t":108}, "movement":"t"},
    {"name":"Smart Systems", "pc":{"r":310, "t":126}, "movement":"c"},
    {"name":"Event Sourcing", "pc":{"r":290, "t":144}, "movement":"t"},
    {"name":"Decision driven BI", "pc":{"r":300, "t":162}, "movement":"t"},
    {"name":"Scrum certification", "pc":{"r":375, "t":105}, "movement":"c"},
    {"name":"Database based integration", "pc":{"r":375, "t":120}, "movement":"c"},
    {"name":"Procedure oriented integration", "pc":{"r":375, "t":135}, "movement":"t"},
    {"name":"Feature branching", "pc":{"r":375, "t":150}, "movement":"t"},
    {"name":"Manual infrastructure management", "pc":{"r":375, "t":165}, "movement":"t"},
    {"name":"Subversion", "pc":{"r":10, "t":20}, "movement":"c"},
    {"name":"Git", "pc":{"r":140, "t":70}, "movement":"t"},
    {"name":"Infrastructure as Code", "pc":{"r":75, "t":45}, "movement":"c"},
    {"name":"Github", "pc":{"r":140, "t":65}, "movement":"t"},
    {"name":"Caching Reverse Proxies", "pc":{"r":120, "t":20}, "movement":"t"},
    {"name":"Splunk", "pc":{"r":240, "t":45}, "movement":"c"},
    {"name":"Mercurial", "pc":{"r":170, "t":22}, "movement":"c"},
    {"name":"Message Buses without smarts", "pc":{"r":170, "t":85}, "movement":"c"},
    {"name":"NoSQL", "pc":{"r":265, "t":52}, "movement":"c"},
    {"name":"Next gen test tools", "pc":{"r":220, "t":80}, "movement":"c"},
    {"name":"New Relic beyond Rails", "pc":{"r":265, "t":22}, "movement":"t"},
    {"name":"TLB", "pc":{"r":260, "t":10}, "movement":"t"},
    {"name":"Powershell", "pc":{"r":160, "t":18}, "movement":"t"},
    {"name":"Web Driver testing of mobile websites", "pc":{"r":240, "t":80}, "movement":"t"},
    {"name":"Deltacloud", "pc":{"r":330, "t":80}, "movement":"c"},
    {"name":"Vagrant", "pc":{"r":345, "t":45}, "movement":"c"},
    {"name":"API Management Services", "pc":{"r":310, "t":10}, "movement":"c"},
    {"name":"jQuery Mobile", "pc":{"r":345, "t":40}, "movement":"t"},
    {"name":"Backbone.src", "pc":{"r":340, "t":55}, "movement":"t"},
    {"name":"Sonar", "pc":{"r":290, "t":75}, "movement":"t"},
    {"name":"Open Source BI tools", "pc":{"r":310, "t":18}, "movement":"t"},
    {"name":"Gradle", "pc":{"r":310, "t":80}, "movement":"t"},
    {"name":"Cross Mobile Platforms", "pc":{"r":375, "t":18}, "movement":"t"},
    {"name":"ESB", "pc":{"r":375, "t":36}, "movement":"c"},
    {"name":"VCS with \"implicit workflow\"", "pc":{"r":375, "t":54}, "movement":"t"},
    {"name":"Backdoor Deployment (ETL)", "pc":{"r":375, "t":72}, "movement":"t"},
    {"name":"JRuby", "pc":{"r":80, "t":195}, "movement":"c"},
    {"name":"ATOM", "pc":{"r":20, "t":202}, "movement":"c"},
    {"name":"KVM", "pc":{"r":15, "t":225}, "movement":"c"},
    {"name":"AWS", "pc":{"r":145, "t":235}, "movement":"t"},
    {"name":"Mobile Web", "pc":{"r":145, "t":210}, "movement":"t"},
    {"name":"Heroku", "pc":{"r":170, "t":202}, "movement":"c"},
    {"name":"Tablet (formerly iPad)", "pc":{"r":170, "t":216}, "movement":"c"},
    {"name":"Offline mobile Webapps (just html5)", "pc":{"r":255, "t":240}, "movement":"t"},
    {"name":"Ubiquitous computing", "pc":{"r":165, "t":260}, "movement":"t"},
    {"name":"vFabric", "pc":{"r":345, "t":192}, "movement":"c"},
    {"name":"OpenStack", "pc":{"r":330, "t":224}, "movement":"c"},
    {"name":"Node.src", "pc":{"r":300, "t":202}, "movement":"c"},
    {"name":"OAuth", "pc":{"r":310, "t":230}, "movement":"c"},
    {"name":"GPGPU", "pc":{"r":340, "t":190}, "movement":"c"},
    {"name":"Cloud foundry", "pc":{"r":310, "t":252}, "movement":"t"},
    {"name":"WS-* Beyond Basic Profile", "pc":{"r":375, "t":202}, "movement":"t"},
    {"name":"GWT", "pc":{"r":375, "t":224}, "movement":"t"},
    {"name":"Java portal servers", "pc":{"r":375, "t":246}, "movement":"t"},
    {"name":"Javascript as a first class language", "pc":{"r":80, "t":300}, "movement":"c"},
    {"name":"HTML 5", "pc":{"r":140, "t":330}, "movement":"t"},
    {"name":"SASS, SCSS, and LESS", "pc":{"r":210, "t":350}, "movement":"c"},
    {"name":"HAML", "pc":{"r":250, "t":330}, "movement":"c"},
    {"name":"Domain-Specific Languages", "pc":{"r":170, "t":320}, "movement":"c"},
    {"name":"Scala", "pc":{"r":180, "t":300}, "movement":"c"},
    {"name":"Coffeescript", "pc":{"r":240, "t":340}, "movement":"t"},
    {"name":"Clojure", "pc":{"r":310, "t":292}, "movement":"c"},
    {"name":"F#", "pc":{"r":290, "t":320}, "movement":"c"},
    {"name":"Future of Java", "pc":{"r":325, "t":330}, "movement":"c"},
    {"name":"Logic in stored Procedures", "pc":{"r":375, "t":315}, "movement":"t"}
];

//left to right -> top to bottom
var radarQuadrants = [
    {"name":"Techniques", "start":0, "end":29},
    {"name":"Tools", "start":29, "end":55},
    {"name":"Platforms", "start":55, "end":73},
    {"name":"Languages", "start":73, "end":84}
];

//
var radarArcs = [
    {'r':150, 'name':'Adopt'},
    {'r':275, 'name':'Trial'},
    {'r':350, 'name':'Assess'},
    {'r':400, 'name':'Hold'}
];

var radarTitle = "ThoughtWorks Technology Radar (July 2011)";