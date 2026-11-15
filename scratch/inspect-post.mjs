import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "hlkd9o16",
  dataset: "production",
  apiVersion: "2024-03-01",
  useCdn: false,
});

async function run() {
  const post = await client.fetch('*[slug.current == "conversion-rate-optimization-strategies-for-indian-saas-platforms-2026"][0]');
  console.log("Title:", post.title);
  console.log("Author:", post.author);
  console.log("References:", JSON.stringify(post.references, null, 2));
  console.log("Body blocks styles:");
  post.body?.forEach((b, i) => {
    if (b.style) {
      console.log(`[${i}] ${b.style}: ${b.children?.map(c => c.text).join('')}`);
    } else {
      console.log(`[${i}] type=${b._type}`);
    }
  });
}

run();
