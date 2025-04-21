"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueCollegeId = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const generateUniqueCollegeId = () => __awaiter(void 0, void 0, void 0, function* () {
    let unique = false;
    let newId = '';
    while (!unique) {
        newId = 'CLG-' + Math.random().toString(36).substring(2, 8).toUpperCase();
        const existing = yield prisma.college.findUnique({ where: { collegeId: newId } });
        if (!existing)
            unique = true;
    }
    return newId;
});
exports.generateUniqueCollegeId = generateUniqueCollegeId;
