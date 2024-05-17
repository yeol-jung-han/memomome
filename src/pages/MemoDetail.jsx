import { useLocation, useParams } from "react-router-dom";

export default function MemoDetail() {
  const location = useLocation();
  const { title, content } = location.state?.memo ?? {};
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
