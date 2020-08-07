<template>
  <el-block header-border>
    <template slot="header">这是头部</template>
    <p id="foo">{{snipData}}</p>
    <el-button
      data-clipboard-action="cut"
      data-clipboard-target="#foo"
      class=".btn"
      type="primary"
      @click="copyData"
    >复制到剪贴版</el-button>
  </el-block>
</template>

<script>
export default {
  props: ["snipData"],
  data() {
    return {};
  },
  methods: {
    copyData() {
      var clipboard = new ClipboardJS(".btn");
      clipboard.on("success", function (e) {
        console.info("Action:", e.action);
        console.info("Text:", e.text);
        console.info("Trigger:", e.trigger);
        e.clearSelection();
      });
      clipboard.on("error", function (e) {
        console.error("Action:", e.action);
        console.error("Trigger:", e.trigger);
      });
      console.log("6666");
    },
  },
};
</script>

<style>
</style>