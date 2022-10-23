import React from "react";
import { Field, ErrorMessage, FieldAttributes } from "formik";

import styles from "./FieldInput.module.scss";
import { Label } from "./Label";
import classNames from "classnames";

interface IFieldInput extends FieldAttributes<any> {
  label: string;
  name: string;
}

export const TextError = (props: any) => (
  <div className={styles["FieldInput__error"]}>{props.children}</div>
);

export const FieldInput = ({
  name,
  label,
  className,
  ...rest
}: IFieldInput) => {
  return (
    <div className={classNames(styles["FieldInput"], className)}>
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
