import React from 'react';
import { Input as NavInput, InputProps as NavInputProps } from 'nav-frontend-skjema';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps extends NavInputProps {
  type: string;
  register?: UseFormRegisterReturn;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, input: string) => void;
}

function FormInput(props: InputProps) {
  const { type, register, handleChange, ...others } = props;
  if (register) {
    const { ref, ...registerOthers } = register;
    return (
      <NavInput
        inputRef={ref}
        {...registerOthers}
        {...others}
        onChange={e => handleChange(e, type)}
        className="rediger-opprett-tiltakstype__form__input"
      />
    );
  }
  return <NavInput {...others} onChange={e => handleChange(e, type)} />;
}

export default FormInput;
