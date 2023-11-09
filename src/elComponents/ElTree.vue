<template>
  <div class="">
    <!-- <el-row>
      <el-col :span="6"> -->
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
    <div>
      <div class="" v-for="(item, idx) in list" :key="idx">
        <div v-for="(ele, index) in item.children" :key="index">
          <el-checkbox v-model="ele.judge">{{ ele.name }}</el-checkbox>
        </div>
      </div>
    </div>
    <!-- </el-col>
    </el-row> -->
  </div>
</template>

<script>
export default {
  name: "ElUpLoad",
  data() {
    return {
      dialogVisible: false,
      dialogImageUrl: "",
      list: [
        {
          name: "111",
          judge: true,
          children: [
            {
              name: "x1",
              judge: false,
            },
            {
              name: "x2",
              judge: true,
            },
          ],
        },
        {
          name: "222",
          judge: false,
          children: [
            {
              name: "y1",
              judge: false,
            },
            {
              name: "y2",
              judge: false,
            },
          ],
        },
        {
          name: "333",
          judge: true,
          children: [
            {
              name: "z1",
              judge: true,
            },
            {
              name: "z2",
              judge: true,
            },
          ],
        },
      ],
    };
  },
  methods: {
    handlePictureCardPreview() {},
    handleRemove() {},
  },
};
</script>

<style></style>
