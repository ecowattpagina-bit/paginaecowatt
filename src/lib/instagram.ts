export type IgMedia = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM" | "REELS";
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
};

type GraphChild = {
  media_type?: string;
  media_url?: string;
  thumbnail_url?: string;
};

type GraphItem = {
  id: string;
  caption?: string;
  media_type: IgMedia["media_type"];
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
  children?: { data?: GraphChild[] };
};

type GraphResponse = {
  data?: GraphItem[];
  error?: { message?: string };
};

function resolveUrls(item: GraphItem): Pick<IgMedia, "media_url" | "thumbnail_url"> {
  if (item.media_url || item.thumbnail_url) {
    return {
      media_url: item.media_url,
      thumbnail_url: item.thumbnail_url ?? item.media_url,
    };
  }

  const child = item.children?.data?.find((c) => c.media_url || c.thumbnail_url);
  return {
    media_url: child?.media_url,
    thumbnail_url: child?.thumbnail_url ?? child?.media_url,
  };
}

export async function getInstagramMedia(limit = 24): Promise<IgMedia[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return [];

  const fields = [
    "id",
    "caption",
    "media_type",
    "media_url",
    "thumbnail_url",
    "permalink",
    "timestamp",
    "children{media_url,media_type,thumbnail_url}",
  ].join(",");

  const url = new URL("https://graph.instagram.com/me/media");
  url.searchParams.set("fields", fields);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("access_token", token);

  const res = await fetch(url.toString(), {
    next: { revalidate: 600, tags: ["instagram"] },
  });

  if (!res.ok) return [];

  const json = (await res.json()) as GraphResponse;
  if (json.error || !json.data) return [];

  return json.data
    .map((item) => {
      const urls = resolveUrls(item);
      return {
        id: item.id,
        caption: item.caption,
        media_type: item.media_type,
        media_url: urls.media_url,
        thumbnail_url: urls.thumbnail_url,
        permalink: item.permalink,
        timestamp: item.timestamp,
      } satisfies IgMedia;
    })
    .filter((item) => item.thumbnail_url || item.media_url || item.permalink);
}
