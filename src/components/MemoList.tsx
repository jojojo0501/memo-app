import React, { memo } from 'react';
import { DeleteButton } from './DeleteButton';

type Props = {
  memoList: string[];
  onClickDelete: (index: number) => void;
};

export const MemoList = memo((props: Props) => {
  const { memoList, onClickDelete } = props;
  return (
    <>
      <ul>
        {memoList.map((memo, index) => {
          return (
            <li key={index}>
              <p>{memo}</p>
              <p>{index}</p>
              <DeleteButton onClickDelete={onClickDelete} index={index} />
            </li>
          );
        })}
      </ul>
    </>
  );
});
