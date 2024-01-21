import '@/app/ui/global.css';
import { roboto } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
