import Navigation from "./components/navigation/navigation";

export const metadata = {
  title: "The Room",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
