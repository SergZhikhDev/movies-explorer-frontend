import { useState } from "react";
import { useValidation } from "./useValidation";

export const useInputt = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setisDirty] = useState(false);
  const valid = useValidation(value, validations);
  const { errorsKit, inputValid } = valid;

  const handleChange = (e) => {
    //убирает имеющиеся значения
    e.persist();
    setisDirty(true);
    setValue(e.target.value);
  };
  const onClick = (e) => {
    setisDirty(false);
    // setField(e.target.name);
    valid.onClack(e);
  };

  const onBlur = (e) => {
    setisDirty(true);
  };

  return {
    value,
    errorsKit,
    inputValid,
    onBlur,
    handleChange,
    onClick,
    isDirty,
    ...valid,
  };
};
