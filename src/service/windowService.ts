import { WebviewWindow, WindowOptions } from '@tauri-apps/api/window'

//默认窗口参数
const defaultWindowOptions = { minHeight:400, minWidth:300, focus: true,decorations: false}

/**
 * 打开新的窗口
 */
export const openNewWindow = async (options:WindowOptions) => {
    options = {...defaultWindowOptions,...options}
    new WebviewWindow('theUniqueLabel', options)
}