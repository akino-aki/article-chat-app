type Thread = {
  id: string;
  title: string;
  description: string;
  messages: {
    role: "user" | "assistant";
    text: string;
  }[];
};

type LeftSidebarProps = {
  projects: string[];
  threads: Thread[];
  selectedThreadId: string;
  onSelectThread: (threadId: string) => void;
};

export function LeftSidebar({
  projects,
  threads,
  selectedThreadId,
  onSelectThread,
}: LeftSidebarProps) {
  return (
    <aside className="border-r border-zinc-800 p-4">
      <div className="mb-6">
        <div className="mb-2 text-xs font-bold uppercase tracking-wide text-zinc-400">
          Projects
        </div>
        <ul className="space-y-2">
          {projects.map((project) => (
            <li
              key={project}
              className="rounded-lg bg-zinc-900 px-3 py-2 text-sm hover:bg-zinc-800"
            >
              {project}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="mb-2 text-xs font-bold uppercase tracking-wide text-zinc-400">
          Threads
        </div>

        <ul className="space-y-2">
          {threads.map((thread) => {
            const isSelected = thread.id === selectedThreadId;

            return (
              <li key={thread.id}>
                <button
                  onClick={() => onSelectThread(thread.id)}
                  className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                    isSelected
                      ? "bg-blue-600 text-white"
                      : "bg-zinc-900 hover:bg-zinc-800"
                  }`}
                >
                  {thread.title}
                </button>
              </li>
            );
          })}
        </ul>

        <button className="mt-4 w-full rounded-lg bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-300">
          + New Thread
        </button>
      </div>
    </aside>
  );
}