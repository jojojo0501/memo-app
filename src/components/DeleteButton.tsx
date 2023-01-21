import React from 'react';

type Props = {
  onClickDelete: (index: number) => void;
  index: number;
};

export const DeleteButton = (props: Props) => {
  const { onClickDelete, index } = props;
  return <button onClick={() => onClickDelete(index)}>削除</button>;
};
