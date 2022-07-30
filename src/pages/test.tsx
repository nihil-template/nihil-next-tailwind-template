import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { ChangeWord } from '@/reducers/TestReducer';

const IndexPage = () => {
  const word = useSelector((state: RootState) => state.test.word);
  const dispatch = useDispatch<AppDispatch>();

  const onClickButton = useCallback(() => {
    dispatch(ChangeWord());
  }, [ word, ]);

  const IndexPageStyle = `p-[10px] bg-[#333333] text-white mb-[10px]`;

  const buttonStyle = `block text-center mx-auto p-[10px] bg-[#ffffff] text-[#333333] border-1 border-[#33333330] shadow-lg shadow-[#33333350] rounded-[10px] hover:text-white hover:bg-[#333333]`;

  return (
    <>
      <div className={IndexPageStyle}>Hello {word}!!</div>
      <button type='button' className={buttonStyle} onClick={onClickButton}>
        클릭해서 변경
      </button>
    </>
  );
};

export default IndexPage;
