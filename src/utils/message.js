import { ElMessage } from 'element-plus'

const message = (type, message) => {
  ElMessage({ message, type })
}

export default message;