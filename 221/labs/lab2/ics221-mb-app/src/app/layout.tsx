import type { Metadata } from "next";
import "./globals.css";
import MessagesProvider from '@/providers/MessageProvider';

export const metadata: Metadata = {
  title: "ICS 221 Message Board App",
  description: "Front-end App for ICS 221",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <MessagesProvider>{children}</MessagesProvider>
      </body>
    </html>
  );
}
export default RootLayout;
