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
var shared_1 = require("../../shared");
var aws_1 = require("../../aws");
var resolver = {
    Mutation: {
        editProfile: (0, shared_1.protectResolver)(function (_, _a, _b) {
            var id = _a.id, name = _a.name, password = _a.password, location = _a.location, avatarURL = _a.avatarURL, githubUsername = _a.githubUsername;
            var client = _b.client, loggedInUser = _b.loggedInUser;
            return __awaiter(void 0, void 0, void 0, function () {
                var ok, _c, _d, _e, _f, _g, _h, e_1;
                var _j, _k, _l;
                return __generator(this, function (_m) {
                    switch (_m.label) {
                        case 0:
                            _m.trys.push([0, 6, , 7]);
                            if (!name && !location && !avatarURL && !password && !githubUsername) {
                                return [2 /*return*/, { ok: false, error: "Nothing to change" }];
                            }
                            if (id !== (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.id)) {
                                return [2 /*return*/, { ok: false, error: "Cannot change another user's profile." }];
                            }
                            _d = (_c = client.user).update;
                            _j = {
                                where: {
                                    id: id
                                }
                            };
                            _e = [__assign({}, (name && { name: name }))];
                            _f = password;
                            if (!_f) return [3 /*break*/, 2];
                            _k = {};
                            return [4 /*yield*/, (0, shared_1.async_makeHashPassword)(password)];
                        case 1:
                            _f = (_k.password = _m.sent(), _k);
                            _m.label = 2;
                        case 2:
                            _g = [__assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_f)])), (location && { location: location })])];
                            _h = avatarURL;
                            if (!_h) return [3 /*break*/, 4];
                            _l = {};
                            return [4 /*yield*/, (0, aws_1.async_uploadPhoto)(avatarURL, id)];
                        case 3:
                            _h = (_l.avatarURL = _m.sent(), _l);
                            _m.label = 4;
                        case 4: return [4 /*yield*/, _d.apply(_c, [(_j.data = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_h)])), (githubUsername && { githubUsername: githubUsername })]),
                                    _j.select = {
                                        id: true
                                    },
                                    _j)])];
                        case 5:
                            ok = _m.sent();
                            if (ok) {
                                return [2 /*return*/, { ok: true }];
                            }
                            else {
                                return [2 /*return*/, { ok: false, error: "Database Error" }];
                            }
                            return [3 /*break*/, 7];
                        case 6:
                            e_1 = _m.sent();
                            console.log(e_1);
                            return [2 /*return*/, { ok: false, error: "Unknown Error" }];
                        case 7: return [2 /*return*/];
                    }
                });
            });
        })
    }
};
exports.default = resolver;
