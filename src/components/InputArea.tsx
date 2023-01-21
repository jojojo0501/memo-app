import React, { ChangeEvent, useState } from 'react';

type Props = {
  inputValue: string;
  onChangeInputValue: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const InputArea = (props: Props) => {
  const { inputValue, onChangeInputValue } = props;
  return <input value={inputValue} onChange={onChangeInputValue} />;
};
