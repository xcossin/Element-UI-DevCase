<template>
  <div class="com-box">
    <h3>el-upload-card 覆盖默认的上传行为并压缩</h3>
    <div class="component-des-box">
      <!-- <h4>http-request</h4> -->
      <p class="mar-bot-20">
        http-request 方法<br>
      </p> 
      <el-upload
        ref="upload"
        action="#"
        list-type="picture-card"
        accept=".jpg, .jpeg, .png"
        :auto-upload="true"
        :http-request="newUploadFile"
        :file-list="fileListUrl"
        :before-upload="beforeUpload"
        :on-success="onSuccess"
        :on-progress="onProgress"
        :on-change="onChange" >
        <i class="el-icon-plus"></i>
      </el-upload>
      <p class="mar-tAb-20">
        转化后的base64格式：<br>
      </p>
      <el-input
        type="textarea"
        :rows="5"
        placeholder="请输入内容"
        v-model="form.desc">
      </el-input>
      <el-button>下载压缩后的文件</el-button>
    </div>
    
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
import { saveBlobFileCus } from "@/utils/common";
import imgCompress from './imgCompress'
export default {
  mixins: [imgCompress],
  data() {
    return {
      fileListUrl:[],
      form:{
        desc:''
      },
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
    // 覆盖默认的上传行为，自定义上传方法
    newUploadFile: function (file) {
      console.log('file', file)
      if (file.file.size > 1 * 1024 * 1024) { // 大于1MB
        this.$message.info('大于1MB的图片将会被压缩')
        this.imgPreview(file.file)
      } else {
        this.blobToBase64(file.file).then(res => {
          this.form.desc = res
          // 转化后的base64
          // this.fileListUrl.push({ name: file.file.name, url: res })
        })
      }
    },
    // 处理图片blob，转为base64
    blobToBase64 (blob) {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.onload = (e) => {
          resolve(e.target.result)
        }
        // readAsDataURL
        fileReader.readAsDataURL(blob)
        fileReader.onerror = () => {
          reject(new Error('blobToBase64 error'))
        }
      })
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
