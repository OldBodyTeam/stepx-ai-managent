import ProductList from "@/components/content/Content";

const Page = async ({ params }: any) => {
  const { userId } = await params;
  return <ProductList userId={userId} />;
};
export default Page;
