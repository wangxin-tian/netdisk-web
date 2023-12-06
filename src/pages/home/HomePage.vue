<script setup>
import { ref, reactive, onMounted } from "vue";
import ListItem from "./component/ListItem.vue";
import TableHead from "./component/TableHead.vue";
import HomeHead from "./component/HomeHead.vue";
import HomeSide from "./component/HomeSide.vue";
import ImageFloat from "@/components/ImageFloat.vue";
import draggable from "vuedraggable";
import { select, selectWithMsg } from '@/utils/crud.js';
import { selectFiles, selectFolders, playFile } from '@/service/api.js';
import { dispatchPlay, dispatchDownload } from '@/utils/tool.js'
import { useStore } from "vuex";
import { useRouter } from "vue-router";
// import { image } from "html2canvas/dist/types/css/types/image";

const sideOpen = ref(true);
const urlList = ref([]);
const imageState = reactive({
  url: '', name: '', visible: false
});

const urlListPush = i => urlList.value.push(i);
const urlListPop = _ => urlList.value.pop();
const returnRoot = _ => {
  openFolder();
  urlList.value = []
};

const toggleSide = () => { sideOpen.value = !sideOpen.value; };
const openSide = () => { sideOpen.value === false && (sideOpen.value = true)};
const openImage = (url, name) => {
  imageState.url = url;
  imageState.name = name;
  imageState.visible = true;
};
const closeImage = () => (imageState.visible = false);

const state = reactive({ list: [], /*需要拖拽的数据，拖拽后数据的顺序也会变化*/ });

//拖拽事件
const onStart = () => { console.log("开始拖拽"); };
const onEnd = () => { console.log("结束拖拽"); };

const store = useStore();
const router = useRouter();

const runFilesAsync = select(selectFiles);
const runFoldersAsync = select(selectFolders);

const openFolder = async (id = 0) => {
  const list = await Promise.all([
    runFoldersAsync({
      userid: store.getters.getUserid, id
    }),
    runFilesAsync({
      userid: store.getters.getUserid, folderid: id
    }),
  ]);

  if (list?.length > 0) {
    state.list = list.flat().map(i => {
      const pre = i.folderName | i.filename;
      const suffix = i.id;
      i.key = `${pre}_${suffix}`;
      return i;
    });
  }
}

const openFile = async (params) => {
  dispatchPlay(params.filetype, { store, router, params, openSide, openImage });
};

const downloadFile = async (params) => dispatchDownload(params);

const init = async () => openFolder();

onMounted(init);
</script>
<template>
  <div class="itxst">
    <div class="home-page-content">
      <div class="home-head">
        <HomeHead :urlList="urlList" :open="sideOpen" @toggleSide="toggleSide" @openFolder="openFolder"
          @returnRoot="returnRoot" @popUrl="urlListPop" />
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
          <draggable :list="state.list" item-key="key" class="home-table" ghost-class="ghost" chosen-class="chosenClass"
            animation="300" :sort="false" @start="onStart" @end="onEnd">
            <template #item="{ element }">
              <ListItem :element="element" @openFolder="openFolder" @pushUrl="urlListPush" @openFile="openFile" @downloadFile="downloadFile"/>
            </template>
          </draggable>
        </div>
      </div>
    </div>
    <div class="home-page-side" v-show="sideOpen">
      <HomeSide />
    </div>
    <ImageFloat :visible="imageState.visible" :url="imageState.url" @closeImage="closeImage"/>
    <!-- <el-dialog v-model="imageState.visible" :title="imageState.name" width="60%" top="5%" draggable>
      <img :src="imageState.url" :alt="imageState.name" class="image-view">
    </el-dialog> -->
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

  .image-view {
      width: 100%;
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
      width: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background: #b3c2e0;
    }
  }
}
</style>