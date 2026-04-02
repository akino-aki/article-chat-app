"use client";

import { useState } from "react";
import { ChatArea } from "@/components/ChatArea";
import { Header } from "@/components/Header";
import { LeftSidebar } from "@/components/LeftSidebar";
import { RightPanel } from "@/components/RightPanel";

type Message = {
  role: "user" | "assistant";
  text: string;
};

type Thread = {
  id: string;
  title: string;
  description: string;
  messages: Message[];
};

export default function Home() {
  const projects = ["AWS精読アプリ", "ブログ記事生成"];

  const [threads, setThreads] = useState<Thread[]>([
    {
      id: "thread-1",
      title: "Bedrock構成検討",
      description: "AIとの会話をためて、あとで記事化するためのスレッド",
      messages: [
        {
          role: "user",
          text: "AIとの会話ログから記事を作るアプリを作りたいです。",
        },
        {
          role: "assistant",
          text: "まずはUIを最小構成で作るのがおすすめです。",
        },
      ],
    },
    {
      id: "thread-2",
      title: "AppSync調査",
      description: "AppSync を使うべきか調べるためのスレッド",
      messages: [
        { role: "user", text: "AppSyncって今回の構成に合いますか？" },
        {
          role: "assistant",
          text: "将来的に相性は良いですが、MVPならRESTでも十分です。",
        },
      ],
    },
    {
      id: "thread-3",
      title: "画像アップロード案",
      description: "記事に使う画像の扱いを考えるためのスレッド",
      messages: [
        {
          role: "user",
          text: "画像はチャットで貼ったものを記事に流用したいです。",
        },
        {
          role: "assistant",
          text: "最初は画像一覧を右パネルに出すだけでも十分です。",
        },
      ],
    },
  ]);

  const [selectedThreadId, setSelectedThreadId] = useState("thread-1");

  const selectedThread =
    threads.find((thread) => thread.id === selectedThreadId) ?? threads[0];

  const handleSelectThread = (threadId: string) => {
    setSelectedThreadId(threadId);
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    setThreads((prevThreads) =>
      prevThreads.map((thread) =>
        thread.id === selectedThreadId
          ? {
              ...thread,
              messages: [...thread.messages, { role: "user", text }],
            }
          : thread
      )
    );
  };

  const handleAddThread = () => {
    const newThreadId = `thread-${Date.now()}`;

    const newThread: Thread = {
      id: newThreadId,
      title: `new Thread ${threads.length + 1}`,
      description: "新しく作成したスレッドです。",
      messages: [],
    };

    setThreads((prevThreads) => [...prevThreads, newThread]);
    setSelectedThreadId(newThreadId);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header />

      <div className="grid h-[calc(100vh-56px)] grid-cols-[260px_1fr_320px]">
        <LeftSidebar
          projects={projects}
          threads={threads}
          selectedThreadId={selectedThreadId}
          onSelectThread={handleSelectThread}
          onAddThread={handleAddThread}
        />

        <ChatArea
          title={selectedThread.title}
          description={selectedThread.description}
          messages={selectedThread.messages}
          onSendMessage={handleSendMessage}
        />

        <RightPanel />
      </div>
    </main>
  );
}
