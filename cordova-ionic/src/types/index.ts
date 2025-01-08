export interface CustomType {
  id: number;
  name: string;
  description?: string;
}

export type User = {
  id: string;
  username: string;
  email: string;
};

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}