export default function Chat({ chat, i }) {
  return (
    <>
      <div key={i} className={`list ${chat.type}-chat`}>
        <div className="content">{chat.content}</div>
      </div>
    </>
  );
}
