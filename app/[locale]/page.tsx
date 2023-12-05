import { notFound } from "next/navigation";
import { useTranslations, useFormatter } from "next-intl";
import { unstable_setRequestLocale, getFormatter } from "next-intl/server";
import { locales } from "../../config/i18n.config";

interface IndexPageProps {
  params: { locale: string };
}

export default function IndexPage({ params: { locale } }: IndexPageProps) {
  if (!locales.includes(locale as any)) notFound();
  unstable_setRequestLocale(locale);

  const t = useTranslations("IndexPage");

  return (
    <main>
      <h1>{t("title")}</h1>
      <DateTime />
      <DateTimeAsync />
    </main>
  );
}

function DateTime() {
	const format = useFormatter();
  const date = new Date("2023-12-05");

  return (
    <time dateTime={date.toISOString()}>
      {format.dateTime(date, { dateStyle: "invalid" })}
    </time>
  );
}

async function DateTimeAsync() {
  const format = await getFormatter();
  const date = new Date("2023-12-05");

	return (
    <time dateTime={date.toISOString()}>
      {format.dateTime(date, { dateStyle: "invalid" })}
    </time>
  );
}
