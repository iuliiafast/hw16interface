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
var Media = /** @class */ (function () {
    function Media() {
    }
    return Media;
}());
var CustomAudio = /** @class */ (function (_super) {
    __extends(CustomAudio, _super);
    function CustomAudio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomAudio.prototype.play = function () {
        console.log("Playing audio");
    };
    return CustomAudio;
}(Media));
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Video.prototype.play = function () {
        console.log("Playing video");
    };
    return Video;
}(Media));
// Создаем массив типа Media[]
var mediaItems = [new CustomAudio(), new Video()];
// Вызываем метод play для каждого элемента массива
mediaItems.forEach(function (media) { return media.play(); });
