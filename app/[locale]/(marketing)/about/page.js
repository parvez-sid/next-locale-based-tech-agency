import Link from "next/link";

export default function About() {
    return (
      <>
        <h1>Welcome to About Page</h1>
        <Link href="/">Home</Link>{" "}
        <Link href="/services">Services</Link>
      </>
    );
}
  