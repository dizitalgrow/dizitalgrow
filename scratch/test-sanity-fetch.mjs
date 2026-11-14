import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "hlkd9o16",
  dataset: "production",
  apiVersion: "2024-03-01",
  useCdn: false,
});

async function run() {
  const posts = await client.fetch('*[_type == "post"]');
  for (const post of posts) {
    console.log("=== POST SLUG:", post.slug?.current, "===");
    console.log("Keys:", Object.keys(post));
    console.log("Excerpt:", post.excerpt);
    console.log("Category:", post.category);
    console.log("Body length / blocks:", post.body?.length);
    if (post.body) {
      console.log("First block:", JSON.stringify(post.body[0], null, 2));
      console.log("Block types:", Array.from(new Set(post.body.map(b => b._type))));
    }
  }
}

run();
