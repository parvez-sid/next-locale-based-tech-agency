import Link from "next/link";
export default function Services() {
    return (
      <>
        <h1 className="bg-red-500">All Services</h1>
        <p>
          <Link href="/services/web-dev">Web Development</Link>
        </p>
        <p>
          <Link href="/services/app-dev">App Development</Link>
        </p>
        <p>
          <Link href="/services/design">Content Design</Link>
        </p>
        <p>
          <Link href="/services/seo">SEO</Link>
        </p>
      </>
    );
}
  