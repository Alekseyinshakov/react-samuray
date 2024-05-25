import React from "react";
import {Field, Form, Formik} from "formik";
import s from "./ProfileInfo.module.scss"

export const InfoForm = (props) => {
    let profile = props.profile;
    return (<div className={s.form_container}>
            <h1>Форма редактирования профиля</h1>
            <Formik
                onSubmit={({ setSubmitting }) => {
                    console.log("Form is validated! Submitting the form...");
                    setSubmitting(false);
                }}
                initialValues={{
                    fullName: profile.fullName,
                    lookingForAJob: profile.lookingForAJob,
                    lookingForAJobDescription: profile.lookingForAJobDescription
                }}
            >

                {() => (
                    <Form>
                        <div className={s.row}>
                            <span>fullName:</span>
                            <Field
                                type="text"
                                name="fullName"
                                placeholder="Full name"
                            />
                        </div>
                        <div className={s.row}>
                            <span>lookingForAJob:</span>
                            <Field
                                type="checkbox"
                                name="lookingForAJob"
                            />
                        </div>
                        <div className={s.row}>
                            <span>lookingForAJobDescription:</span>
                            <Field
                                type="text"
                                name="lookingForAJobDescription"
                            />
                        </div>
                        <div>CONTACTS</div>
                        {Object.keys(props.profile.contacts).map((key) => {
                            return <div className={s.row}>
                                <span>{key}</span>
                                <Field
                                    type="text"
                                    name={key}
                                    placeholder={key}
                                />
                            </div>
                        })}
                        <button>Save!</button>
                    </Form>
                )}
            </Formik>
        </div>

    )
}