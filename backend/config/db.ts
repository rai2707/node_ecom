const Sequelize = require("sequelize");
export const sequelize = new Sequelize(
  "postgres://postgres:Shivam@321@localhost:5432/demo",
  {
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err: any) => {
    console.error("Unable to connect to the database:", err);
  });
