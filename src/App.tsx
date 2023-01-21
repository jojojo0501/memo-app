import React, { ChangeEvent, memo, useCallback, useState } from 'react';
import './App.css';
import { InputArea } from './components/InputArea';
import { AddButton } from './components/AddButton';
import { MemoList } from './components/MemoList';
import { useMemoList } from './hooks/useMemoList';

function App() {
  const { memoList, addText, deleteText } = useMemoList();
  const [inputValue, setInputValue] = useState('');

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onClickAdd = () => {
    addText(inputValue);
    setInputValue('');
  };

  const onClickDelete = useCallback(
    (index: number) => {
      deleteText(index);
    },
    [deleteText]
  );

  return (
    <>
      <h1>メモアプリ</h1>
      <InputArea
        inputValue={inputValue}
        onChangeInputValue={onChangeInputValue}
      />
      <AddButton onClickAdd={onClickAdd} text={inputValue} />
      <div>
        <h2>メモ一覧</h2>
        <MemoList memoList={memoList} onClickDelete={onClickDelete} />
      </div>
    </>
  );
}

export default App;
