"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../../client");
var bcrypt = require("bcrypt");
var aws_1 = require("../../aws");
var resolvers = {
    Mutation: {
        createUser: function (_, _a) {
            var username = _a.username, password = _a.password, email = _a.email, name = _a.name, location = _a.location, avatarURL = _a.avatarURL, githubUsername = _a.githubUsername;
            return __awaiter(void 0, void 0, void 0, function () {
                var isSameUser, storeInDBPassword, ok, _b, _c, e_1;
                var _d, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            console.log(avatarURL);
                            _f.label = 1;
                        case 1:
                            _f.trys.push([1, 10, , 11]);
                            if (!username || !email) {
                                return [2 /*return*/, { ok: false, error: "username and email is required. Please check and write that." }];
                            }
                            if (!password || !name || !location) {
                                return [2 /*return*/, { ok: false, error: "Something required is not written. Please check and write that." }];
                            }
                            return [4 /*yield*/, client_1.default.user.findFirst({
                                    where: {
                                        OR: [
                                            { username: username },
                                            { email: email },
                                        ]
                                    },
                                    select: {
                                        id: true
                                    }
                                })];
                        case 2:
                            isSameUser = _f.sent();
                            console.log(isSameUser);
                            if (isSameUser) {
                                return [2 /*return*/, { ok: false, error: "There is already same user. Please rename." }];
                            }
                            return [4 /*yield*/, bcrypt.hash(password, 10)
                                // bcrypt.compare(password, storeInDBPassword)
                            ];
                        case 3:
                            storeInDBPassword = _f.sent();
                            // bcrypt.compare(password, storeInDBPassword)
                            if (!storeInDBPassword) {
                                return [2 /*return*/, { ok: false, error: "Cannot create account. Server error." }];
                            }
                            return [4 /*yield*/, client_1.default.user.create({
                                    data: __assign({ username: username, password: storeInDBPassword, email: email, name: name, location: location }, (githubUsername && { githubUsername: githubUsername })),
                                    select: {
                                        id: true
                                    }
                                })];
                        case 4:
                            ok = _f.sent();
                            if (!ok) return [3 /*break*/, 8];
                            if (!avatarURL) return [3 /*break*/, 7];
                            _c = (_b = client_1.default.user).update;
                            _d = {
                                where: {
                                    id: ok.id
                                }
                            };
                            _e = {};
                            return [4 /*yield*/, (0, aws_1.async_uploadPhoto)(avatarURL, ok.id)];
                        case 5: return [4 /*yield*/, _c.apply(_b, [(_d.data = (_e.avatarURL = _f.sent(),
                                    _e),
                                    _d)])];
                        case 6:
                            _f.sent();
                            _f.label = 7;
                        case 7: return [2 /*return*/, { ok: true }];
                        case 8: return [2 /*return*/, { ok: false, error: "Cannot create account. Server Database error." }];
                        case 9: return [3 /*break*/, 11];
                        case 10:
                            e_1 = _f.sent();
                            console.log(e_1);
                            return [2 /*return*/, { ok: false, error: "Cannot create account. Unknown error." }];
                        case 11: return [2 /*return*/];
                    }
                });
            });
        }
    }
};
exports.default = resolvers;
