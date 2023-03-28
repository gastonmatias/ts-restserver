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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUser = exports.getUserById = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
//! READ ALL
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.findAll();
    res.status(200).json({
        msg: 'get usuarios',
        users
    });
});
exports.getUsers = getUsers;
//! READ ONE
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    if (!user) {
        return res.status(404).json({
            msg: 'user not found!'
        });
    }
    res.status(200).json({
        msg: 'get User x id',
        user
    });
});
exports.getUserById = getUserById;
//! CREATE
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, status } = req.body;
    try {
        const emailExists = yield user_1.default.findOne({ where: { email } });
        if (emailExists) {
            return res.status(400).json({
                msg: 'Email already registered'
            });
        }
        // Create a new user
        const newUser = yield user_1.default.create({
            name, email, status
        });
        res.status(200).json({
            msg: 'user Created',
            newUser
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msge: 'Contact the admin'
        });
    }
});
exports.postUser = postUser;
//! UPDATE
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, email, status } = req.body;
    try {
        // valida que usuario a actualizar efectivamente exista
        const userExists = yield user_1.default.findByPk(id);
        if (!userExists) {
            return res.status(400).json({
                msg: `there's no user with id ${id}`
            });
        }
        // actualizacion user
        const updateUser = yield user_1.default.update({ name, email, status }, {
            where: { id },
            returning: true
        });
        const [, user] = updateUser;
        res.status(200).json({
            msg: 'user updated!',
            user
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msge: "Contact the admin"
        });
    }
});
exports.putUser = putUser;
//! DELETE
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const userExists = yield user_1.default.findByPk(id);
        if (!userExists) {
            return res.status(400).json({
                msg: `there's no user with id ${id}`
            });
        }
        const userToDelete = yield user_1.default.destroy({
            where: { id }
        });
        res.status(200).json({
            msge: 'User deleted!'
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'Contact the admin'
        });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.controllers.js.map