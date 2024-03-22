import Fruits from "@/services/Fruits";
import { PageParams } from "./types";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata(
  { params }: PageParams,
): Promise<Metadata> {
  const { id } = params;

  const data = await Fruits.getById(Number(id));

  return {
    title: (data.success) ? `${ data?.data } | Project` : "Fruit Not Found | Project",
  };
}

export default async function Page({ params }: PageParams) {
  const { id } = params;

  const data = await Fruits.getById(Number(id));
  const message = !data.success ? (
    <div>I don&apos;t have a fruit</div>
  ) : (
    <div>My Fruit: {data?.data}</div>
  );

  return (
    <>
      {message}
      <Link href={"/"}>Voltar</Link>
    </>
  );
}
