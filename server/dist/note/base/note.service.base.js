"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteServiceBase = void 0;
class NoteServiceBase {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async count(args) {
        return this.prisma.note.count(args);
    }
    async findMany(args) {
        return this.prisma.note.findMany(args);
    }
    async findOne(args) {
        return this.prisma.note.findUnique(args);
    }
    async create(args) {
        return this.prisma.note.create(args);
    }
    async update(args) {
        return this.prisma.note.update(args);
    }
    async delete(args) {
        return this.prisma.note.delete(args);
    }
    async findCategories(parentId, args) {
        return this.prisma.note
            .findUniqueOrThrow({
            where: { id: parentId },
        })
            .categories(args);
    }
    async getUser(parentId) {
        return this.prisma.note
            .findUnique({
            where: { id: parentId },
        })
            .user();
    }
}
exports.NoteServiceBase = NoteServiceBase;
//# sourceMappingURL=note.service.base.js.map