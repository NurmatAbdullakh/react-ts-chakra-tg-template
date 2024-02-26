import { AxiosRequestConfig } from "axios";
import request from "./config/axiosConfig";
import { useMutation, useQuery } from "@tanstack/react-query";

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export const useApis = {
  getAll: (params: AxiosRequestConfig<unknown> | undefined) =>
    request.get("/user", params),
  getOne: (id: string) => request.get(`/user/${id}`),
  create: (data: User) => request.post("/user", data),
  update: (id: string, data: User) => request.put(`/user/${id}`, data),
  delete: (id: string) => request.delete(`/user/${id}`),
};

export const useUserGetAllQuery = ({
  params,
}: {
  params: AxiosRequestConfig<unknown>;
}) =>
  useQuery({
    queryKey: ["users", params],
    queryFn: () => useApis.getAll(params),
  });

export const useUserGetOneQuery = ({ id }: { id: string }) =>
  useQuery({
    queryKey: ["user", id],
    queryFn: () => useApis.getOne(id),
  });

export const useUserCreateMutation = () =>
  useMutation({
    mutationKey: ["user"],
    mutationFn: (data: User) => useApis.create(data),
  });

export const useUserUpdateMutation = ({
  id,
  data,
}: {
  id: string;
  data: User;
}) =>
  useMutation({
    mutationKey: ["user"],
    mutationFn: () => useApis.update(id, data),
  });
