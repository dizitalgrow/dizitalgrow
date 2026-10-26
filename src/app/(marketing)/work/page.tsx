import { redirect, RedirectType } from "next/navigation";

export default function WorkPage() {
  // Redirect /work visitors directly to /services
  redirect("/services", RedirectType.replace);
}
