<script setup>
import { ref, reactive, onMounted } from "vue";
import ListItem from "./component/ListItem.vue";
import TableHead from "./component/TableHead.vue";
import HomeHead from "./component/HomeHead.vue";
import HomeSide from "./component/HomeSide.vue";
import draggable from "vuedraggable";

const sideOpen = ref(false);
const toggleSide = () => {
  sideOpen.value = !sideOpen.value;
};

const state = reactive({
  //需要拖拽的数据，拖拽后数据的顺序也会变化
  list: [
    { filename: "www.itxst.com", id: 0, filetype: 2, filesize: 10, folderid: 0, createTime: new Date(), isDel: 0 },
    { filename: "www.itxst.com", id: 2, filetype: 2, filesize: 10, folderid: 0, createTime: new Date(), isDel: 0 },
    { filename: "www.itxst.com", id: 3, filetype: 2, filesize: 10, folderid: 0, createTime: new Date(), isDel: 0 },
    { filename: "www.itxst.com", id: 0, filetype: 2, filesize: 10, folderid: 0, createTime: new Date(), isDel: 0 },
    { filename: "www.itxst.com", id: 2, filetype: 2, filesize: undefined, folderid: 0, createTime: new Date(), isDel: 0 },
    { filename: "www.itxst.com", id: 3, filetype: 2, filesize: 10, folderid: 0, createTime: new Date(), isDel: 0 },
    { filename: "www.itxst.com", id: 0, filetype: 2, filesize: 10, folderid: 0, createTime: new Date(), isDel: 0 },
    { filename: "www.itxst.com", id: 2, filetype: 2, filesize: 10, folderid: 0, createTime: new Date(), isDel: 0 },
    { filename: "www.itxst.com", id: 3, filetype: 2, filesize: 10, folderid: 0, createTime: new Date(), isDel: 0 },
  ],
});

//拖拽开始的事件
const onStart = () => {
  console.log("开始拖拽");
};

//拖拽结束的事件
const onEnd = () => {
  console.log("结束拖拽");
};
</script>
<template>
  <div class="itxst">
    <div class="home-page-content">
      <div class="home-head">
        <HomeHead :open="sideOpen" @toggleSide="toggleSide" />
      </div>
      <div class="home-table-wrap">
        <div class="table-bg">
          <!-- 
        /*
          draggable 对CSS样式没有什么要求万物皆可拖拽
          :list="state.list"         //需要绑定的数组
          ghost-class="ghost"        //被替换元素的样式
          chosen-class="chosenClass" //选中元素的样式
          animation="300"            //动画效果
          @start="onStart"           //拖拽开始的事件
          @end="onEnd"               //拖拽结束的事件
        */
       -->
          <div class="home-table-title">
            <TableHead />
          </div>
          <draggable :list="state.list" class="home-table" ghost-class="ghost" chosen-class="chosenClass" animation="300"
            :sort="false" @start="onStart" @end="onEnd">
            <template #item="{ element }">
              <ListItem :element="element" />
            </template>
          </draggable>
        </div>
      </div>
    </div>
    <div class="home-page-side" v-if="sideOpen" >
        <HomeSide />
    </div>
  </div>
</template>
<style scoped>
.itxst {
  min-width: 1000px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .home-page-side {
    height: 100%;
    min-width: 200px;
    width: 260px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .home-page-content {
    flex: 1;
    height: 100vh;
    display: flex;

    flex-direction: column;
    justify-content: space-between;
  }

  .home-head {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
  .home-table-wrap {
    width: 100%;
    padding: 10px;
    height: calc(100% - 80px);
    color: var(--item-text-color);

    .table-bg {
      width: 100%;
      height: 100%;
      background-color: var(--shell-color);
      box-shadow: -0.5px -0.5px 1px 1px var(--shadow-color),
        0.5px 0.5px 1px 1px var(--shadow-color);

      .home-table-title {
        padding: 20px;
        padding-bottom: 0;
      }
    }
  }

  .home-table {
    width: 100%;
    height: calc(100% - 95px);
    border-radius: 6px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;

    .download-resume {
      top: 20px;
      right: 50%;
      position: fixed;
      transform: translateX(50%);
    }

    /* Webkit浏览器（如Chrome、Safari） */
    &::-webkit-scrollbar {
      width: 0px;
    }

    &::-webkit-scrollbar-track {
      background: #b3c2e0;
    }

    /* Firefox浏览器 */
    &::-moz-scrollbar {
      width: 0px;
    }

    &::-moz-scrollbar-track {
      background: #f1f1f1;
    }

    /* IE浏览器 */
    &::-ms-scrollbar {
      width: 0px;
    }

    &::-ms-scrollbar-track {
      background: #f1f1f1;
    }
  }
}
</style>