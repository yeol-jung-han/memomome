import { useNavigate } from "react-router-dom";

export default function MemoCard({ memo }) {
  const handleClick = () => {
    navigate(`/memos/detail/${memo.id}`, { state: { memo } });
  };
  const navigate = useNavigate();

  return (
    <li onClick={handleClick}>
      <h2>{memo.title}</h2>
    </li>
  );
}
