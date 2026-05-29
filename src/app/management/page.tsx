import { Management } from "@/components/sections/Management";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Leadership & Management — Western Metal Industries",
  description:
    "Meet the leadership behind India's largest aluminium slug manufacturer. WMIPL management team guiding Pune operations and global aluminium slug supply since 1978.",
  path: "/management",
});

export default function ManagementPage() {
  return (
    <div className="min-h-screen pt-20">
      <Management />
    </div>
  );
}
