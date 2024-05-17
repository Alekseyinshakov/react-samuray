import styles from "./Paginator.module.scss";
import React from "react";

export const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (

            <div className={styles.pagination}>
                {pages.map(item => {
                    return <span onClick={(e) => {
                        props.onPageChanged(item)
                    }} className={item === props.currentPage && styles.currentPage}>{item}</span>
                })}

            </div>

    )
}