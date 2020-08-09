<template>
  <div>
    <el-container>
      <el-container>
        <el-header height>
          <!-- Header content -->
          <input type="file" @change="handleFile($event)" />
          <el-button type="danger" @click="delAll">删除缓存</el-button>
        </el-header>
        <el-main>
          <el-row justify="space-around" type="flex">
            <el-col :span="6">
              <el-panel title="操作栏">
                <el-block header>
                  <suform @snip-data="snipData"></suform>
                </el-block>
              </el-panel>
              <el-panel title="展示">
                <showContent :snipData="snipMessgae"></showContent>
              </el-panel>
            </el-col>
            <el-col :span="14">
              <contentList @del-snip="handleDel" :snippets="snippetsList"></contentList>
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
import contentList from "@/components/contentList.vue";
export default {
  components: {
    suform,
    showContent,
    contentList,
  },
  data() {
    return {
      snipMessgae: "",
      snippetsList: [],
    };
  },
  computed:{
  },
  created() {
    let flag=this.Storage.get("snippetsList")
    console.log(flag);
    if (this.Storage.get("snippetsList") === null) {
      this.Storage.set("snippetsList", []);
    }
    //读缓存
    this.snippetsList = this.Storage.get("snippetsList");
  },
  mounted() {},
  methods: {
    snipData(data) {
      this.snipMessgae = JSON.stringify(data, undefined, 2);
      this.snippetsList.push(data);
      this.Storage.set("snippetsList", this.snippetsList);
    },
    handleDel(e) {
      console.log(e);
      this.snippetsList.forEach((item,index)=>{
          if (item['name']===e) {
            console.log('yes'+item['name']+index);
            this.snippetsList.splice(index,1)
          }
      })
     this.Storage.set("snippetsList", this.snippetsList);
    },
    handleFile(event) {
      let file = event.target.files[0];
      console.log("handelfile");
      let flieType = file.name.split(".").slice(-1)[0];
      if (flieType !== "json") {
        alert("只支持上传json文件");
        return;
      }
      this.readFile(file);
    },
    readFile(file) {
      var _this = this;
      const reader = new FileReader();
      // 读取文件
      reader.readAsText(file, "UTF-8");
      // 读取完文件之后会回来这里
      reader.onload = function (e) {
        const fileString = e.target.result;
        _this.snippetsList = _this.snippetsList.push.apply(_this.snippetsList,_this.snippetToArr(JSON.parse(fileString)))
        console.log(_this.snippetsList);
        _this.Storage.set('snippetsList',_this.snippetsList)
      };
    },
    snippetToArr(data) {
      const keys = Object.keys(data);
      const result = keys.map((it) => {
        return {
          name: it,
          prefix: data[it]["prefix"],
          body: data[it]["body"],
          description: data[it]["description"],
        };
      });
      console.log(result);
      return result;
    },
     delAll() {
      console.log(this.snippetsList.length-1);
      // this.snippetsList.splice(0,this.snippetsList.length-1)
      this.Storage.remove("snippetsList");
     
      this.$forceUpdate()
    },
  },
};
</script>

<style>
</style>