"use client";

import Link from "next/link";
import { AiOutlineEye } from "react-icons/ai";
import { Users } from "@/types/Users";

import styles from "./styles.module.css";

interface UserListProps {
  data: Users[];
}

function renderColumnsTable(name: string, className?: string) {
  return (
    <th scope="col" className={`px-6 py-3 ${className}`}>
      {name}
    </th>
  );
}

export function UserList({ data }: UserListProps) {
  function renderNotFound() {
    if (data.length > 0) return null;
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-2xl font-bold text-gray-500 max-lg:text-xl">
          Nenhum usuário encontrado!
        </p>
      </div>
    );
  }
  return (
    <div className="relative overflow-x-auto">
      <table className={styles.table}>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            {renderColumnsTable("Nome")}
            {renderColumnsTable("E-mail")}
            {renderColumnsTable("Cidade")}
            {renderColumnsTable("Ações", "w-[6rem]")}
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id} className="bg-white border-b text-gray-900">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                {user.name}
              </th>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.address.city}</td>
              <td className="px-9 py-4 text-center">
                <Link title="Visualizar" href={`/user/${user.id}`}>
                  <AiOutlineEye className="text-lg hover:text-purple-600 transition-all duration-300" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {renderNotFound()}
    </div>
  );
}
