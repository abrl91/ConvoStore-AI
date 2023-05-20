"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumCategoryOptions = void 0;
const graphql_1 = require("@nestjs/graphql");
var EnumCategoryOptions;
(function (EnumCategoryOptions) {
    EnumCategoryOptions["Photography"] = "Photography";
    EnumCategoryOptions["Music"] = "Music";
    EnumCategoryOptions["Piano"] = "Piano";
    EnumCategoryOptions["Code"] = "Code";
    EnumCategoryOptions["Sports"] = "Sports";
})(EnumCategoryOptions = exports.EnumCategoryOptions || (exports.EnumCategoryOptions = {}));
graphql_1.registerEnumType(EnumCategoryOptions, {
    name: "EnumCategoryOptions",
});
//# sourceMappingURL=EnumCategoryOptions.js.map