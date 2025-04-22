// import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '../generated/prisma';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getAllReports = async (req: any, res: any) => {
  const adminId = req.user?.id;

  try {
    const reports = await prisma.report.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        component: {
          include: {
            lab: true,
          },
        },
        hod: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return res.status(200).json({
      success: true,
      message: 'Reports fetched successfully',
      data: reports,
    });

  } catch (error: any) {
    console.error('Error fetching reports:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch reports',
      error: error.message,
    });
  }
};

export const getReportById = async (req: any, res: any) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid report ID" });
  }

  try {
    const report = await prisma.report.findUnique({
      where: { id },
      include: {
        component: true,
        hod: true,
        department: true,
      },
    });

    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }

    return res.status(200).json({
      message: "Report fetched successfully",
      report,
    });
  } catch (error: any) {
    console.error("Error fetching report by ID:", error);
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
