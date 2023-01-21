import React, { useState, useCallback } from 'react';

export const useMemoList = () => {
  const [memoList, setMemoList] = useState<string[]>([]);

  const addText = useCallback(
    (text: string) => {
      const newMemoList = [...memoList];
      newMemoList.push(text);
      setMemoList(newMemoList);
    },
    [memoList]
  );

  const deleteText = useCallback(
    (index: number) => {
      const newMemoList = [...memoList];
      newMemoList.splice(index, 1);
      setMemoList(newMemoList);
    },
    [memoList]
  );
  return { memoList, addText, deleteText };
};
