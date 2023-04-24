import "./globals.css";

export const metadata = {
  title: "Siêu thị Winmart",
  description: "Winmart - PBL03",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
