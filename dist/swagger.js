"use strict";
//! https://www.youtube.com/watch?v=RayDPBYou4I
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
// import swaggerUi from 'swagger-ui'
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'Restserver Typescript - Task App',
            version: "1.0.0"
        },
        apis: ["routes/usuarios.routes.ts"]
    }
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
const swaggerDocs = (app, port) => {
    app.use('/api/usuarios', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
    app.get('/api/usuarios', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
    console.log('Version 2 Docs are available at localhost:port');
};
exports.default = swaggerDocs;
//# sourceMappingURL=swagger.js.map