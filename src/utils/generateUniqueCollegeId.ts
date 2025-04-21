
import { randomUUID } from 'crypto';
import {Prisma} from '../generated/prisma';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const generateUniqueCollegeId = async (): Promise<string> => {
  let unique = false;
  let newId = '';

  while (!unique) {
 
    newId = 'CLG-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    const existing = await prisma.college.findUnique({ where: { collegeId: newId } });
    if (!existing) unique = true;
  }

  return newId;
};
