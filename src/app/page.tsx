import { Pagination } from "@/components/Pagination";

import { UserList } from "@/components/UserList";
import { UsersService } from "@/services/users";
import { Input } from "@/components/Input";

export default async function Home({ searchParams }: { searchParams?: any }) {
  const paramsUrl = searchParams;

  const { page, name_like } = paramsUrl;

  const data = await UsersService.getUsers(Number(page), name_like);

  return (
    <>
      <h1 className="text-2xl mb-5 font-bold text-purple-800">Usuários</h1>
      <div className="flex justify-start mb-5">
        <Input />
      </div>
      <UserList data={data} />
      <div className="flex justify-end items-end">
        <Pagination items={data.length} />
      </div>
    </>
  );
}
