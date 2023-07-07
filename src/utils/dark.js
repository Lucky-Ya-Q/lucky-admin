import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark({
  disableTransition: false // 开启过渡动画
})

export const toggleDark = useToggle(isDark)
