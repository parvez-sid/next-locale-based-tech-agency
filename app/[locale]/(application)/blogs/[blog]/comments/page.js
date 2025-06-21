export default async function Comments({ params }) {
    const { blog } = await params;
    return (
      <>
        <h1>All Comments on {blog}</h1>
      </>
    );
}
  