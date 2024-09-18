export default function Page({ params }: { params: { id: number } }) {
  return <div>Product number : {params.id}</div>;
}
