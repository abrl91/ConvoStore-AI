"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateServiceBase = void 0;
class TemplateServiceBase {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async count(args) {
        return this.prisma.template.count(args);
    }
    async findMany(args) {
        return this.prisma.template.findMany(args);
    }
    async findOne(args) {
        return this.prisma.template.findUnique(args);
    }
    async create(args) {
        return this.prisma.template.create(args);
    }
    async update(args) {
        return this.prisma.template.update(args);
    }
    async delete(args) {
        return this.prisma.template.delete(args);
    }
}
exports.TemplateServiceBase = TemplateServiceBase;
//# sourceMappingURL=template.service.base.js.map