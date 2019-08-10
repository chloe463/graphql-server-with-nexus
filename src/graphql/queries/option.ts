import { queryField } from "nexus";
import axios from "axios";

export const options = queryField("options", {
  type: "Option",
  list: true,
  nullable: false,
  resolve: async (_root, _args, _context, _info) => {
    const res = await axios.get("http://localhost:3000/options");
    return res.data;
  }
})
