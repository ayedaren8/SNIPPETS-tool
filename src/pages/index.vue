<template>
  <div>
    <el-container>
      <el-container>
        <el-header height>
          <!-- Header content -->
        </el-header>
        <el-main>
          <el-row justify="space-between" type="flex">
            <el-col :span="12" >
              <el-panel title="操作栏">
                <el-block header=""><suform @snip-data="snipData" ></suform></el-block>
              </el-panel>
            </el-col>
             <el-col :span="10" >
              <el-panel title="展示">
              <showContent :snipData='snipMessgae'></showContent>
              </el-panel>
            </el-col>
          </el-row>

          
          <!-- Main content -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import suform from "@/components/suform.vue";
import showContent from "@/components/showContent.vue";
export default {
  components: {
    suform,
    showContent
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      snipMessgae:''
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    snipData(data){
      console.log(data.name);
      
      this.snipMessgae=JSON.stringify(data,undefined,2)
      console.log(this.snipMessgae);

    }
  },
};
</script>

<style>
</style>