import Link from "next/link";
import Image from "next/image";
import { t } from "ttag";
import { LangPicker } from "@/components/LangPicker";
import s from "./Header.module.css";

export function Header() {
  return (
    <header className={s.header}>
      <Link className={s.logo} href="/">
        <Image
          src="https://ttag.js.org/img/short-icon.svg"
          alt="ttag demo"
          width={50}
          height={50}
        />
        <span>TTag</span>
      </Link>

      <nav className={s.linkBox}>
        <LangPicker />
        <Link className={s.link} href="/">
          {t`Main`}
        </Link>
        <Link className={s.link} href="/about_us">
          {t`About us`}
        </Link>
      </nav>
    </header>
  );
}
