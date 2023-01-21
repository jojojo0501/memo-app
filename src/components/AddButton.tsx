import React, { ChangeEvent, useState } from 'react';

type Props = {
  onClickAdd: (text: string) => void;
  text: string;
};

export const AddButton = (props: Props) => {
  const { onClickAdd, text } = props;
  return <button onClick={() => onClickAdd(text)}>追加</button>;
};
