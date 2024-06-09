import ThemeRegistry from "@/components/theme-registry/theme.registry";
import NextAuthWrapper from "@/lib/next.auth.wrapper";
import StoreProvider from "@/store/StoreProvider";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <StoreProvider>
            <NextAuthWrapper>
              {children}
            </NextAuthWrapper>
          </StoreProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
