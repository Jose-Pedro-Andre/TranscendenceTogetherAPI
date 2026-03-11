import { SendHorizontal } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const INITIAL_MESSAGES = [
  { user: "Edmilson Wy DURO", msg: "Essa cena é incrível! 🦁" },
  { user: "Gilson", msg: "Melhor filme de todos os tempos" },
  { user: "Luzizila", msg: "Quem mais tá chorando? 😭" },
  { user: "Liedson come empresário", msg: "Hakuna Matata!! 🎶" },
];

function LiveChat() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function sendMessage() {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { user: "Você", msg: text }]);
    setInput("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") sendMessage();
  }

  return (
    <div className="bg-card rounded-xl border border-border p-5">
      <h3 className="text-sm font-semibold text-foreground mb-3">Chat ao vivo</h3>
      <div
        className="space-y-2.5 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-secondary scrollbar-track-card"
        style={{ height: 200 }}
      >
        {messages.map((chat, i) => (
          <div key={i} className="text-xs">
            <span className="font-semibold text-primary">{chat.user}: </span>
            <span className="text-muted-foreground">{chat.msg}</span>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="mt-3 flex items-center gap-2 bg-secondary rounded-lg">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enviar mensagem..."
          className="bg-transparent w-full h-full px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="px-2 py-2 rounded-lg text-primary text-xs font-medium hover:bg-secondary/20 transition-colors"
        >
          <SendHorizontal size={20} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}

export default LiveChat;