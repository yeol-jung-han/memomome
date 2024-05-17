import { create } from "zustand";

const loadMemos = () => {
  const memos = localStorage.getItem("memos");
  return memos ? JSON.parse(memos) : [];
};

const saveMemos = (memos) => {
  localStorage.setItem("memos", JSON.stringify(memos));
};

export const useMemoStore = create((set) => ({
  memos: loadMemos(),
  addMemo: (newMemo) =>
    set((state) => {
      const updatedMemos = [...state.memos, newMemo];
      saveMemos(updatedMemos);
      return { memos: updatedMemos };
    }),
}));
