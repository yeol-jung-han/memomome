import { useMemoStore } from "../store/useMemoStore";

export default function Memos() {
  const { memos } = useMemoStore();
  console.log(memos);
  return (
    <ul>
      {memos.map((memo) => (
        <li key={memo.id}>{memo.title}</li>
      ))}
    </ul>
  );
}
