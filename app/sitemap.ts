import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://ryanhellfacts.com";

  // Static routes
  const staticRoutes = [
    "/",
    "/aboutRyan",
    "/911Calls",
    "/CADFiles",
    "/PoliceReport",
    "/JeremiahJohnson",
    "/SallyBagshaw",
    "/videos",
    "/Downloads",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic routes (example: blog posts)
  const posts = await getPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Combine all routes
  return [...staticRoutes, ...blogRoutes];
}

// Example getPosts function
async function getPosts() {
  // Replace with your actual data fetching logic
  return [
    {
      slug: "example-post",
      updatedAt: "2024-12-01",
    },
    // ... more posts
  ];
}
