"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryResolverBase = void 0;
const graphql = __importStar(require("@nestjs/graphql"));
const apollo = __importStar(require("apollo-server-express"));
const prisma_util_1 = require("../../prisma.util");
const MetaQueryPayload_1 = require("../../util/MetaQueryPayload");
const nestAccessControl = __importStar(require("nest-access-control"));
const gqlACGuard = __importStar(require("../../auth/gqlAC.guard"));
const gqlDefaultAuth_guard_1 = require("../../auth/gqlDefaultAuth.guard");
const common = __importStar(require("@nestjs/common"));
const aclFilterResponse_interceptor_1 = require("../../interceptors/aclFilterResponse.interceptor");
const aclValidateRequest_interceptor_1 = require("../../interceptors/aclValidateRequest.interceptor");
const CreateCategoryArgs_1 = require("./CreateCategoryArgs");
const UpdateCategoryArgs_1 = require("./UpdateCategoryArgs");
const DeleteCategoryArgs_1 = require("./DeleteCategoryArgs");
const CategoryFindManyArgs_1 = require("./CategoryFindManyArgs");
const CategoryFindUniqueArgs_1 = require("./CategoryFindUniqueArgs");
const Category_1 = require("./Category");
const NoteFindManyArgs_1 = require("../../note/base/NoteFindManyArgs");
const Note_1 = require("../../note/base/Note");
const category_service_1 = require("../category.service");
let CategoryResolverBase = class CategoryResolverBase {
    constructor(service, rolesBuilder) {
        this.service = service;
        this.rolesBuilder = rolesBuilder;
    }
    async _categoriesMeta(args) {
        const results = await this.service.count(Object.assign(Object.assign({}, args), { skip: undefined, take: undefined }));
        return {
            count: results,
        };
    }
    async categories(args) {
        return this.service.findMany(args);
    }
    async category(args) {
        const result = await this.service.findOne(args);
        if (result === null) {
            return null;
        }
        return result;
    }
    async createCategory(args) {
        return await this.service.create(Object.assign(Object.assign({}, args), { data: args.data }));
    }
    async updateCategory(args) {
        try {
            return await this.service.update(Object.assign(Object.assign({}, args), { data: args.data }));
        }
        catch (error) {
            if (prisma_util_1.isRecordNotFoundError(error)) {
                throw new apollo.ApolloError(`No resource was found for ${JSON.stringify(args.where)}`);
            }
            throw error;
        }
    }
    async deleteCategory(args) {
        try {
            return await this.service.delete(args);
        }
        catch (error) {
            if (prisma_util_1.isRecordNotFoundError(error)) {
                throw new apollo.ApolloError(`No resource was found for ${JSON.stringify(args.where)}`);
            }
            throw error;
        }
    }
    async resolveFieldNotes(parent, args) {
        const results = await this.service.findNotes(parent.id, args);
        if (!results) {
            return [];
        }
        return results;
    }
};
__decorate([
    graphql.Query(() => MetaQueryPayload_1.MetaQueryPayload),
    nestAccessControl.UseRoles({
        resource: "Category",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CategoryFindManyArgs_1.CategoryFindManyArgs]),
    __metadata("design:returntype", Promise)
], CategoryResolverBase.prototype, "_categoriesMeta", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.Query(() => [Category_1.Category]),
    nestAccessControl.UseRoles({
        resource: "Category",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CategoryFindManyArgs_1.CategoryFindManyArgs]),
    __metadata("design:returntype", Promise)
], CategoryResolverBase.prototype, "categories", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.Query(() => Category_1.Category, { nullable: true }),
    nestAccessControl.UseRoles({
        resource: "Category",
        action: "read",
        possession: "own",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CategoryFindUniqueArgs_1.CategoryFindUniqueArgs]),
    __metadata("design:returntype", Promise)
], CategoryResolverBase.prototype, "category", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    graphql.Mutation(() => Category_1.Category),
    nestAccessControl.UseRoles({
        resource: "Category",
        action: "create",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateCategoryArgs_1.CreateCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryResolverBase.prototype, "createCategory", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    graphql.Mutation(() => Category_1.Category),
    nestAccessControl.UseRoles({
        resource: "Category",
        action: "update",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateCategoryArgs_1.UpdateCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryResolverBase.prototype, "updateCategory", null);
__decorate([
    graphql.Mutation(() => Category_1.Category),
    nestAccessControl.UseRoles({
        resource: "Category",
        action: "delete",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DeleteCategoryArgs_1.DeleteCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryResolverBase.prototype, "deleteCategory", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.ResolveField(() => [Note_1.Note], { name: "notes" }),
    nestAccessControl.UseRoles({
        resource: "Note",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Parent()),
    __param(1, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Category_1.Category,
        NoteFindManyArgs_1.NoteFindManyArgs]),
    __metadata("design:returntype", Promise)
], CategoryResolverBase.prototype, "resolveFieldNotes", null);
CategoryResolverBase = __decorate([
    common.UseGuards(gqlDefaultAuth_guard_1.GqlDefaultAuthGuard, gqlACGuard.GqlACGuard),
    graphql.Resolver(() => Category_1.Category),
    __metadata("design:paramtypes", [category_service_1.CategoryService, nestAccessControl.RolesBuilder])
], CategoryResolverBase);
exports.CategoryResolverBase = CategoryResolverBase;
//# sourceMappingURL=category.resolver.base.js.map