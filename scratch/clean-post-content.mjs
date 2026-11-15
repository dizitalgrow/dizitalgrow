import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "hlkd9o16",
  dataset: "production",
  apiVersion: "2024-03-01",
  token: "skq0RqpS27YTOUFMA9PoSFcQwYayfpLFRM8OJtS74KaB93gxqcIjyKr494GGvTTB4mC84fWdxD7cqtvvZ",
  useCdn: false,
});

async function cleanPosts() {
  const posts = await client.fetch('*[_type == "post"]{ _id, title, slug, body, references }');
  console.log(`Inspecting ${posts.length} posts...`);

  for (const post of posts) {
    if (!post.body || !Array.isArray(post.body)) continue;

    // Check if body contains "Verified Sources" heading
    const sourcesHeadingIdx = post.body.findIndex(b => 
      b.style?.startsWith('h') && b.children?.some(c => c.text?.toLowerCase().includes('verified sources'))
    );

    if (sourcesHeadingIdx !== -1) {
      console.log(`\nFound "Verified Sources" in body of: ${post.title} (index ${sourcesHeadingIdx})`);
      
      // Filter out the Verified Sources heading and any following citation paragraphs before the next h2 or ctaBanner/faqBlock
      const newBody = post.body.filter((b, idx) => {
        if (idx === sourcesHeadingIdx) return false;
        // If after sourcesHeadingIdx but before next major block (ctaBanner, faqBlock, or next non-citation h2)
        if (idx > sourcesHeadingIdx) {
          const isNextMajorBlock = b._type === 'ctaBanner' || b._type === 'faqBlock' || 
            (b.style?.startsWith('h') && !b.children?.some(c => c.text?.toLowerCase().includes('sources')));
          if (isNextMajorBlock) return true;
          // It's part of the citation dump
          return false;
        }
        return true;
      });

      console.log(`Original body blocks: ${post.body.length}, New body blocks: ${newBody.length}`);

      const patch = client.patch(post._id).set({ body: newBody });

      // If it's the CRO post, also replace the junk references with verified SaaS CRO references
      if (post.slug?.current === "conversion-rate-optimization-strategies-for-indian-saas-platforms-2026") {
        const cleanReferences = [
          {
            _key: "ref-razorpay-sub",
            title: "Razorpay Subscriptions & Recurring Payments Documentation",
            publisher: "Razorpay Engineering",
            url: "https://razorpay.com/docs/payments/subscriptions/",
            publicationDate: "2026",
            accessDate: "2026-11-15",
          },
          {
            _key: "ref-saasboomi-report",
            title: "State of Indian SaaS & Global Market Benchmarks",
            publisher: "SaaSBOOMi & Bain & Company",
            url: "https://saasboomi.com/research/",
            publicationDate: "2026",
            accessDate: "2026-11-15",
          },
          {
            _key: "ref-google-vitals",
            title: "Core Web Vitals & Page Speed Impact on Funnel Conversion",
            publisher: "Google Chrome UX & Web.dev",
            url: "https://web.dev/explore/vitals",
            publicationDate: "2026",
            accessDate: "2026-11-15",
          },
          {
            _key: "ref-stripe-billing",
            title: "Stripe Billing & Global Cross-Border Subscription Infrastructure",
            publisher: "Stripe Developer Documentation",
            url: "https://stripe.com/docs/billing",
            publicationDate: "2026",
            accessDate: "2026-11-15",
          },
        ];
        patch.set({ references: cleanReferences });
      }

      const res = await patch.commit();
      console.log(`✅ Successfully updated post ${res._id} in Sanity!`);
    }
  }
}

cleanPosts().catch(console.error);
