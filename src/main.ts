import { on, once, showUI } from '@create-figma-plugin/utilities'

import { CloseHandler, DropHandler, PluginDrop } from './types'

export default function () {

  on<DropHandler>('DROP', function (pluginDrop: PluginDrop) {

    

    if (pluginDrop.file) {

      console.log(figma.viewport.bounds.x);
      console.log(figma.viewport.bounds.y);

      console.log();      

      const newNode = figma.createNodeFromSvg(pluginDrop.file);
      newNode.x = figma.viewport.bounds.x + pluginDrop.x - 400;
      newNode.y = figma.viewport.bounds.y + pluginDrop.y - 136;

      figma.currentPage.selection = [newNode];



      return false;

    }

  })

  figma.on('drop', (event) => {
    const { items, node, dropMetadata } = event
  
    if (items.length > 0 && items[0].type === 'image/svg+xml') {
      const newNode = figma.createNodeFromSvg(items[0].data)

      if (node.type === 'FRAME' ||
          node.type === 'GROUP' ||
          node.type === 'PAGE') {
            node.appendChild(newNode)
      }
  
      newNode.x = event.x
      newNode.y = event.y
      figma.currentPage.selection = [newNode]
  
      return false
    }
    return false;
  });

  once<CloseHandler>('CLOSE', function () {
    figma.closePlugin()
  })

  showUI({
    height: 700,
    width: 400
  })
}
