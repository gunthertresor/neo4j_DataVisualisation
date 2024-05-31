//import {submitQuery} from queryBtn.js

    let neoViz;

    function draw() {
        const config = {
            containerId: "viz",
            neo4j: {
                serverUrl: "bolt://44.223.111.109:7687",
                serverUser: "neo4j",
                serverPassword: "produce-pulls-forecast",
            },
            labels: {
                Character: {
                    label: "name",
                    value: "pagerank",
                    group: "community",
                    [NeoVis.NEOVIS_ADVANCED_CONFIG]: {
                        function: {
                            //label: (node) => `${node.properties.name},${node.properties.firstname}`
                            label: (node) => `${node.properties.name}`
                        }
                    }
                }
            },
            relationships: {
                INTERACTS: {
                    value: "weight"
                }
            },


            // initialCypher: "MATCH (n)-[r:INTERACTS]->(m) RETURN n,r,m LIMIT 100"
            initialCypher:"MATCH (n)-[r:INTERACTS]->(m) RETURN n,r,m LIMIT 100"
            //initialCypher: btnInput

        };

        neoViz = new NeoVis.default(config);
        neoViz.render();
        console.log(viz);
    }



    window.draw = draw;
