import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "CV Builder | Seu próximo currículo",
  description: "Organize seu perfil profissional e personalize currículos para cada oportunidade."
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
