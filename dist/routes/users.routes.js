"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controllers_1 = require("../controllers/users.controllers");
const router = (0, express_1.Router)();
router.get('/', users_controllers_1.getUsers);
router.get('/:id', users_controllers_1.getUserById);
router.post('/', users_controllers_1.postUser);
router.put('/:id', users_controllers_1.putUser);
router.delete('/:id', users_controllers_1.deleteUser);
exports.default = router;
//# sourceMappingURL=users.routes.js.map