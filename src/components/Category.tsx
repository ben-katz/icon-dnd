import { h } from "preact";
import { useRef, useState } from "preact/hooks";
import styles from "../styles.css";
import { CategoryInterface } from "../types";

export default function Category({ iconColor, title, creator }: CategoryInterface) {

    const [isDragging, setIsDragging] = useState(false);
    const dragItem = useRef()

    function handleDragEnd(e: h.JSX.TargetedDragEvent<HTMLDivElement>) {
        // TODO: Don't proceed if the item was dropped inside the plugin window.
        if (e && e.target && e instanceof MouseEvent) {
            const element = e.target as HTMLElement;
            window.parent.postMessage(
                {
                    pluginDrop: {
                        clientX: e.clientX,
                        clientY: e.clientY,
                        items: [{ type: 'image/svg+xml', data: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg>` }],
                    }
                },
                '*'
            )
        }
    }

    return (
        <div class={styles.item}>
            <div
                className={styles.item_preview}
                draggable={true}
                onDragEnd={(e) => handleDragEnd(e)}
            ></div>
            <div className={styles.item_content}>
                <div className={`${styles.item_content_icon} ${styles[`icon_${iconColor}` as keyof typeof styles]}`}></div>
                <div className={styles.item_content_text}>
                    <span className={styles.item_content_text_title}>{title}</span>
                    <span className={styles.item_content_text_description}>{creator}</span>
                </div>
            </div>
        </div>
    )
}