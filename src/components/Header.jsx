import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="">gohome</Link>
      <Link to="/memos/edit">추가</Link>
    </header>
  );
}
