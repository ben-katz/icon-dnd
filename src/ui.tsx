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
import { useCallback, useState } from 'preact/hooks'
import { AssetInterface, CloseHandler} from './types'


import assetData from './data/assets'

import styles from './styles.css'
import Asset from './components/Asset'
import CategoryList from './components/categories'

function Plugin() {

  const handleCloseButtonClick = useCallback(function () {
    emit<CloseHandler>('CLOSE')
  }, [])

  const [selectedCategory, setSelectedCategory] = useState<string>('none')

  function handleCategorySelection() {
    console.log('category clicked')
  }

  return (
    <div className={styles.plugin_container}>

      <div className={styles.featured_image}></div>

      <div class={styles.items_grid}>
        {selectedCategory === 'none' ? <CategoryList/>: assetData.assets.map((asset:AssetInterface) => <Asset title={asset.title}/> )}  
      </div>
      <VerticalSpace space="small" />
    </div>
  )
}

export default render(Plugin)
