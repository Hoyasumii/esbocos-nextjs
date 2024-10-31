import Fruits from "@/services/Fruits";
import slugify from "slugify";
import { List } from "antd";
import Item from "antd/es/list/Item";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Testando Next",
};

export default async function Page() {
  const data = await Fruits.getAll();

  return (
    <>
      <List>
        {data.success
          ? data?.data?.map((item, index) => {
              return <Item key={slugify(item)}>
                <Link href={`/fruit/${index}`}>{item}</Link>
              </Item>;
            })
          : ""}
      </List>
    </>
  );
}
