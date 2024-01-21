<template>
  <div class="">
    <div class="component-des-box">
      <p class="component-des">el-upload-card 如何获取二进制文件，</p>
      <p class="mar-bot-20">
        1、action参数直接定义好上传接口，直接使用el-upload组件上传文件，文件类型就是二进制类型。<br>
        这个例子中 action="https://jsonplaceholder.typicode.com/posts/"，选择图片后上传的类型就是二进制。可以打开控制台查看。上传时默认文件file可以通过name字段设置。
      </p>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        name="mFile"
        :auto-upload="true"
        :before-upload="beforeUpload" >
        <i class="el-icon-plus"></i>
      </el-upload>
      <p class="mar-tAb-20">
        2、通过组件回调方法可以获取到拥有raw属性的file对象，或者文件对象的raw属性，二者都可以转成二进制。<br>
        但是 on-success、on-progress 方法，只有在 action 定义接口并调用后才能获取到方法的回调参数以及文件对象的raw属性，可以转成二进制。<br>
        before-upload、on-change回调参数 file的raw值 可以通过 new Blob() 方法转成二进制文件流。<br>
        on-change 无论 action 是否定义接口都能获取到回调参数
      </p>
      <el-upload
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        accept=".jpg, .jpeg, .png"
        :auto-upload="true"
        :file-list="fileList"
        :before-upload="beforeUpload"
        :on-success="handleSuccess"
        :on-progress="handleProgress"
        :on-change="handleUploadChange" >
        <i class="el-icon-plus"></i>
      </el-upload>
      <div class="mar-top-20">
        <div class="mar-top-20">
          <el-button 
            type="primary" 
            @click="downloadFile('up')">下载 before-upload 转换的二进制文件</el-button>
          <el-button 
            type="primary" 
            @click="downloadFile('changeFile')">下载 on-change file 转换的二进制文件</el-button>
          <el-button 
            type="primary" 
            @click="downloadFile('changeFileRaw')">下载 on-change 的 raw 转换的二进制文件</el-button>
        </div>
      </div>
      <p class="mar-tAb-20">
        2、通过组件回调方法可以获取到拥有raw属性的file对象，或者文件对象的raw属性，二者都可以转成二进制。<br>
        但是 on-success、on-progress 方法，只有在 action 定义接口并调用后才能获取到方法的回调参数以及文件对象的raw属性，可以转成二进制。<br>
        before-upload、on-change回调参数 file的raw值 可以通过 new Blob() 方法转成二进制文件流。<br>
        on-change 无论 action 是否定义接口都能获取到回调参数
      </p>
      <el-upload
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        accept=".jpg, .jpeg, .png"
        :auto-upload="true"
        :file-list="fileList"
        :before-upload="beforeUpload"
        :on-success="handleSuccess"
        :on-progress="handleProgress"
        :on-change="handleUploadChange" >
        <i class="el-icon-plus"></i>
      </el-upload>
      <div class="mar-top-20">
        <div class="mar-top-20">
          <el-button 
            type="primary" 
            @click="downloadFile('up')">下载 before-upload 转换的二进制文件</el-button>
          <el-button 
            type="primary" 
            @click="downloadFile('changeFile')">下载 on-change file 转换的二进制文件</el-button>
          <el-button 
            type="primary" 
            @click="downloadFile('changeFileRaw')">下载 on-change 的 raw 转换的二进制文件</el-button>
        </div>
      </div>
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
      fileList:[],
      activeNames:'',
      dialogVisible: false,
      dialogImageUrl: "",
      upFile:{},
      changeFile:{},
      changeFileRaw:{}
    }
  },
  methods: {
    handlePictureCardPreview() {},
    handleRemove() {},
    /**
     * @name 王本灿
     * @introduction 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
     * @param {参数类型} file 选择的文件对象
     * @param {参数类型} fileList 当前组件的文件列表
     */
    
    handleUploadChange (file, fileList) {
      console.log('handleUploadChange - file, fileList', file, fileList)
      console.log('handleUploadChange - file.row', file.raw)
      const types = ['image/jpeg', 'image/jpg', 'image/png']
      const blob = new Blob([file], { type: file.raw.type })
      console.log('blob', blob)
      this.changeFile = {
        blob: blob,
        name: file.raw.name,
        file: file
      }
      this.changeFileRaw = {
        blob: file.raw,
        name: file.raw.name,
        file: file
      }
      // const formData = new FormData()
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
     * @introduction 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
     * @param {参数类型} file 上传的文件对象
     */
    beforeUpload(file){
      console.log('beforeUpload - file', file)
      const blob = new Blob([file], { type: file.type })
      console.log('blob', blob)
      this.upFile = {
        blob: blob,
        name: file.name,
      }
      const formData = new FormData()
      formData.append('multipartFile', blob)
      console.log('multipartFile', formData.get('multipartFile'))
    },
    /**
     * @name 王本灿
     * @introduction 文件上传成功时的钩子
     * @param {参数类型} file 选择的文件对象
     * @param {参数类型} fileList 当前组件的文件列表
     */
    handleSuccess (response, file, fileList) {
      console.log('handleSuccess - response', response)
      console.log('handleSuccess - file, fileList', file, fileList)
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
     * @introduction 文件上传时的钩子
     * @param {参数类型} file 选择的文件对象
     * @param {参数类型} fileList 当前组件的文件列表
     */
    handleProgress (event, file, fileList) {
      console.log('handleProgress - event', event)
      console.log('handleProgress - file, fileList', file, fileList)
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

<style></style>
