import React from 'react'
import CpnBlockContainer from 'components/CpnBlockContainer'
import CpnNoteCard from 'components/CpnNoteCard'
import style from './NotifyMain.module.less'
import timeParser from 'utils/timeParser'

const testList = new Array(10).fill(0)

const NotifyMain: React.FC = (props) => {
  return (
    <CpnBlockContainer
      transStyle={{ flex: 1, display: 'flex', flexDirection: 'column' }}
    >
      <div className={style['noteList']}>
        {testList.map((_, index) => (
          <CpnNoteCard
            title="你好"
            tag="2022"
            time={timeParser(+new Date())}
            content="简单的标题"
            editable
            bottomGup
            key={index}
          />
        ))}
      </div>
    </CpnBlockContainer>
  )
}

export default NotifyMain
