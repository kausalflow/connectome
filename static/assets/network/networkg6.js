const graph = new G6.Graph({
    container: 'network-graph',
    // width: "100%",
    // height: "100%",
    fitView: true,
    fitViewPadding: [20, 40, 50, 20],
    defaultNode: {
      size: 5,
      labelCfg: {
        style: {
          fill: '#000',
        },
      },
    },
    defaultEdge: {
      labelCfg: {
        autoRotate: true,
      },
    },
    layout: {
        type: 'gForce',
        preventOverlap: true,
        nodeSize: 5,
        linkDistance: 1000,
    },
    modes: {
      default: ['drag-canvas', 'zoom-canvas', 'drag-node'], // 允许拖拽画布、放缩画布、拖拽节点
    },
  });
  const main = async () => {
    const response = await fetch(
      '/networkg6.json',
    );
    const remoteData = await response.json();
    const nodes = remoteData.nodes;
    const edges = remoteData.edges;
    nodes.forEach((node) => {
      if (!node.style) {
        node.style = {};
      }
      node.style.lineWidth = 2;
      node.style.stroke = '#666';
      node.style.fill = 'steelblue';
    });
    graph.data(remoteData);
    graph.render();
  };
  main();