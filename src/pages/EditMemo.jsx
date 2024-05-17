import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { useMemoStore } from "../store/useMemoStore";
import { useParams } from "react-router-dom";

export default function EditMemo() {
  const { memoId } = useParams();
  const { memos, addMemo, updateMemo } = useMemoStore();
  const [text, setText] = useState(setInitialText(memoId, memos));
  const textRef = useRef(text);
  const handleChange = (e, key) =>
    setText((prev) => {
      const newText = { ...prev, [key]: e.target.value };
      textRef.current = newText;
      return newText;
    });
  const saveMemo = (memo) => {
    const { title, content } = memo;
    if (title || content) {
      const memoData = {
        id: memoId || uuid(),
        title: title.trim() || "제목없음",
        content,
      };
      memoId ? updateMemo(memoData) : addMemo(memoData);
    }
  };
  console.log(text);
  useEffect(() => {
    return () => {
      saveMemo(textRef.current);
    };
  }, []);
  return (
    <form>
      <input
        value={text.title}
        type="text"
        placeholder="title"
        onChange={(e) => handleChange(e, "title")}
      />
      <textarea
        value={text.content}
        placeholder="content"
        onChange={(e) => handleChange(e, "content")}
      ></textarea>
    </form>
  );
}

function setInitialText(memoId, memos) {
  return memoId
    ? memos.find((memo) => memo.id === memoId)
    : { title: "", content: "" };
}
