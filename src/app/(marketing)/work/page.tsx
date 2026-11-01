import { redirect, RedirectType } from "next/navigation";

export default function WorkPage() {
  // Redirect /work visitors directly to the homepage work showcase
  redirect("/#work", RedirectType.replace);
}
