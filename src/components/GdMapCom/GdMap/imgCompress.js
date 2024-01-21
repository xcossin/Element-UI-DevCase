// import Exif from 'exif-js' // 照片EXIF信息库  需要安装依赖包
export default {
  data() {
    return {
      files: {
        maxFile: 1 * 1024 * 1024, // 文件大小的限制-可以进行组件上传的限制 1024*1024=1024KB=1MB
        limitSize: 1024 * 1024, // b（字节）-后面进行压缩判断-大于1MB进行压缩反之直接添加
        name: "", // 文件名
        type: "", // 文件类型
      },
    };
  },
  methods: {
    // 处理图片
    imgPreview(file, fileObj) {
      const self = this;
      let Orientation;
      // 去获取拍照时的信息，解决拍出来的照片旋转问题   npm install exif-js --save   这里需要安装一下包
      //   Exif.getData(file, function () {
      //     Orientation = Exif.getTag(this, 'Orientation')
      //   })
      // 看支持不支持FileReader
      if (!file || !window.FileReader) return;
      if (/^image/.test(file.type)) {
        // 创建一个reader
        const reader = new FileReader();
        // 将图片2将转成 base64 格式
        reader.readAsDataURL(file);
        // 读取成功后的回调
        const that = this;
        reader.onloadend = function () {
          const { result } = this;
          const img = new Image();
          img.src = result;
          // 判断图片是否小于1MB(取决于maxFile),是就直接上传，反之压缩图片
          if (this.result.length <= that.files.limitSize) {
            // 上传图片
            self.postImg(this.result, fileObj);
          } else {
            img.onload = function () {
              const data = self.compress(img, Orientation);
              // 上传图片
              self.postImg(data, fileObj);
            };
          }
        };
      }
    },
    // 压缩图片
    compress(img, Orientation) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      // 瓦片canvas
      const tCanvas = document.createElement("canvas");
      const tctx = tCanvas.getContext("2d");
      // let initSize = img.src.length;
      let { width } = img;
      let { height } = img;
      // 如果图片大于四百万像素，计算压缩比并将大小压至100万以下
      let ratio;
      if ((ratio = (width * height) / 1000000) > 1) {
        // console.log("大于400万像素");
        ratio = Math.sqrt(ratio);
        width /= ratio;
        height /= ratio;
      } else {
        ratio = 1;
      }
      canvas.width = width;
      canvas.height = height;
      //    铺底色
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // 如果图片像素大于100万则使用瓦片绘制
      let count;
      if ((count = (width * height) / 1000000) > 1) {
        // console.log("超过100W像素");
        count = ~~(Math.sqrt(count) + 1); // 计算要分成多少块瓦片
        //      计算每块瓦片的宽和高
        const nw = ~~(width / count);
        const nh = ~~(height / count);
        tCanvas.width = nw;
        tCanvas.height = nh;
        for (let i = 0; i < count; i++) {
          for (let j = 0; j < count; j++) {
            tctx.drawImage(
              img,
              i * nw * ratio,
              j * nh * ratio,
              nw * ratio,
              nh * ratio,
              0,
              0,
              nw,
              nh
            );
            ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
          }
        }
      } else {
        ctx.drawImage(img, 0, 0, width, height);
      }
      // 修复ios上传图片的时候 被旋转的问题
      if (Orientation !== "" && Orientation !== 1) {
        switch (Orientation) {
          case 6: // 需要顺时针（向左）90度旋转
            this.rotateImg(img, "left", canvas);
            break;
          case 8: // 需要逆时针（向右）90度旋转
            this.rotateImg(img, "right", canvas);
            break;
          case 3: // 需要180度旋转
            this.rotateImg(img, "right", canvas); // 转两次
            this.rotateImg(img, "right", canvas);
            break;
        }
      }
      // 进行最小压缩
      const ndata = this.size(canvas);
      //   console.log(ndata, '压缩后的图片')
      tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
      return ndata;
    },
    size(canvas) {
      const quality = Array.from(new Array(10).keys());
      quality.splice(0, 1);
      quality.reverse();
      let returnBase64 = "";
      quality.find((it) => {
        returnBase64 = canvas.toDataURL("image/jpeg", it * 0.1);
        return returnBase64.length <= this.files.limitSize;
      });
      return returnBase64;
    },
    // 旋转图片
    rotateImg(img, direction, canvas) {
      // 最小与最大旋转方向，图片旋转4次后回到原方向
      const minStep = 0;
      const maxStep = 3;
      if (img == null) return;
      // img的高度和宽度不能在img元素隐藏后获取，否则会出错
      const { height } = img;
      const { width } = img;
      let step = 2;
      if (step == null) {
        step = minStep;
      }
      if (direction === "right") {
        step++;
        // 旋转到原位置，即超过最大值
        step > maxStep && (step = minStep);
      } else {
        step--;
        step < minStep && (step = maxStep);
      }
      // 旋转角度以弧度值为参数
      const degree = (step * 90 * Math.PI) / 180;
      const ctx = canvas.getContext("2d");
      switch (step) {
        case 0:
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0);
          break;
        case 1:
          canvas.width = height;
          canvas.height = width;
          ctx.rotate(degree);
          ctx.drawImage(img, 0, -height);
          break;
        case 2:
          canvas.width = width;
          canvas.height = height;
          ctx.rotate(degree);
          ctx.drawImage(img, -width, -height);
          break;
        case 3:
          canvas.width = height;
          canvas.height = width;
          ctx.rotate(degree);
          ctx.drawImage(img, -width, 0);
          break;
      }
    },
    // 将base64转换为文件
    dataURLtoFile(dataurl) {
      var arr = dataurl.split(",");
      var bstr = atob(arr[1]);
      var n = bstr.length;
      var u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], this.files.name, {
        type: this.files.type,
      });
    },

    // 处理图片
    // eslint-disable-next-line
    postImg(base64, fileObj = "") {
      // eslint-disable-next-line
      const file = this.dataURLtoFile(base64);
      // 将所处理后的图片添加进所选图片数组
      this.fileListUrl.push({ name: "", url: base64 });
    },
  },
};
