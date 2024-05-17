import { useNavigate } from "react-router-dom";
import { useMemoStore } from "../store/useMemoStore";

export default function MemoCard({ memo }) {
  const { deleteMemo } = useMemoStore();
  const handleClick = (e) => {
    if (e.target.id === "deleteBtn") {
      deleteMemo(memo);
      return;
    }
    navigate(`/memos/detail/${memo.id}`, { state: { memo } });
  };
  const navigate = useNavigate();

  return (
    <li onClick={handleClick}>
      <h2>{memo.title}</h2>
      <span id="deleteBtn">삭제</span>
    </li>
  );
}
