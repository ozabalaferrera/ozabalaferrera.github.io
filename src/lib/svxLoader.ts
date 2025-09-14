interface BaseFM {
  title: string;
  summary: string;
}

export interface BaseMD {
  href: string;
  title: string;
}

interface PostFM extends BaseFM {
  created: string;
  updated: string;
  tags: string[];
}

export interface PostMD extends BaseMD {
  summary: string;
  created: Date;
  updated: Date;
  tags: string[];
}

export function loadPostsMD(): PostMD[] {
  const postFMs: Record<string, PostFM> = import.meta.glob('../routes/posts/*/+page.svx', {
    import: 'metadata',
    eager: true
  });

  const posts: PostMD[] = [];

  for (const path in postFMs) {
    const pFM = postFMs[path];
    posts.push({
      href: path.substring('../routes'.length, path.length - '/+page.svx'.length),
      title: pFM.title,
      summary: pFM.summary,
      created: new Date(pFM.created),
      updated: new Date(pFM.updated),
      tags: pFM.tags
    });
  }
  posts.sort((a, b) => b.created.valueOf() - a.created.valueOf());

  return posts;
}
