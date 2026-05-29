import { Contact } from "@/components/sections/Contact";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact — Aluminium Slugs Pune & Mumbai Enquiries",
  description:
    "Contact Western Metal Industries for aluminium slug quotes. Factory in Hadapsar, Pune (411013). Sales enquiries from Mumbai, Maharashtra, India and export buyers welcome.",
  path: "/contact",
  keywords: [
    "aluminium slug quote India",
    "contact aluminium slug manufacturer Pune",
    "aluminium slugs enquiry Mumbai",
  ],
});

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <Contact />
    </div>
  );
}
