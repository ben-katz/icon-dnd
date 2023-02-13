import { h } from "preact";
import styles from "../styles.css";
import { CategoryInterface } from "../types";

export default function Category({iconColor, title, creator}:CategoryInterface) {
    // code
    return (
      <div class={styles.item} draggable={true}>
      <div className={styles.item_preview}></div>
      <div className={styles.item_content}>
        <div className={styles.item_content_icon  }></div>
        <div className={styles.item_content_text}>
          <span className={styles.item_content_text_title}>{title}</span>
          <span className={styles.item_content_text_description}>{creator}</span>
        </div>
      </div>
    </div>
    )
}