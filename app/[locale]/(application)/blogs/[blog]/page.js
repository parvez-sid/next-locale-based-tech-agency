export default async function Blog({ params, searchParams }) {
  console.log(await searchParams)
    console.log(await params)
    const { blog } = await params;
    return (
      <>
        <h1>Blog {blog}</h1>
      </>
    );
}