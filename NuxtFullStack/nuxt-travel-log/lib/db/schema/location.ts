import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const location = sqliteTable("location", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  slug: text().notNull().unique(),
  description: text(),
  lat: real().notNull(), // Latitude
  long: real().notNull(), // Longitude
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),

});
