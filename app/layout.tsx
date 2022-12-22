import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-primary-900 w-screen h-screen">{children}</body>
    </html>
  );
}
