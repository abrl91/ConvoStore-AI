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
exports.TemplateResolverBase = void 0;
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
const CreateTemplateArgs_1 = require("./CreateTemplateArgs");
const UpdateTemplateArgs_1 = require("./UpdateTemplateArgs");
const DeleteTemplateArgs_1 = require("./DeleteTemplateArgs");
const TemplateFindManyArgs_1 = require("./TemplateFindManyArgs");
const TemplateFindUniqueArgs_1 = require("./TemplateFindUniqueArgs");
const Template_1 = require("./Template");
const template_service_1 = require("../template.service");
let TemplateResolverBase = class TemplateResolverBase {
    constructor(service, rolesBuilder) {
        this.service = service;
        this.rolesBuilder = rolesBuilder;
    }
    async _templatesMeta(args) {
        const results = await this.service.count(Object.assign(Object.assign({}, args), { skip: undefined, take: undefined }));
        return {
            count: results,
        };
    }
    async templates(args) {
        return this.service.findMany(args);
    }
    async template(args) {
        const result = await this.service.findOne(args);
        if (result === null) {
            return null;
        }
        return result;
    }
    async createTemplate(args) {
        return await this.service.create(Object.assign(Object.assign({}, args), { data: args.data }));
    }
    async updateTemplate(args) {
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
    async deleteTemplate(args) {
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
};
__decorate([
    graphql.Query(() => MetaQueryPayload_1.MetaQueryPayload),
    nestAccessControl.UseRoles({
        resource: "Template",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TemplateFindManyArgs_1.TemplateFindManyArgs]),
    __metadata("design:returntype", Promise)
], TemplateResolverBase.prototype, "_templatesMeta", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.Query(() => [Template_1.Template]),
    nestAccessControl.UseRoles({
        resource: "Template",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TemplateFindManyArgs_1.TemplateFindManyArgs]),
    __metadata("design:returntype", Promise)
], TemplateResolverBase.prototype, "templates", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.Query(() => Template_1.Template, { nullable: true }),
    nestAccessControl.UseRoles({
        resource: "Template",
        action: "read",
        possession: "own",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TemplateFindUniqueArgs_1.TemplateFindUniqueArgs]),
    __metadata("design:returntype", Promise)
], TemplateResolverBase.prototype, "template", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    graphql.Mutation(() => Template_1.Template),
    nestAccessControl.UseRoles({
        resource: "Template",
        action: "create",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateTemplateArgs_1.CreateTemplateArgs]),
    __metadata("design:returntype", Promise)
], TemplateResolverBase.prototype, "createTemplate", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    graphql.Mutation(() => Template_1.Template),
    nestAccessControl.UseRoles({
        resource: "Template",
        action: "update",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateTemplateArgs_1.UpdateTemplateArgs]),
    __metadata("design:returntype", Promise)
], TemplateResolverBase.prototype, "updateTemplate", null);
__decorate([
    graphql.Mutation(() => Template_1.Template),
    nestAccessControl.UseRoles({
        resource: "Template",
        action: "delete",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DeleteTemplateArgs_1.DeleteTemplateArgs]),
    __metadata("design:returntype", Promise)
], TemplateResolverBase.prototype, "deleteTemplate", null);
TemplateResolverBase = __decorate([
    common.UseGuards(gqlDefaultAuth_guard_1.GqlDefaultAuthGuard, gqlACGuard.GqlACGuard),
    graphql.Resolver(() => Template_1.Template),
    __metadata("design:paramtypes", [template_service_1.TemplateService, nestAccessControl.RolesBuilder])
], TemplateResolverBase);
exports.TemplateResolverBase = TemplateResolverBase;
//# sourceMappingURL=template.resolver.base.js.map