import { Users } from "@/types/Users";

const PAGE_SIZE = "5";
const ENV_API_URL = process.env.API_URL;

const getUsers = async (currentPage = 1, search?: any): Promise<Users[]> => {
  const searchName = search ? `&name_like=${search}` : "";
  const dataParams = `_page=${currentPage}&_limit=${PAGE_SIZE}${searchName}`;

  const data = await fetch(`${ENV_API_URL}/users?${dataParams}`, {
    next: {
      revalidate: 10,
    },
  });
  const users = await data.json();

  return users;
};

const getUser = async (id: number): Promise<Users> => {
  const data = await fetch(`${ENV_API_URL}/users/${id}`);
  const user = await data.json();

  return user;
};

export const UsersService = {
  getUsers,
  getUser,
};
