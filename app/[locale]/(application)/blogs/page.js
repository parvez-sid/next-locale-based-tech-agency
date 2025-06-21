import Link from "next/link";
export default async function Blogs({ params, searchParams}) {
    console.log(await searchParams)
    console.log(await params)
    return (
      <>
        <h1>All Blogs</h1>
        <p>
          <Link href="/blogs/1">Blog 1</Link>
        </p>
        <p>
          <Link href="/blogs/2">Blog 2</Link>
        </p>
        <p>
          <Link href="/blogs/3">Blog 3</Link>
        </p>
      </>
    );
}