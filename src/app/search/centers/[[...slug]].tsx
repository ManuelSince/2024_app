export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: Record<string, string | string[] | undefined>;
}) {
  return (
    <div>
      <h1>My Page</h1>
      <div>{JSON.stringify(params)}</div>
    </div>
  );
}
