import { EventHandler } from '@create-figma-plugin/utilities'

export interface CreateRectanglesHandler extends EventHandler {
  name: 'CREATE_RECTANGLES'
  handler: (count: number) => void
}

export interface CloseHandler extends EventHandler {
  name: 'CLOSE'
  handler: () => void
}

export interface DropHandler extends EventHandler {
  name: 'DROP'
  handler: (pluginDrop:PluginDrop) => void
}

export interface PluginDrop {
  x:number
  y:number
  file:string
}

export interface CategoryInterface {
  iconColor: string
  title: string
  creator: string
}

export interface AssetInterface {
  title: string
}