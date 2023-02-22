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
    };
  },
  methods: {
    handlePictureCardPreview() {},
    handleRemove() {},
  },
};
</script>

<style></style>
