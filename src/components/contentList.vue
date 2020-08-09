<template>
  <el-table :data="snippets_" style="width: 100%">
    <el-table-column prop="name" label="名字" width="180"></el-table-column>
    <el-table-column prop="prefix" label="前缀" width="180"></el-table-column>
    <el-table-column prop="body" label="主体" width="320"></el-table-column>
    <el-table-column prop="description" label="描述"></el-table-column>
     <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text danger" size="small">删除</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: { snippets: Array },
  data() {
    return {
      snippets_: this.snippets,
    };
  },
  computed: {
   
  },
  created() {},
  mounted() {
    console.log(this.snippets_);
  },
  methods: {
      handleClick(e){
          console.log(e);
          this.$emit('del-snip',e.name)    
      }

  },
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.card-header {
  display: flex;
  align-items: center;
}
</style>