import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "hlkd9o16",
  dataset: "production",
  apiVersion: "2024-03-01",
  useCdn: false,
});

async function run() {
  const posts = await client.fetch('*[_type == "post"]{ _id, title, slug, body, references }');
  console.log(`Found ${posts.length} published posts.`);
  
  for (const post of posts) {
    console.log(`\n=== Post: ${post.title} (${post.slug?.current}) ===`);
    const hasSourceInBody = post.body?.some(b => 
      b.style?.startsWith('h') && b.children?.some(c => c.text?.includes('Verified Sources'))
    );
    console.log(`Has "Verified Sources" heading in body: ${hasSourceInBody}`);
    console.log(`References count in structured field: ${post.references?.length || 0}`);
  }
}

run();
