import type { AppProps } from "next/app";
import { addLocale, setDefaultLang, useLocale } from "ttag";
import { useRouter } from "next/router";
import { Header } from "@/components/Header";
import translationUk from "../../i18n/uk.po.json";
import "@/style/globals.css";

setDefaultLang("en-US");
addLocale("uk", translationUk);

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useLocale(router.locale as string);

  return (
    <>
      <Header />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}
