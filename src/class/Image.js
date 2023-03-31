import React from "react";
import API, { url_get_images_id } from "../api/Api";
import { notifyError } from "../Components/Notifications/Notifications";
var Image = /** @class */ (function () {
    function Image(props) {
        if (!props.id && !props.name && props.extension && props.data)
            if (props.id && (!props.name || !props.extension || !props.data)) {
                this.id = props.id;
            }
            else if (props.id && props.name && props.extension && props.data) {
                this.id = props.id;
                this.name = props.name;
                this.extension = props.extension;
                this.base64 = props.data;
            }
    }
    Image.prototype.getImg = function (setImage) {
        var _this = this;
        API.get(url_get_images_id(this.id))
            .then(function (response) {
            var data = response.data;
            if (data.id && data.name && data.extension && data.data) {
                _this.id = data.id;
                _this.name = data.name;
                _this.extension = data.extension;
                _this.base64 = data.data;
                setImage(_this.getImgJSX());
            }
        })
            .catch(function () {
            notifyError("Ошибка не удалось загрузить изображение");
        });
    };
    Image.prototype.getImgJSX = function () {
        return (React.createElement("img", { key: this.id, src: "data:".concat(this.extension, ";base64,").concat(this.base64), alt: this.name }));
    };
    return Image;
}());
export default Image;
