export function RightPanel() {
  return (
    <aside className="border-l border-zinc-800 p-4">
      <div className="mb-6">
        <div className="mb-2 text-xs font-bold uppercase tracking-wide text-zinc-400">
          概要
        </div>
        <div className="rounded-xl bg-zinc-900 p-4 text-sm leading-6 text-zinc-300">
          このスレッドでは、ブログ記事生成アプリの最初のUI構成を検討しています。
        </div>
      </div>

      <div className="mb-6">
        <div className="mb-2 text-xs font-bold uppercase tracking-wide text-zinc-400">
          記事化
        </div>
        <div className="space-y-3 rounded-xl bg-zinc-900 p-4">
          <div>
            <div className="text-xs text-zinc-400">テンプレート</div>
            <div className="mt-1 text-sm">ハンズオン記事</div>
          </div>
          <div>
            <div className="text-xs text-zinc-400">想定読者</div>
            <div className="mt-1 text-sm">初学者</div>
          </div>
          <div>
            <div className="text-xs text-zinc-400">文体</div>
            <div className="mt-1 text-sm">ややカジュアル</div>
          </div>
          <button className="w-full rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium hover:bg-emerald-500">
            Generate Article
          </button>
        </div>
      </div>
    </aside>
  );
}