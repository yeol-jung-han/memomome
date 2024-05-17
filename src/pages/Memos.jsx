import MemoCard from "../components/MemoCard";
import { useMemoStore } from "../store/useMemoStore";

export default function Memos() {
  const { memos } = useMemoStore();
  return (
    <ul>
      {memos.map((memo) => (
        <MemoCard key={memo.id} memo={memo} />
      ))}
    </ul>
  );
}
