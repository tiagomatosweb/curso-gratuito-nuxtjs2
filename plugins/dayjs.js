import dayjs from 'dayjs'

export default (context, inject) => {
  inject('dayjs', dayjs)
}
