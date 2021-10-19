import React from 'react';
import { Input as NavInput, InputProps as NavInputProps } from 'nav-frontend-skjema';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps extends NavInputProps {
  register?: UseFormRegisterReturn;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, input?: string) => void;
}

function FormInput(props: InputProps) {
  const { register, handleChange, id, ...others } = props;
  if (register) {
    const { ref, ...registerOthers } = register;
    return <NavInput inputRef={ref} {...registerOthers} {...others} onChange={e => handleChange(e, id)} />;
  }
  return <NavInput {...others} onChange={e => handleChange(e, id)} />;
}

export default FormInput;
