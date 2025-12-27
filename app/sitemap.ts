import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://arcentales.dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://arcentales.dev/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://arcentales.dev/blog",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://arcentales.dev/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://arcentales.dev/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}



// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const posts = await fetch("https://api.tusitio.com/posts").then((res) =>
//     res.json(),
//   );
//
//   const postsUrls = posts.map((post: any) => ({
//     url: `https://tudominio.com/blog/${post.slug}`,
//     lastModified: new Date(post.updatedAt),
//     changeFrequency: "weekly",
//     priority: 0.7,
//   }));
//
//   return [
//     {
//       url: "https://tudominio.com",
//       lastModified: new Date(),
//       priority: 1,
//     },
//     ...postsUrls,
//   ];
// }
