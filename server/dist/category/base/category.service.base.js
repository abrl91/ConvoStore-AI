"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryServiceBase = void 0;
class CategoryServiceBase {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async count(args) {
        return this.prisma.category.count(args);
    }
    async findMany(args) {
        return this.prisma.category.findMany(args);
    }
    async findOne(args) {
        return this.prisma.category.findUnique(args);
    }
    async create(args) {
        return this.prisma.category.create(args);
    }
    async update(args) {
        return this.prisma.category.update(args);
    }
    async delete(args) {
        return this.prisma.category.delete(args);
    }
    async findNotes(parentId, args) {
        return this.prisma.category
            .findUniqueOrThrow({
            where: { id: parentId },
        })
            .notes(args);
    }
}
exports.CategoryServiceBase = CategoryServiceBase;
//# sourceMappingURL=category.service.base.js.map