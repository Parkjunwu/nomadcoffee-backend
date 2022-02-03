"use strict";
// import { protectResolver } from "../../shared";
// import { Resolver } from "../../type";
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
// const resolver: Resolver = {
//   Mutation: {
//     createCoffeeShop:protectResolver(async(_,{name,latitude,longitude,photoUrlArr,categories},{client,loggedInUser}) => {
//       // photoUrlArr.map((url:string)=>({url}))
//       if(!name) {
//         return {ok:false, error:"Please write coffee shop's name"}
//       }
//       if(!latitude || !longitude) {
//         return {ok:false, error:"Please write coffee shop's position"}
//       }
//       try {
//         const ok = await client.coffeeShop.create({
//           data:{
//             name,
//             latitude,
//             longitude,
//             user:{
//               connect:{
//                 id:loggedInUser?.id
//               }
//             },
//             ...( photoUrlArr && {
//               photos:{
//                 create: photoUrlArr.map((url:string) => ({url}) )
//               }
//             }),
//             ...(categories && {
//               categories:{
//                 connectOrCreate:{
//                   where:{
//                     name:categories
//                   },
//                   create:{
//                     name:categories,
//                     //// slug name 전부 다 들어온거 그대로 씀.
//                     slug:categories,
//                   }
//                 }
//               }
//             })
//           }
//         })
//         if(ok){
//           return {ok:true}
//         } else {
//           return {ok:false, error: "Cannot create CoffeeShop"}
//         }
//       } catch (e) {
//         console.log(e);
//         return {ok:false, error: "Unknown Server Error"}
//       }
//     })
//   }
// }
// export default resolver;
var aws_1 = require("../../aws");
var shared_1 = require("../../shared");
var resolver = {
    Mutation: {
        createCoffeeShop: (0, shared_1.protectResolver)(function (_, _a, _b) {
            var name = _a.name, latitude = _a.latitude, longitude = _a.longitude, photoUrl = _a.photoUrl, categories = _a.categories;
            var client = _b.client, loggedInUser = _b.loggedInUser;
            return __awaiter(void 0, void 0, void 0, function () {
                var categoryArr, hashtag, ok, _c, _d, _e, _f, _g, e_1;
                var _h, _j, _k, _l;
                var _m;
                return __generator(this, function (_o) {
                    switch (_o.label) {
                        case 0:
                            // photoUrlArr.map((url:string)=>({url}))
                            if (!name) {
                                return [2 /*return*/, { ok: false, error: "Please write coffee shop's name" }];
                            }
                            if (!latitude || !longitude) {
                                return [2 /*return*/, { ok: false, error: "Please write coffee shop's position" }];
                            }
                            if (categories) {
                                hashtag = (_m = categories.split(" ")) === null || _m === void 0 ? void 0 : _m.filter(function (word) { return /#[\w|ㄱ-ㅎ|가-힣|ㅏ-ㅣ]+/g.test(word); });
                                categoryArr = hashtag === null || hashtag === void 0 ? void 0 : hashtag.map(function (str) {
                                    var name = str.substr(1);
                                    return {
                                        category: {
                                            connectOrCreate: {
                                                where: {
                                                    name: name
                                                },
                                                create: {
                                                    name: name,
                                                    slug: categories,
                                                }
                                            }
                                        }
                                    };
                                });
                                // categoryArr = categories.split(" ")?.filter((word:string) => /#[\w|ㄱ-ㅎ|가-힣|ㅏ-ㅣ]+/g.test(word))
                                // categoryArr = categories.split("#")?.filter((word:string) => !(/\s/g.test(word)))
                                console.log(categoryArr);
                                // /#[\w|ㄱ-ㅎ|가-힣|ㅏ-ㅣ]+/g
                            }
                            _o.label = 1;
                        case 1:
                            _o.trys.push([1, 6, , 7]);
                            _d = (_c = client.coffeeShop).create;
                            _h = {};
                            _e = [{ name: name, latitude: latitude, longitude: longitude, user: {
                                        connect: {
                                            id: loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.id
                                        }
                                    } }];
                            _f = photoUrl;
                            if (!_f) return [3 /*break*/, 4];
                            _j = {};
                            _k = {};
                            _g = (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.id);
                            if (!_g) return [3 /*break*/, 3];
                            _l = {};
                            return [4 /*yield*/, (0, aws_1.async_uploadPhoto)(photoUrl, loggedInUser.id)];
                        case 2:
                            _g = (_l.url = _o.sent(), _l);
                            _o.label = 3;
                        case 3:
                            _f = (_j.photos = (_k.create = _g,
                                _k),
                                _j);
                            _o.label = 4;
                        case 4: return [4 /*yield*/, _d.apply(_c, [(_h.data = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_f)])), (categoryArr && {
                                        categories: {
                                            create: [
                                                {
                                                    category: {
                                                        connectOrCreate: {
                                                            where: {
                                                                name: name
                                                            },
                                                            create: {
                                                                name: name,
                                                                slug: categories,
                                                            }
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    })]),
                                    _h)])];
                        case 5:
                            ok = _o.sent();
                            if (ok) {
                                return [2 /*return*/, { ok: true }];
                            }
                            else {
                                return [2 /*return*/, { ok: false, error: "Cannot create CoffeeShop" }];
                            }
                            return [3 /*break*/, 7];
                        case 6:
                            e_1 = _o.sent();
                            console.log(e_1);
                            return [2 /*return*/, { ok: false, error: "Unknown Server Error" }];
                        case 7: return [2 /*return*/];
                    }
                });
            });
        })
    }
};
exports.default = resolver;
