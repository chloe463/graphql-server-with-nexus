import { objectType, queryField, intArg } from "nexus"

export const Todo = objectType({
  name: "Todo",
  definition(t) {
    t.int("id", { nullable: false });
    t.string("title", { nullable: false });
    t.string("description", { nullable: true });
    t.boolean("finished", { nullable: false });
  }
});

export const todos = queryField("todos", {
  type: "Todo",
  list: true,
  resolve: (root, args, context) => {
    // Fetch todos from service
    return [
      { id: 1, title: "Go sym", finished: true },
      { id: 2, title: "Wash clothes", finished: true },
      { id: 3, title: "Go Eikaku", finished: true },
      { id: 4, title: "Go to bed", finished: false },
    ];
  },
});

export const todo = queryField("todo", {
  type: "Todo",
  args: {
    id: intArg({ nullable: false }),
  },
  resolve: (root, args, context) => {
    // Fetch todo
    return {
      id: 1,
      title: "Abc",
      finished: false,
    };
  },
})
