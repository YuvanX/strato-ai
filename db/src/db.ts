import { PrismaClient } from "@prisma/client";

// Check if there's already a global Prisma instance (to prevent multiple instances in dev)
const globalForPrisma = global as unknown as { prisma?: PrismaClient };

// Create a new PrismaClient only if there's no existing instance
const prisma = globalForPrisma.prisma || new PrismaClient();

// If running in development mode, store Prisma in the global scope
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
