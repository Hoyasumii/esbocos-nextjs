import { Button, Result } from "antd";
import Link from "next/link";

export default function Page() {

  return (
    <>
      <Result status="404" title="Página não Encontrada" extra={<Link href={"/"}><Button type="primary">Voltar ao início</Button></Link>} />
    </>
  );
}
