import { z } from "zod";

export enum Status {
  INCOMPLETE,
  COMPLETE,
}

export const StatusEnum = z.nativeEnum(Status);
