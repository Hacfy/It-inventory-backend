
import { PrismaClient } from '../generated/prisma';
const prisma = new PrismaClient();
import bcrypt from 'bcryptjs';
import { error } from 'console';
import jwt from 'jsonwebtoken';
import { HodLoginSchema } from '../schemas/hod.schema';
import express from 'express';
export const hodLogin = async (req:any, res: any) => {
  const parsed = HodLoginSchema.safeParse(req.body);
  if (!parsed.success){
    return res.status(400).json({error : parsed.error.flatten()})
  }
  const { email, password } = req.body;

  try {
    const hod = await prisma.hOD.findUnique({
      where: { email },
    });

    if (!hod) {
      return res.status(404).json({ message: 'HOD not found' });
    }

    const isMatch = await bcrypt.compare(password, hod.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign(
      { id: hod.id, email: hod.email, role: 'HOD' },
      process.env.JWT_SECRET as string,
      { expiresIn: '7d' }
    );

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      hod: {
        id: hod.id,
        name: hod.name,
        email: hod.email,
        phone: hod.phone,
        role: hod.role,
      },
    });
  } catch (e) {
    console.error('Login error:', e);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

export const meHOD = async (req: any, res: any) => {
  try {
    const { id  } =(req as any).user?.id;

    const hod = await prisma.hOD.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
      },
    });

    if (!hod) {
      return res.status(404).json({ message: 'HOD not found' });
    }

    return res.status(200).json({
      message: 'HOD info fetched successfully',
      hod,
    });
  } catch (e) {
    console.error('Error fetching HOD info:', e);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};


