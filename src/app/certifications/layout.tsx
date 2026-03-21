import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Certifications | Western Metal Industries Pvt. Ltd.',
  description: 'ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 certifications and One-Star Export House recognition. Quality standards at Western Metal Industries.',
};

export default function CertificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
