var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
import Image from './Image';
import MyDate from './MyDate';
import API, { url_get_users_id } from "../api/Api";
var MinUser = /** @class */ (function () {
    function MinUser(props) {
        var _a;
        if (!props) {
            return;
        }
        this.id = props.id;
        this.firstName = props.firstName;
        this.surname = props.surname;
        this.patronymic = (_a = props.patronymic) !== null && _a !== void 0 ? _a : "";
        this.image = new Image(props.imageId ? { id: props.imageId } : null);
    }
    MinUser.prototype.getUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var info_user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, API.get(url_get_users_id(this.id)).then(function (response) { return response.data; }).catch((function (error) { return undefined; }))];
                    case 1:
                        info_user = _a.sent();
                        if (!info_user) {
                            return [2 /*return*/, Promise.reject(null)];
                        }
                        return [2 /*return*/, Promise.resolve(new User(info_user))];
                }
            });
        });
    };
    MinUser.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.surname, " ").concat(this.patronymic);
    };
    return MinUser;
}());
export { MinUser };
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(props) {
        var _this = this;
        var _a, _b, _c, _d;
        _this = _super.call(this) || this;
        if (!props) {
            return _this;
        }
        _this.birthday = new MyDate(props.birthday);
        _this.aboutMyself = (_a = props.aboutMyself) !== null && _a !== void 0 ? _a : "";
        _this.myDoings = (_b = props.myDoings) !== null && _b !== void 0 ? _b : "";
        _this.skills = (_c = props.skills) !== null && _c !== void 0 ? _c : "";
        _this.subscribersCount = props.subscribersCount;
        _this.subscriptionsCount = props.subscriptionsCount;
        _this.isSubscription = props.isSubscription;
        _this.email = props.email;
        _this.isActiveAccount = props.isActiveAccount;
        _this.roles = props.roles;
        _this.positions = props.positions;
        _this.id = props.id;
        _this.firstName = props.firstName;
        _this.surname = props.surname;
        _this.patronymic = (_d = props.patronymic) !== null && _d !== void 0 ? _d : "";
        _this.image = new Image(props.imageId ? { id: props.imageId } : null);
        return _this;
    }
    User.getUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var info_user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, API.get(url_get_users_id(id)).then(function (response) { return response.data; }).catch((function (error) { return undefined; }))];
                    case 1:
                        info_user = _a.sent();
                        if (!info_user) {
                            return [2 /*return*/, Promise.reject(null)];
                        }
                        return [2 /*return*/, Promise.resolve(new User(info_user))];
                }
            });
        });
    };
    return User;
}(MinUser));
export default User;