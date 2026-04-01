'use client';

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  text: string;
};

type ChatAreaProps = {
  title: string;
  description: string;
  messages: Message[];
  onSendMessage: (text: string) => void;
};

export function ChatArea({
  title,
  description,
  messages,
  onSendMessage,
}: ChatAreaProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;

    onSendMessage(inputValue);
    setInputValue("");
  };

  return (
    <section className="flex flex-col">
      <div className="border-b border-zinc-800 px-6 py-4">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="mt-1 text-sm text-zinc-400">{description}</p>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto px-6 py-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`max-w-3xl rounded-2xl px-4 py-3 text-sm leading-6 ${
              message.role === "user"
                ? "ml-auto bg-blue-600 text-white"
                : "bg-zinc-900 text-zinc-100"
            }`}
          >
            <div className="mb-1 text-xs opacity-70">
              {message.role === "user" ? "You" : "AI"}
            </div>
            <div>{message.text}</div>
          </div>
        ))}
      </div>

      <div className="border-t border-zinc-800 p-4">
        <div className="flex gap-3">
          <button className="rounded-lg border border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-900">
            + Image
          </button>

          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="flex-1 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm outline-none placeholder:text-zinc-500"
            placeholder="メッセージを入力..."
          />

          <button
            onClick={handleSend}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-500"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
}