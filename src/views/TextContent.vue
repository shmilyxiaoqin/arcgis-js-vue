<template>
    <div class="text-content">
        <test-text></test-text>
    </div>
</template>

<script>
    import TestText from "../components/textContent/TestText";

    export default {
        name: "textcontent",
        components: {TestText},
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .text-content {
        width: 700px;
        margin: auto;
  /*      border: 1px solid #42b983;*/
        height: 700px;
        /*居中*/
        /*高度自定义*/
        /*宽度确定*/

    }
</style>