import { useRouter } from "next/router";
import { t } from "ttag";
import s from "./LangPicker.module.css";
import { ChangeEvent } from "react";

export function LangPicker() {
  const router = useRouter();

  const onChangeLocale = (e: ChangeEvent<HTMLSelectElement>) => {
    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      "",
      { locale: e.target.value }
    );
  };
  return (
    <div>
      <select
        className={s.formSelect}
        onChange={onChangeLocale}
        value={router.locale}
      >
        <option value="en-US">{t`english`}</option>
        <option value="uk">{t`ukrainian`}</option>
      </select>
    </div>
  );
}
