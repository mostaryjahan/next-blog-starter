import { Prisma, User } from "@prisma/client";
import { prisma } from "../../config/db";

const createUser = async (payload: Prisma.UserCreateInput): Promise<User> => {
  const createUser = await prisma.user.create({
    data: payload,
  });
  return createUser;
};

const getAllUser = async () => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      picture: true,
      role: true,
      status: true,
      createAt: true,
      updatedAt: true,
      Post: true,
    },
    orderBy: {
      createAt: "desc",
    },
  });
  return result;
};

const getUserById = async (id: number) => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      picture: true,
      role: true,
      status: true,
      createAt: true,
      updatedAt: true,
      Post: true,
    },
  });
  return result;
};


const updateUser = async (id: number, payload: Partial<User>) => {
    const result = await prisma.user.update({
        where: {
            id
        },
        data: payload
    })
    return result;
}

const deleteUser = async(id: number)=>{
    const result = await prisma.user.delete({
        where: {
            id
        }
    })

    return result
}

export const UserService = {
  createUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser
};
