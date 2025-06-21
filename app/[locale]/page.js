import Link from "next/link";
import Button from "../_components/button";
import { useTranslations } from 'next-intl';

export default function Home() {

  const translate = useTranslations();

  return (
    <>
      <h1>{translate('home.title')}</h1>
      <Button />
      <Link href="/about">About</Link>{" "}
      <Link href="/services">Services</Link>
    </>
  );
}
