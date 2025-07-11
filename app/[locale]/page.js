import Link from "next/link";
import Button from "../_components/button";
import { useTranslations } from "next-intl";

export default function Home() {
  const translate = useTranslations();

  return (
    <>
      <h2 className="text-center text-4xl font-light underline text-red-600 cursor-pointer">
        {translate("home.title")}
      </h2>
      <Button />
      <Link href="/about">About</Link> <Link href="/services">Services</Link>
    </>
  );
}
