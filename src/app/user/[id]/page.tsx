import { Metadata } from "next";
import Link from "next/link";

import { UsersService } from "@/services/users";
import { AiOutlineArrowLeft } from "react-icons/ai";

import styles from "./page.module.css";

type MetaDataProps = {
  params: { id: string };
};

export const generateMetadata = ({ params }: MetaDataProps): Metadata => {
  return {
    title: `Usuário | ${params.id}`,
  };
};

export default async function Page({
  params: { id },
}: {
  params: {
    id: number;
  };
}) {
  const user = await UsersService.getUser(id);

  const { name, username, email, address, phone, website, company } = user;

  function renderBox(title: string, value: string) {
    return (
      <div className="relative">
        <span className="font-bold">{title}</span>
        <div>{value}</div>
      </div>
    );
  }

  return (
    <div className="h-full">
      <Link
        className="flex items-center font-bold mb-10 gap-2 uppercase"
        href="/"
      >
        <AiOutlineArrowLeft />
        Voltar
      </Link>

      <div className={styles.container}>
        {renderBox("Nome", name)}
        {renderBox("Username", username)}
        {renderBox("E-mail", email)}
      </div>

      <h2 className={styles.subTitle}>Endereço</h2>

      <div className={styles.container}>
        {renderBox("Rua", address.street)}
        {renderBox("Cidade", address.city)}
        {renderBox("CEP", address.zipcode)}
      </div>

      <h3 className={styles.subTitle}>Contato</h3>

      <div className={styles.container}>
        {renderBox("Telefone", phone)}
        {renderBox("Site", website)}
      </div>

      <h4 className={styles.subTitle}>Empresa</h4>

      <div className={styles.container}>
        {renderBox("Nome da empresa", company.name)}
      </div>
    </div>
  );
}
