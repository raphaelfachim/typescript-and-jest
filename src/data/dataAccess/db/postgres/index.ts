import { Pool, Client } from "pg";

export const credentials = {
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "example",
  port: 5432,
}

export async function clientDemo() {
  const client = new Client(credentials);
  await client.connect();
  const transactions = await client.query("select * from transaction;");
  await client.end();

  console.log(transactions.rows);
}