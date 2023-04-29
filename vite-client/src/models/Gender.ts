import { z } from "zod";

export enum Gender {
  MALE,
  OTHER,
  FEMALE,
}

export const GenderEnum = z.nativeEnum(Gender);
