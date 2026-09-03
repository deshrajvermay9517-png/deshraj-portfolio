type ContentItem = {
  title: string;
  platform: "YouTube" | "Instagram";
  url: string;
  embedUrl: string;
};

export function ContentEmbeds({ items }: { items: ContentItem[] }) {
  const youtube = items.filter((item) => item.platform === "YouTube");
  const instagram = items.filter((item) => item.platform === "Instagram");

  return (
    <div className="space-y-8">
      {youtube.length > 0 ? (
        <div>
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="text-lg font-black">Featured YouTube videos</h3>
            <span className="text-xs font-bold uppercase tracking-[.14em] text-slate-400">FutureRouteX</span>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {youtube.map((item) => (
              <article className="card overflow-hidden p-0" key={item.url}>
                <div className="aspect-video bg-slate-950">
                  <iframe
                    className="h-full w-full"
                    src={item.embedUrl}
                    title={item.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[.16em] text-teal-600 dark:text-teal-400">YouTube</p>
                  <h4 className="mt-2 text-base font-black leading-6">{item.title}</h4>
                  <a className="link mt-4 inline-flex" href={item.url} target="_blank" rel="noreferrer">
                    Watch on YouTube ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : null}

      {instagram.length > 0 ? (
        <div>
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="text-lg font-black">Top Instagram Reels</h3>
            <span className="text-xs font-bold uppercase tracking-[.14em] text-slate-400">Selected reach</span>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {instagram.map((item) => (
              <article className="card overflow-hidden p-0" key={item.url}>
                <div className="bg-white">
                  <iframe
                    className="h-[640px] w-full sm:h-[700px]"
                    src={item.embedUrl}
                    title={item.title}
                    loading="lazy"
                    allow="autoplay; encrypted-media; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[.16em] text-teal-600 dark:text-teal-400">Instagram Reel</p>
                  <h4 className="mt-2 text-base font-black leading-6">{item.title}</h4>
                  <a className="link mt-4 inline-flex" href={item.url} target="_blank" rel="noreferrer">
                    Open Reel ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
