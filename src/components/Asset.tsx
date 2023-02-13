import { h } from "preact";
import styles from "../styles.css";
import { AssetInterface } from "../types";

export default function Asset({title}:AssetInterface) {
    // code
    return (
      <div class={styles.item} draggable={true}>
      <div className={styles.item_preview}></div>
      <div className={styles.item_content}>
        <div className={styles.item_content_text}>
          <span className={styles.item_content_text_title}>{title}</span>
        </div>
      </div>
    </div>
    )
}