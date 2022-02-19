const tooltip = new G6.Tooltip({
  offsetX: 10,
  offsetY: 10,
  fixToNode: [1, 0.5],
  // the types of items that allow the tooltip show up
  // 允许出现 tooltip 的 item 类型
  itemTypes: ['node'],
  // custom the tooltip's content
  // 自定义 tooltip 内容
  getContent: (e) => {
    const outDiv = document.createElement('div');
    outDiv.style.width = 'fit-content';
    outDiv.style.height = 'fit-content';
    const model = e.item.getModel();
    if (e.item.getType() === 'node') {
      outDiv.innerHTML = `Title: ${model.label}<br>Categories: ${model.properties.categories}<br>Tags: ${model.properties.tags}<br>Link: <a href="${model.properties.link}">${model.properties.link}</a>`;
    }
    return outDiv;
  },
});

const minimap = new G6.Minimap({
  size: [150, 100],
});

const toolbar = new G6.ToolBar({
  position: { x: 10, y: 10 },
});

let fisheye = new G6.Fisheye({
  r: 200,
  showLabel: true,
});


const graph = new G6.Graph({
    container: 'network-graph',
    // width: "100%",
    // height: "100%",
    fitView: true,
    fitViewPadding: [20, 40, 50, 20],
    defaultNode: {
      size: [5, 5],
      labelCfg: {
        style: {
          fill: '#000',
        },
      },
    },
    defaultEdge: {
      /* style for the keyShape */
      style: {
        stroke: '#aaa',
        lineAppendWidth: 2,
        opacity: 0.3,
      },
      labelCfg: {
        autoRotate: true,
      },
    },
    plugins: [tooltip, toolbar],
    layout: {
        // type: 'gForce',
        // preventOverlap: true,
        // nodeSize: 5,
        // linkDistance: 1000,
        // fruchterman is good
        type: 'fruchterman',
        gravity: 5,
        speed: 5,
        clustering: true,
        gpuEnabled: true,
    },
    modes: {
      default: ['drag-canvas', 'zoom-canvas', 'drag-node', 'activate-relations'],
    },
  });
  const main = async () => {
    const response = await fetch(
      '/network.json',
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

    if (typeof window !== 'undefined')
    window.onresize = () => {
      if (!graph || graph.get('destroyed')) return;
      if (!container || !container.scrollWidth || !container.scrollHeight) return;
      graph.changeSize(container.scrollWidth, container.scrollHeight - 110);
    };



  };
  main();