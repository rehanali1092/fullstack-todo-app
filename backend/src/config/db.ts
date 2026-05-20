import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// ✅ Sequelize with mssql dialect (Azure SQL)
// ✅ tedious is used internally by Sequelize - no need to import it
export const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASS!,
  {
    host: process.env.DB_HOST!,
    dialect: "mssql",              // ✅ changed from mysql to mssql
    logging: false,
    port: parseInt(process.env.DB_PORT || "1433"),  // ✅ Azure SQL port
    dialectOptions: {
      options: {
        encrypt: true,             // ✅ REQUIRED for Azure SQL
        trustServerCertificate: false, // ✅ REQUIRED for Azure SQL
        enableArithAbort: true,
      },
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

// ✅ Simple connectDB - no need to create DB
// Azure SQL database is already created via Azure Portal/CLI
export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Azure SQL Database connected successfully.");

    // ✅ Sync all models (creates tables if they dont exist)
    await sequelize.sync({ alter: true });
    console.log("✅ Tables synced successfully.");

  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
};