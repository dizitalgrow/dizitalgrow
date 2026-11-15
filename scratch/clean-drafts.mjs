import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "hlkd9o16",
  dataset: "production",
  apiVersion: "2024-03-01",
  token: "skq0RqpS27YTOUFMA9PoSFcQwYayfpLFRM8OJtS74KaB93gxqcIjyKr494GGvTTB4mC84fWdxD7cqtvvZ",
  useCdn: false,
});

async function cleanDrafts() {
  const drafts = await client.fetch('*[_id in path("drafts.**") && _type == "post"]{ _id, title, body }');
  console.log(`Found ${drafts.length} drafts.`);

  for (const draft of drafts) {
    if (!draft.body || !Array.isArray(draft.body)) continue;

    const sourcesHeadingIdx = draft.body.findIndex(b => 
      b.style?.startsWith('h') && b.children?.some(c => c.text?.toLowerCase().includes('verified sources'))
    );

    if (sourcesHeadingIdx !== -1) {
      console.log(`Found "Verified Sources" in draft: ${draft.title} (${draft._id})`);
      const newBody = draft.body.filter((b, idx) => {
        if (idx === sourcesHeadingIdx) return false;
        if (idx > sourcesHeadingIdx) {
          const isNextMajorBlock = b._type === 'ctaBanner' || b._type === 'faqBlock' || 
            (b.style?.startsWith('h') && !b.children?.some(c => c.text?.toLowerCase().includes('sources')));
          if (isNextMajorBlock) return true;
          return false;
        }
        return true;
      });

      await client.patch(draft._id).set({ body: newBody }).commit();
      console.log(`✅ Cleaned draft ${draft._id}`);
    }
  }
}

cleanDrafts().catch(console.error);
