import { ref } from 'vue'

const loading = ref(true);
const setLoading = (value) => (loading.value = value);

export default {
  loading,
  setLoading
}