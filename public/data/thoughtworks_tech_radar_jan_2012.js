var radarData = [
    {"name":"Automate Database Deployment", "pc":{"r":90, "t":135}, "movement":"c"},
    {"name":"Coding architects", "pc":{"r":70, "t":175}, "movement":"c"},
    {"name":"Continuous Delivery", "pc":{"r":145, "t":175}, "movement":"c"},
    {"name":"Data visualizations of development and operations", "pc":{"r":75, "t":148}, "movement":"c"},
    {"name":"DevOps", "pc":{"r":90, "t":157}, "movement":"c"},
    {"name":"Emergent design", "pc":{"r":75, "t":100}, "movement":"c"},
    {"name":"Evolutionary architecture", "pc":{"r":140, "t":112}, "movement":"c"},
    {"name":"Evolutionary database", "pc":{"r":50, "t":158}, "movement":"c"},
    {"name":"Health check pages", "pc":{"r":75, "t":115}, "movement":"t"},
    {"name":"Simple Performance Trending", "pc":{"r":70, "t":130}, "movement":"c"},
    {"name":"Test at the appropriate level", "pc":{"r":75, "t":92}, "movement":"t"},
    {"name":"Acceptance Test of Journeys", "pc":{"r":165, "t":135}, "movement":"c"},
    {"name":"Agile Analytics", "pc":{"r":212, "t":132}, "movement":"t"},
    {"name":"Build your own radar", "pc":{"r":200, "t":162}, "movement":"c"},
    {"name":"Categorization & Prioritization of Technical Debt", "pc":{"r":245, "t":95}, "movement":"c"},
    {"name":"Embedding a servlet container", "pc":{"r":260, "t":122}, "movement":"t"},
    {"name":"Event API's", "pc":{"r":255, "t":170}, "movement":"c"},
    {"name":"Infrastructure automation of development workstations", "pc":{"r":215, "t":110}, "movement":"t"},
    {"name":"Out of container functional testing", "pc":{"r":260, "t":140}, "movement":"t"},
    {"name":"Performance testing as a first class citizen", "pc":{"r":180, "t":95}, "movement":"t"},
    {"name":"Single command deploy", "pc":{"r":215, "t":91}, "movement":"t"},
    {"name":"Thoughtful Caching", "pc":{"r":200, "t":144}, "movement":"c"},
    {"name":"Windows Infrastructure Automation", "pc":{"r":260, "t":102}, "movement":"t"},
    {"name":"Event Sourcing", "pc":{"r":290, "t":144}, "movement":"c"},
    {"name":"Experience Design (XD)", "pc":{"r":312, "t":119}, "movement":"t"},
    {"name":"Mechanical sympathy", "pc":{"r":290, "t":160}, "movement":"t"},
    {"name":"Micro-services", "pc":{"r":300, "t":177}, "movement":"t"},
    {"name":"Production immune system", "pc":{"r":290, "t":112}, "movement":"t"},
    {"name":"Database based integration", "pc":{"r":375, "t":120}, "movement":"c"},
    {"name":"Feature branching", "pc":{"r":375, "t":150}, "movement":"c"},
    {"name":"Manual infrastructure management", "pc":{"r":375, "t":165}, "movement":"c"},
    {"name":"Scrum certification", "pc":{"r":375, "t":105}, "movement":"c"},
    {"name":"Server / Application Container End of Life", "pc":{"r":375, "t":98}, "movement":"t"},
    {"name":"Test recorders", "pc":{"r":375, "t":127}, "movement":"t"},
    {"name":"Git", "pc":{"r":110, "t":70}, "movement":"c"},
    {"name":"Github", "pc":{"r":110, "t":65}, "movement":"c"},
    {"name":"Infrastructure as Code", "pc":{"r":75, "t":45}, "movement":"c"},
    {"name":"Backbone.src", "pc":{"r":295, "t":55}, "movement":"c"},
    {"name":"FPM", "pc":{"r":225, "t":24}, "movement":"t"},
    {"name":"Frank", "pc":{"r":245, "t":12}, "movement":"t"},
    {"name":"Jade", "pc":{"r":260, "t":34}, "movement":"t"},
    {"name":"JavaScript micro frameworks", "pc":{"r":255, "t":75}, "movement":"t"},
    {"name":"JavaScript tooling", "pc":{"r":250, "t":40}, "movement":"t"},
    {"name":"Log aggregation & indexing (was Splunk)", "pc":{"r":170, "t":45}, "movement":"c"},
    {"name":"Message Buses without smarts", "pc":{"r":140, "t":85}, "movement":"c"},
    {"name":"NuGet", "pc":{"r":265, "t":27}, "movement":"t"},
    {"name":"Polyglot Persistence", "pc":{"r":225, "t":7}, "movement":"t"},
    {"name":"Powershell", "pc":{"r":160, "t":18}, "movement":"c"},
    {"name":"PSake", "pc":{"r":235, "t":40}, "movement":"t"},
    {"name":"Vagrant", "pc":{"r":165, "t":60}, "movement":"c"},
    {"name":"Gradle", "pc":{"r":310, "t":80}, "movement":"t"},
    {"name":"jQuery Mobile", "pc":{"r":345, "t":40}, "movement":"c"},
    {"name":"Logic-free markup", "pc":{"r":310, "t":55}, "movement":"t"},
    {"name":"Open Source BI/ETL tools", "pc":{"r":310, "t":18}, "movement":"c"},
    {"name":"Riak", "pc":{"r":310, "t":24}, "movement":"t"},
    {"name":"Sonar", "pc":{"r":290, "t":75}, "movement":"c"},
    {"name":"Code in Configuration", "pc":{"r":375, "t":72}, "movement":"c"},
    {"name":"Cross Platform Mobile Toolkits", "pc":{"r":375, "t":18}, "movement":"c"},
    {"name":"Enterprise Service Bus", "pc":{"r":375, "t":36}, "movement":"c"},
    {"name":"Maven", "pc":{"r":375, "t":29}, "movement":"t"},
    {"name":"VCS with \"implicit workflow\"", "pc":{"r":375, "t":54}, "movement":"c"},
    {"name":"ATOM", "pc":{"r":30, "t":202}, "movement":"c"},
    {"name":"AWS", "pc":{"r":115, "t":235}, "movement":"c"},
    {"name":"Care about hardware", "pc":{"r":75, "t":250}, "movement":"t"},
    {"name":"Communication between those responsible for hardware and software developers", "pc":{"r":75, "t":265}, "movement":"t"},
    {"name":"KVM", "pc":{"r":25, "t":245}, "movement":"c"},
    {"name":"Mobile Web", "pc":{"r":85, "t":210}, "movement":"c"},
    {"name":"Domain Specific PAAS", "pc":{"r":210, "t":258}, "movement":"t"},
    {"name":"Heroku", "pc":{"r":265, "t":254}, "movement":"c"},
    {"name":"Linux containers", "pc":{"r":212, "t":195}, "movement":"t"},
    {"name":"Offline mobile Webapps (just html5)", "pc":{"r":270, "t":240}, "movement":"c"},
    {"name":"Private clouds", "pc":{"r":220, "t":240}, "movement":"t"},
    {"name":"Tablet", "pc":{"r":170, "t":216}, "movement":"c"},
    {"name":"Ubiquitous computing", "pc":{"r":165, "t":260}, "movement":"c"},
    {"name":"Windows Phone 7", "pc":{"r":220, "t":211}, "movement":"t"},
    {"name":"AppHarbor", "pc":{"r":290, "t":186}, "movement":"t"},
    {"name":"Cloud foundry", "pc":{"r":310, "t":252}, "movement":"c"},
    {"name":"GPGPU", "pc":{"r":300, "t":190}, "movement":"c"},
    {"name":"Hybrid clouds", "pc":{"r":310, "t":226}, "movement":"t"},
    {"name":"Node.src", "pc":{"r":277, "t":202}, "movement":"c"},
    {"name":"OpenSocial", "pc":{"r":320, "t":248}, "movement":"t"},
    {"name":"Single threaded servers with asynchronous I/O", "pc":{"r":285, "t":197}, "movement":"t"},
    {"name":"vFabric", "pc":{"r":345, "t":192}, "movement":"c"},
    {"name":"Buying solutions you can only afford one of", "pc":{"r":375, "t":232}, "movement":"t"},
    {"name":"GWT", "pc":{"r":375, "t":224}, "movement":"c"},
    {"name":"Java portal servers", "pc":{"r":375, "t":235}, "movement":"c"},
    {"name":"RIA", "pc":{"r":375, "t":247}, "movement":"t"},
    {"name":"Treating VM's like physical infrastructure", "pc":{"r":375, "t":261}, "movement":"t"},
    {"name":"WS-*", "pc":{"r":375, "t":190}, "movement":"c"},
    {"name":"Zero-code packages", "pc":{"r":375, "t":201}, "movement":"t"},
    {"name":"Care about languages", "pc":{"r":75, "t":285}, "movement":"t"},
    {"name":"HTML 5", "pc":{"r":140, "t":330}, "movement":"c"},
    {"name":"JavaScript as a first class language", "pc":{"r":80, "t":300}, "movement":"c"},
    {"name":"Clojure", "pc":{"r":170, "t":292}, "movement":"t"},
    {"name":"Coffeescript", "pc":{"r":240, "t":340}, "movement":"c"},
    {"name":"Domain-Specific Languages", "pc":{"r":170, "t":320}, "movement":"c"},
    {"name":"SASS, SCSS, and LESS", "pc":{"r":210, "t":350}, "movement":"c"},
    {"name":"Scala", "pc":{"r":155, "t":300}, "movement":"c"},
    {"name":"ClojureScript", "pc":{"r":290, "t":286}, "movement":"t"},
    {"name":"F#", "pc":{"r":290, "t":320}, "movement":"c"},
    {"name":"Functional java", "pc":{"r":320, "t":356}, "movement":"t"},
    {"name":"Future of Java", "pc":{"r":325, "t":330}, "movement":"c"},
    {"name":"Google Dart", "pc":{"r":375, "t":294}, "movement":"t"},
    {"name":"Logic in stored Procedures", "pc":{"r":375, "t":315}, "movement":"c"}
];

//left to right -> top to bottom
var radarQuadrants = [
    {"name":"Techniques", "start":0, "end":34},
    {"name":"Tools", "start":34, "end":60},
    {"name":"Platforms", "start":60, "end":90},
    {"name":"Languages", "start":90, "end":104}
];

//
var radarArcs = [
    {'r':150, 'name':'Adopt'},
    {'r':275, 'name':'Trial'},
    {'r':350, 'name':'Assess'},
    {'r':400, 'name':'Hold'}
];

var radarTitle = "ThoughtWorks Technology Radar (January 2012)";