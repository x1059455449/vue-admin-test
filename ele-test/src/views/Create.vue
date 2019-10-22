<template>
<el-form ref="form" :model="acticle" label-width="80px" @submit.native.prevent="onSave">
  <el-form-item label="文章主题">
    <el-input v-model="acticle.name"></el-input>
  </el-form-item>
  <!-- <el-form-item label="活动区域">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="活动时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="即时配送">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="活动性质">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="特殊资源">
    <el-radio-group v-model="form.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item> -->
  <el-form-item label="文章内容">
    <el-input type="textarea" v-model="acticle.body"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" native-type="submit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>


<script>
  export default {
    data() {
      return {
        acticle: {}
      }
    },
    methods: {
      onSave() {
        console.log(this.acticle);
        this.$http.post("articles", this.article).then(res => {
        this.$message({
          message: "文章添加成功！",
          type: "success"
        });
        this.$router.push("/articles/list");//添加成功后跳转到文章列表页
        console.log(res.data);
      });
      }
    }
  }
</script>