import { defineComponent, h, ref, onMounted } from 'vue'
import MyLoading from '@/components/MyLoading.vue'

export const useLoading = (WrappedComponent) => {

  return defineComponent(
    (props, { attrs }) => {
      const loading = ref(true);
      onMounted(() => {
        console.log(store)
        setTimeout(() => {
          loading.value = false;
        }, 1000);
      });
      
      return () => {
        return h('div', { class: 'loading-box' }, [
          h(MyLoading, { loading: loading }),
          h(WrappedComponent, { ...attrs }),
        ]);
      }
    }
  );
}