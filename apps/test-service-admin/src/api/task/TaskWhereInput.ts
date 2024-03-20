import { StringFilter } from "../../util/StringFilter";

export type TaskWhereInput = {
  id?: StringFilter;
  status?: "NEW" | "PENDING";
};
