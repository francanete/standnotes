import React from "react";
import { Field, ErrorMessage, FieldAttributes } from "formik";

import styles from "./FieldInput.module.scss";
import { Label } from "./Label";

interface IFieldInput extends FieldAttributes<any> {
  label: string;
  name: string;
}

export const TextError = (props: any) => (
  <div className={styles["FieldInput__error"]}>{props.children}</div>
);

export const FieldInput = ({ name, label, ...rest }: IFieldInput) => {
  return (
    <div className={styles["FieldInput"]}>
      <Label htmlFor={name}>{label}</Label>
      <Field
        id={name}
        name={name}
        {...rest}
        className={styles["FieldInput__input"]}
      />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};
