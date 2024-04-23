<template>
  <div>
    <div class="component-des-box">
      <p class="component-des">form 表单</p>
      <!-- <p class="mar-bot-20">
        1、action参数直接定义好上传接口，直接使用el-upload组件上传文件，文件类型就是二进制类型。<br>
        这个例子中 action="https://jsonplaceholder.typicode.com/posts/"，选择图片后上传的类型就是二进制。可以打开控制台查看。上传时默认文件字段为file可以通过name字段设置。
      </p> -->
      <el-row>
        <el-col :span="10">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动时间" required>
              <el-col :span="11">
                <el-form-item prop="date1">
                  <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-form-item prop="date2">
                  <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="即时配送" prop="delivery">
              <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质" prop="type">
              <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源" prop="resource">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式" prop="desc">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-table :data="tableData">
        <el-table-column label="姓名" prop="name">
          <template slot-scope="scope">
            <!-- 自定义模板，处理第三行的情况 -->
            <template v-if="scope.$index === 2">
              <span>{{ scope.row.name }}</span>
              <el-table-column :label="''" width="50">
                <template slot-scope="subScope">
                  <!-- 第三行第二列的内容 -->
                  <span>{{ subScope.row.extraName1 }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="''" width="50">
                <template slot-scope="subScope">
                  <!-- 第三行第三列的内容 -->
                  <span>{{ subScope.row.extraName2 }}</span>
                </template>
              </el-table-column>
            </template>
            <template v-else>
              <!-- 正常情况下的列内容 -->
              {{ scope.row.name }}
            </template>
          </template>
        </el-table-column>

        <el-table-column label="年龄" prop="age"></el-table-column>
        <el-table-column label="地址" prop="address"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { saveBlobFileCus } from "@/utils/common";
export default {
  name: "ElUpLoad",
  data() {
    return {
      ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      },
      tableData: [
        { name: 'John', age: 28, address: 'New York' },
        { name: 'Doe', age: 22, address: 'Tokyo' },
        // 第三行，姓名列拆分成两列
        { name: 'Smith', extraName1: 'Extra1', extraName2: 'Extra2', age: 30, address: 'London' },
        // Add more data as needed
      ],
    }
  },
  methods: {
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
