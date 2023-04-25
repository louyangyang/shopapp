import style from './index.module.less'

import { NoticeBar } from '@nutui/nutui-react'
import '@nutui/nutui-react/dist/style.css'
const index = () => {
    const text = '关于防诈骗的温馨提醒，我们不会以任何理由要求您退款，请提高警惕'
    return (
        <div className={style.text}>
            <NoticeBar
                text={text}
                scrollable={true}
                leftIcon="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png"
            />
        </div>

    )
}
export default index
