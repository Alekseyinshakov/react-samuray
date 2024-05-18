import styles from "./Paginator.module.scss";
import React, {useState} from "react";

export const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionSize = props.portionSize;
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftBorder = ( portionNumber - 1) * portionSize + 1;
    let rightBorder = portionNumber * portionSize;


    return (

            <div className={styles.pagination}>
                <div className={styles.pagination_inner}>
                    {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}
                    {pages
                        .filter(p => p >= leftBorder && p <= rightBorder)
                        .map(item => {
                            return <span onClick={(e) => {
                                props.onPageChanged(item)
                            }} className={item === props.currentPage && styles.currentPage}>{item}</span>
                        })}
                    {( portionCount > portionNumber)  && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
                </div>
            </div>
    )
}