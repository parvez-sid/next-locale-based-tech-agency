export default async function Blog({ params }) {
    const { blog } = await params;
    return (
      <>
        <h1>Blog {blog}</h1>
      </>
    );
}