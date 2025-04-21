// types/express/index.d.ts

import { User } from "../../models/user"
import { JwtPayload } from "../../middleware/auth.jwt" // Adjust the import path as necessary

declare global {
  namespace Express {
    interface Request {
      user?: User & JwtPayload;
    }
  }
}
