
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import collegeRoutes from './routes/college.routes';
import adminRoutes from './routes/admin.routes';
import wareHouseRoutes from './routes/warehouse.routes'
import StaffRoutes from './routes/createStaff.routes'
import ComponentsRoutes from './routes/compnent.routes'
import LoginsytaffRoutes from './routes/staff.routes'
// import RequestStaff from './routes/componentRequest.routes'
import CreateDepartmnt from  './routes/createDepartment.routes'
import HodRoutes from "./routes/createHod.routes"
import CreateLab from "./routes/createLab.routes"
import reportRoutes from "./routes/report.routes";
import reportViewRoutes from "./routes/reportview.routes"
const app = express();

app.use(express.json());
app.use('/api/admin', authRoutes);
app.use('/api/college', collegeRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/warehouse', wareHouseRoutes);
app.use('/api/staff',StaffRoutes);
app.use("/api/component", ComponentsRoutes);
app.use("/api/staff",LoginsytaffRoutes);
// app.use("/api", RequestStaff);
app.use("/api/department", CreateDepartmnt);
app.use("/api/hod",HodRoutes);
app.use("/api/lab",CreateLab);
app.use("/api/report",reportRoutes);
app.use("/api/report",reportViewRoutes);

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
