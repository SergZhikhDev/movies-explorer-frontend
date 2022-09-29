import { useState, useEffect } from "react";
import { useValidation } from "./useValidation";
import { messages } from "../utils/constants";
export const useInputt = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setisDirty] = useState(false);
  const valid = useValidation(value, validations);
  const {
    emptyError,
    minLengthError,
    maxLengthError,
    nameError,
    emailError,
    passwordError,
  } = valid;

  const [field, setField] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    emptyError
      ? setErrors({
          ...errors,
          message: messages.errorMessages.emptyError,
        })
      : minLengthError
      ? setErrors({
          ...errors,
          message: messages.errorMessages.minLengthError,
        })
      : maxLengthError
      ? setErrors({
          ...errors,
          message: messages.errorMessages.maxLengthError,
        })
      : nameError
      ? setErrors({
          ...errors,
          message: messages.errorMessages.nameError,
        })
      : emailError && isDirty
      ? setErrors({
          ...errors,
          message: messages.errorMessages.emailError,
        })
      : passwordError
      ? setErrors({
          ...errors,
          message: messages.errorMessages.passwordError,
        })
      : setErrors({
          ...errors,
          message: ``,
        });
  }, [
    emptyError,
    minLengthError,
    maxLengthError,
    nameError,
    emailError,
    passwordError,
    isDirty,
  ]);

  const handleChange = (e) => {
    //убирает имеющиеся значения
    e.persist();
    setisDirty(true);
    setValue(e.target.value);
    setField(e.target.name);
  };
  const onClick = (e) => {
    setisDirty(false);
  };

  const onBlur = (e) => {
    setisDirty(true);
  };

  return {
    value,
    errors,
    onBlur,
    handleChange,
    onClick,
    isDirty,
    field,
    ...valid,
  };
};
