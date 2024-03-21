import { app } from "@/config";
import { BaseResponse } from "@/types";

export default class Fruits {
  public static async getAll(): Promise<BaseResponse<Array<string>>> {
    try {
      return (await app.get("/fruits/"))?.data;
    } catch (err) {
      return { success: false }
    }
  }

  public static async getById(id: number): Promise<BaseResponse<string | undefined>> {
    try {
      return (await app.get(`/fruits/${id}`))?.data;
    } catch (err) {
      return { success: false }
    }
  }

}