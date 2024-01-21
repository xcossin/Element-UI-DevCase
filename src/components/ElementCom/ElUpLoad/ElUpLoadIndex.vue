<!-- 更新组件说明
  提供了: xxx
 -->
<!--
  属性说明

 -->
<template>
  <div class="element-com">
    <div>
      <h2>el-upload 上传组件</h2>
      <el-divider></el-divider>
      <div>
        <ElUploadCard />
      </div>
      <!-- <div class="upload-wrap">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="Gif动画展示" name="1">
            <div class="d-flex f-d-col text-cen f12-gray w-auto">
              <img
                class="img-gif"
                src="@/assets/elComponents/elUpload/closeUpAn.gif"
                alt=""
              />
              <span>关闭上传动画</span>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div> -->
    </div>
  </div>
</template>

<script>
import imgCompress from "./imgCompress";
import ElUploadCard from "@/components/ElementCom/ElUpLoad/ElUpload1/ElUploadCard.vue";

export default {
  name: "ElUpLoad",
  components:{
    ElUploadCard,
  },
  mixins: [imgCompress],
  data() {
    return {
      dialogVisible: false,
      dialogImageUrl: "",
      fileListUrl: [],
      activeNames: "",
    };
  },
  methods: {
    handleChange() {},
    // 文件上传时的钩子
    handleBeforeUpload(file) {
      const isJPG = file.type === "image/jpg";
      const isPng = file.type === "image/png";
      const isJpeg = file.type === "image/jpeg";

      // 限制文件上传类型
      if (!isJPG && !isPng && !isJpeg) {
        this.$message.error("上传图片只能是 png,jpg,jpeg 格式!");
        return false;
      }

      return true;
    },
    // 文件列表移除文件时的钩子
    handleRemove(file, fileList) {
      this.fileListUrl.map((ite, ind) => {
        if (ite.name === file.name) {
          this.fileListUrl.splice(ind, 1);
        }
      });
      // 手动触发change事件 改变上传框的显示
      this.handleAddChange(file, fileList);
      // this.fileListUrl = fileList
    },
    // 点击文件列表中已上传的文件时的钩子
    handlePictureCardPreview(file) {
      // this.dialogImageUrl = file.url
      this.srcList = [file.url];
      this.dialogVisible = true;
    },
    // 覆盖默认的上传行为，自定义上传方法
    newUploadFile(file) {
      if (file.file.size > 1 * 1024 * 1024) {
        // 大于1MB
        this.imgPreview(file.file);
      } else {
        this.blobToBase64(file.file).then((res) => {
          // 转化后的base64
          this.fileListUrl.push({ name: file.file.name, url: res });
        });
      }
    },
    // 文件超出个数限制时的钩子【判断上传的图片是否超过限制，超过提醒删除再进行上传】
    handleExceed() {
      this.$message.info("图片最多上传4张，请删除再重新上传！");
    },
    // //如果图片超过四张，则不显示+号
    handleAddChange(file, fileList) {
      this.uploadDisabled = fileList.length >= 4;
    },
    // 处理图片blob，转为base64
    blobToBase64(blob) {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
          resolve(e.target.result);
        };
        // readAsDataURL
        fileReader.readAsDataURL(blob);
        fileReader.onerror = () => {
          reject(new Error("blobToBase64 error"));
        };
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.element-com
  size 100% 100%
// .upload-wrap
//   padding 24px
// .img-gif
//   size auto
</style>
