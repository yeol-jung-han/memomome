import { Link, useParams } from "react-router-dom";

export default function Header() {
  const { memoId } = useParams();
  return (
    <header>
      <Link to="">gohome</Link>
      <Link to="/memos/edit">추가</Link>
      {memoId && <Link to={`/memos/edit/${memoId}`}>수정</Link>}
    </header>
  );
}
