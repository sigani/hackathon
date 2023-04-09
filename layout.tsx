import HeadComponent from "./pages/HeadComponent";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeadComponent />
      <main>{children}</main>
    </>
  );
}
