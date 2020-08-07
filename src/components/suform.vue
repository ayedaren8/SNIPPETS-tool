<template>
  <el-form rules="form" ref="form" label-width="80px">
    <el-form-item label="part">
      <el-select v-model="form.part" size="mini" placeholder="请选择" >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-input v-model="form.alias" size='mini' placeholder="别名"></el-input>
    </el-form-item>
    <el-form-item label="name">
      {{fullname}}
    </el-form-item>
    <el-form-item label="prefix">
      <el-input v-model="form.prefix"></el-input>
    </el-form-item>
    <el-form-item label="body">
      <el-input type="textarea" v-model="form.body"></el-input>
    </el-form-item>
    <el-form-item label="description">
      <el-input v-model="form.description"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        prefix: "",
        body: "",
        description: "",
        checkOne:'',
        alias:''
      },
      options:[{lable:"选项一",value:"Basic"},
      {lable:"选项二",value:"Form"},
      {lable:"选项三",value:"Data"},
      {lable:"选项四",value:"Notice"},
      {lable:"选项五",value:"Navigation"},
      {lable:"选项六",value:"Others"},
      ]
    };
  },
  computed: {
    fullname(){
        return this.form.part+':'+ this.form.alias
    }
    
  },
  methods: {
    onSubmit() {
      this.form.name=this.form.part+':'+ this.form.alias
      this.$emit('snip-data',this.form)
    },
  },
};
</script>

<style>
</style>