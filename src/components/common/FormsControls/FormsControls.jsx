import React from "react";
import s from './FormsControls.module.scss'

export const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={s.wrapper + ' ' + (meta.touched && meta.error && s.error) }>
            <div>
                <textarea {...input} {...props} />
            </div>
            {meta.touched && meta.error && <span>{meta.error}</span>}


        </div>
    )
}

export const InputC = ({input, meta, ...props}) => {
    return (
        <div className={meta.touched && meta.error && s.error}>
            <div>
                <input {...input} {...props} />
            </div>
            {meta.touched && meta.error && <span>{meta.error}</span>}


        </div>
    )
}