export default async function Files({ params }) {
  const { filePath } = await params;
  return (
    <>
      <h3>Files <i>/{filePath?.join('/')}</i></h3>
    </>
  );
}