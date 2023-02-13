import {
  Button,
  Columns,
  Container,
  Muted,
  render,
  Stack,
  Text,
  TextboxNumeric,
  VerticalSpace
} from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { h } from 'preact'
import { useCallback, useState, useEffect } from 'preact/hooks'
import { AssetInterface, CategoryInterface, CloseHandler, CreateRectanglesHandler, DropHandler, PluginDrop } from './types'

import categoriesData from './data/categories'
import assetData from './data/assets'
import Category from './components/Category'

import styles from './styles.css'
import Asset from './components/Asset'

function Plugin() {

  useEffect(() => {
    const icons:Element[] = Array.from(document.getElementsByClassName('icon'))
    for (const icon of icons) {
      icon.addEventListener('dragend', (e) => {
        // Don't proceed if the item was dropped inside the plugin window.
  
        console.log(e);

        if(e && e.target && e instanceof MouseEvent) {

          const element = e.target as HTMLElement;

          // const blob = new Blob([element.innerHTML], {type: 'image/svg+xml'});

          // const file = new File(
          //   [blob],
          //   'content.svg',
          //   { type: 'image/svg+xml' }
          // );

          const pluginDrop: PluginDrop = {
            x: e.pageX,
            y: e.pageY,
            file: element.innerHTML
          }

          window.parent.postMessage(
            {
              pluginDrop: {
                clientX: e.clientX,
                clientY: e.clientY,
                items: [{ type: 'image/svg+xml', data: element.innerHTML }],
              }
            },
            '*'
          )

          // emit<DropHandler>('DROP', pluginDrop)
  
        }
      });
    }
  }, [])

  const handleCloseButtonClick = useCallback(function () {
    emit<CloseHandler>('CLOSE')
  }, [])

  return (
    <div className={styles.plugin_container}>

      <div className={styles.featured_image}></div>

      <div class={styles.items_grid}>

        {categoriesData.categories.map((category:CategoryInterface) => <Category iconColor={category.iconColor} title={category.title} creator={category.creator}/> )}
        {assetData.assets.map((asset:AssetInterface) => <Asset title={asset.title}/> )}
            
        {/* <div class={styles.item} draggable={true}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg>
        </div>

        <div class={styles.item} draggable={true}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        </div>

        <div class={styles.item} draggable={true}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-align-center"><line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line></svg>
        </div>

        <div class={styles.item} draggable={true}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-anchor"><circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path></svg>
        </div>

        <div class={styles.item} draggable={true}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>
        </div>

        <div class={styles.item} draggable={true}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
        </div>

        <div class={styles.item} draggable={true}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bluetooth"><polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline></svg>
        </div> */}
      </div>
      <VerticalSpace space="small" />
    </div>
  )
}

export default render(Plugin)
