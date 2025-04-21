
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AdminScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  phone: 'phone',
  role: 'role',
  resetToken: 'resetToken',
  resetTokenExpiry: 'resetTokenExpiry',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CollegeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  address: 'address',
  collegeId: 'collegeId',
  adminId: 'adminId'
};

exports.Prisma.WarehouseScalarFieldEnum = {
  id: 'id',
  name: 'name',
  collegeId: 'collegeId',
  adminId: 'adminId',
  warehouseId: 'warehouseId'
};

exports.Prisma.StaffScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  phone: 'phone',
  collegeId: 'collegeId',
  adminId: 'adminId',
  role: 'role',
  resetToken: 'resetToken',
  resetTokenExpiry: 'resetTokenExpiry'
};

exports.Prisma.ComponentRequestScalarFieldEnum = {
  id: 'id',
  name: 'name',
  brand: 'brand',
  modelNumber: 'modelNumber',
  serialNumber: 'serialNumber',
  createdAt: 'createdAt',
  staffId: 'staffId',
  type: 'type',
  status: 'status',
  createdByStaffId: 'createdByStaffId'
};

exports.Prisma.HODScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  phone: 'phone',
  password: 'password',
  collegeId: 'collegeId',
  adminId: 'adminId',
  role: 'role'
};

exports.Prisma.LabScalarFieldEnum = {
  id: 'id',
  name: 'name',
  departmentId: 'departmentId',
  adminId: 'adminId'
};

exports.Prisma.ComponentScalarFieldEnum = {
  id: 'id',
  name: 'name',
  brand: 'brand',
  modelNumber: 'modelNumber',
  serialNumber: 'serialNumber',
  collegeId: 'collegeId',
  warehouseId: 'warehouseId',
  adminId: 'adminId',
  labId: 'labId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  status: 'status',
  type: 'type'
};

exports.Prisma.DepartmentScalarFieldEnum = {
  id: 'id',
  name: 'name',
  departmentId: 'departmentId',
  collegeId: 'collegeId',
  adminId: 'adminId',
  hodId: 'hodId'
};

exports.Prisma.ReportScalarFieldEnum = {
  id: 'id',
  componentId: 'componentId',
  hodId: 'hodId',
  status: 'status',
  message: 'message',
  createdAt: 'createdAt',
  departmentId: 'departmentId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  ADMIN: 'ADMIN',
  STAFF: 'STAFF',
  HOD: 'HOD'
};

exports.Status = exports.$Enums.Status = {
  WORKING: 'WORKING',
  FAULTY: 'FAULTY',
  UNDER_REPAIR: 'UNDER_REPAIR',
  REPLACED: 'REPLACED'
};

exports.ComponentType = exports.$Enums.ComponentType = {
  MONITOR: 'MONITOR',
  KEYBOARD: 'KEYBOARD',
  MOUSE: 'MOUSE',
  CPU: 'CPU',
  PRINTER: 'PRINTER',
  OTHER: 'OTHER'
};

exports.Prisma.ModelName = {
  Admin: 'Admin',
  College: 'College',
  Warehouse: 'Warehouse',
  Staff: 'Staff',
  ComponentRequest: 'ComponentRequest',
  HOD: 'HOD',
  Lab: 'Lab',
  Component: 'Component',
  Department: 'Department',
  Report: 'Report'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
