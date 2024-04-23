<template>
  <div class="com-box">
    <h3>el-upload-card 隐藏移除添加动画</h3>
    <div class="component-des-box">
      <h4>原版</h4>
      <p class="mar-bot-20">
        添加图片或者删除图片动画效果很慢<br>
      </p>
      <el-upload
        ref="upload"
        action="#"
        list-type="picture-card"
        accept=".jpg, .jpeg, .png"
        :auto-upload="false"
        :file-list="fileList1"
        :before-upload="beforeUpload"
        :on-success="onSuccess"
        :on-progress="onProgress"
        :on-change="onChange" >
        <i class="el-icon-plus"></i>
      </el-upload>
    </div>
    <div class="component-des-box">
      <h4>修改后</h4>
      <p class="mar-tAb-20">
        3、此组件action="#",:auto-upload="false",上传文件只调用 on-change 方法<br>
      </p>
      <el-upload
        ref="upload"
        action="#"
        list-type="picture-card"
        accept=".jpg, .jpeg, .png"
        :auto-upload="false"
        :file-list="fileList1"
        :before-upload="beforeUpload"
        :on-success="onSuccess"
        :on-progress="onProgress"
        :on-change="onChange" >
        <i class="el-icon-plus"></i>
      </el-upload>
    </div>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
import { saveBlobFileCus } from "@/utils/common";
export default {
  name: "ElUpLoad",
  data() {
    return {
      fileList1:[],
      fileList2:[],
      downloadFileType: '',
      options: [
        { label: '下载 before-upload 转换的二进制文件', value: 'up' },
        { label: '下载 on-change file 转换的二进制文件', value: 'changeFile' },
        { label: '下载 on-change 的 raw 转换的二进制文件', value: 'changeFileRaw' },
      ],
      upFile:{},
      changeFile:{},
      changeFileRaw:{},
      activeNames:'',
      dialogVisible: false,
      dialogImageUrl: "",
      
    }
  },
  methods: {
    /**
     * @name 王本灿
     * @introduction 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
     * @param {参数类型} file 选择的文件对象
     * @param {参数类型} fileList 当前组件的文件列表
     */
    
    onChange (file, fileList) {
      // const formData = new FormData()
      const types = ['image/jpeg', 'image/jpg', 'image/png']
      const isImage = types.includes(file.raw.type)
      if (!isImage) {
        this.$message.error('上传图片只能是 JPG、JPEG、PNG 格式')
        this.handleRemove(file)
      } else {
        this.fileList1 = fileList
      }
    },
    /**
     * @name 王本灿
     * @introduction 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
     * @param {参数类型} file 上传的文件对象
     */
    beforeUpload(file){
      
    },
    /**
     * @name 王本灿
     * @introduction 文件上传成功时的钩子
     * @param {参数类型} file 选择的文件对象
     * @param {参数类型} fileList 当前组件的文件列表
     */
    onSuccess (response, file, fileList) {
      
    },
    /**
     * @name 王本灿
     * @introduction 文件上传时的钩子
     * @param {参数类型} file 选择的文件对象
     * @param {参数类型} fileList 当前组件的文件列表
     */
    onProgress (event, file, fileList) {
      console.log('onProgress - event', event)
      console.log('onProgress - file, fileList', file, fileList)
      const types = ['image/jpeg', 'image/jpg', 'image/png']
      const isImage = types.includes(file.raw.type)
      if (!isImage) {
        this.$message.error('上传图片只能是 JPG、JPEG、PNG 格式')
        this.handleRemove(file)
      } else {
        this.fileList = fileList
      }
    },
    /**
     * @name 王本灿
     * @introduction 下载文件
     * @param {参数类型} 参数 参数说明
     */
    downTypechange(type){
      try {
        if(type === 'up'){
          const {blob,name} = this.upFile
          saveBlobFileCus(blob,name)
        }else if(type === 'changeFile'){
          const {blob,name,file} = this.changeFile
          saveBlobFileCus(file.raw,name)
        }else if(type === 'changeFileRaw'){
          const {blob,name,file} = this.changeFileRaw
          saveBlobFileCus(file.raw,name)
        }else{

        }
      } catch (error) {
        this.$message({
          message:'还未上传图片素材',
          type: 'warning',
          // duration:0,
          showClose:true
        })
      }
    },
    /**
     * @name 王本灿
     * @introduction 下载文件
     * @param {参数类型} 参数 参数说明
     */
    downloadFile(type){
      if(type === 'up'){
        const {blob,name} = this.upFile
        saveBlobFileCus(blob,name)
      }else if(type === 'changeFile'){
        const {blob,name,file} = this.changeFile
        saveBlobFileCus(file.raw,name)
      }else if(type === 'changeFileRaw'){
        const {blob,name,file} = this.changeFileRaw
        saveBlobFileCus(file.raw,name)
      }
    }
  },
};
</script>

<style lang="stylus" scoped>
// 隐藏上传按钮
// .hideAdd
//   /deep/ .el-upload--picture-card
//     display none
// 在样式把这个is-ready给隐藏 隐藏上传动画
// /deep/.el-upload-list__item.is-ready
//   display none
</style>
