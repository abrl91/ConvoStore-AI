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
exports.NoteResolverBase = void 0;
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
const CreateNoteArgs_1 = require("./CreateNoteArgs");
const UpdateNoteArgs_1 = require("./UpdateNoteArgs");
const DeleteNoteArgs_1 = require("./DeleteNoteArgs");
const NoteFindManyArgs_1 = require("./NoteFindManyArgs");
const NoteFindUniqueArgs_1 = require("./NoteFindUniqueArgs");
const Note_1 = require("./Note");
const CategoryFindManyArgs_1 = require("../../category/base/CategoryFindManyArgs");
const Category_1 = require("../../category/base/Category");
const User_1 = require("../../user/base/User");
const note_service_1 = require("../note.service");
let NoteResolverBase = class NoteResolverBase {
    constructor(service, rolesBuilder) {
        this.service = service;
        this.rolesBuilder = rolesBuilder;
    }
    async _notesMeta(args) {
        const results = await this.service.count(Object.assign(Object.assign({}, args), { skip: undefined, take: undefined }));
        return {
            count: results,
        };
    }
    async notes(args) {
        return this.service.findMany(args);
    }
    async note(args) {
        const result = await this.service.findOne(args);
        if (result === null) {
            return null;
        }
        return result;
    }
    async createNote(args) {
        return await this.service.create(Object.assign(Object.assign({}, args), { data: Object.assign(Object.assign({}, args.data), { user: args.data.user
                    ? {
                        connect: args.data.user,
                    }
                    : undefined }) }));
    }
    async updateNote(args) {
        try {
            return await this.service.update(Object.assign(Object.assign({}, args), { data: Object.assign(Object.assign({}, args.data), { user: args.data.user
                        ? {
                            connect: args.data.user,
                        }
                        : undefined }) }));
        }
        catch (error) {
            if (prisma_util_1.isRecordNotFoundError(error)) {
                throw new apollo.ApolloError(`No resource was found for ${JSON.stringify(args.where)}`);
            }
            throw error;
        }
    }
    async deleteNote(args) {
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
    async resolveFieldCategories(parent, args) {
        const results = await this.service.findCategories(parent.id, args);
        if (!results) {
            return [];
        }
        return results;
    }
    async resolveFieldUser(parent) {
        const result = await this.service.getUser(parent.id);
        if (!result) {
            return null;
        }
        return result;
    }
};
__decorate([
    graphql.Query(() => MetaQueryPayload_1.MetaQueryPayload),
    nestAccessControl.UseRoles({
        resource: "Note",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [NoteFindManyArgs_1.NoteFindManyArgs]),
    __metadata("design:returntype", Promise)
], NoteResolverBase.prototype, "_notesMeta", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.Query(() => [Note_1.Note]),
    nestAccessControl.UseRoles({
        resource: "Note",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [NoteFindManyArgs_1.NoteFindManyArgs]),
    __metadata("design:returntype", Promise)
], NoteResolverBase.prototype, "notes", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.Query(() => Note_1.Note, { nullable: true }),
    nestAccessControl.UseRoles({
        resource: "Note",
        action: "read",
        possession: "own",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [NoteFindUniqueArgs_1.NoteFindUniqueArgs]),
    __metadata("design:returntype", Promise)
], NoteResolverBase.prototype, "note", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    graphql.Mutation(() => Note_1.Note),
    nestAccessControl.UseRoles({
        resource: "Note",
        action: "create",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateNoteArgs_1.CreateNoteArgs]),
    __metadata("design:returntype", Promise)
], NoteResolverBase.prototype, "createNote", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    graphql.Mutation(() => Note_1.Note),
    nestAccessControl.UseRoles({
        resource: "Note",
        action: "update",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateNoteArgs_1.UpdateNoteArgs]),
    __metadata("design:returntype", Promise)
], NoteResolverBase.prototype, "updateNote", null);
__decorate([
    graphql.Mutation(() => Note_1.Note),
    nestAccessControl.UseRoles({
        resource: "Note",
        action: "delete",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DeleteNoteArgs_1.DeleteNoteArgs]),
    __metadata("design:returntype", Promise)
], NoteResolverBase.prototype, "deleteNote", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.ResolveField(() => [Category_1.Category], { name: "categories" }),
    nestAccessControl.UseRoles({
        resource: "Category",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Parent()),
    __param(1, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Note_1.Note,
        CategoryFindManyArgs_1.CategoryFindManyArgs]),
    __metadata("design:returntype", Promise)
], NoteResolverBase.prototype, "resolveFieldCategories", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.ResolveField(() => User_1.User, {
        nullable: true,
        name: "user",
    }),
    nestAccessControl.UseRoles({
        resource: "User",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Note_1.Note]),
    __metadata("design:returntype", Promise)
], NoteResolverBase.prototype, "resolveFieldUser", null);
NoteResolverBase = __decorate([
    common.UseGuards(gqlDefaultAuth_guard_1.GqlDefaultAuthGuard, gqlACGuard.GqlACGuard),
    graphql.Resolver(() => Note_1.Note),
    __metadata("design:paramtypes", [note_service_1.NoteService, nestAccessControl.RolesBuilder])
], NoteResolverBase);
exports.NoteResolverBase = NoteResolverBase;
//# sourceMappingURL=note.resolver.base.js.map