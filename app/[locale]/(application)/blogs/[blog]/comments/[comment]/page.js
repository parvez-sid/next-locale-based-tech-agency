export default async function Comment({ params }) {
  const { blog, comment } = await params;
  console.log(blog, comment);
  return (
    <>
      <h1>
        Comment # <i>{comment}</i> on <b>{blog}</b>
      </h1>
    </>
  );
}
