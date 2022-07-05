import './scss/base.css';
import './scss/app.scss';

import React, { useEffect, useState  } from 'react'
import { getRecommends, getRank  } from './backend/index'

function App() {
  const [ recommendList, setRecommendList ] = useState([])
  const [ rankList, setRankList ] = useState([])

  // 获取推荐列表
  const getRecommendList = async () => {
    const res = await getRecommends()
    if (res.data) {
      setRecommendList(res.data)
    }
  }

  useEffect(() => {
    getRecommendList()
  }, [])

  // 推荐列表
  const recommendListItems = recommendList.map((item) =>
     (<div className='item' key={item.id}>
      <div style={{backgroundImage: `url("${item.cover}")`}} className='item-top'>
        <div className='item-top-num'>
            <i className='iconfont icon-heart-fill'></i>
            {item.collect}
        </div>
      </div>
      <div className='item-bt'>
        <img src='https://nft.mangyang.com/files/0e125e3c9e07f80bb32128475f17e63f.jpg' alt='logo' className='item-bt-logo'/>
        <div className='item-bt-name'>
          {item.name} <i className='iconfont  icon-verified'></i>
        </div>
        <div className='item-bt-money'>
        ¥ {item.amount}
        </div>
      </div>
    </div>)
  );


  // 获取榜单列表
  const getRankList = async () => {
    const res = await getRank()
    if (res.data) {
      setRankList(res.data)
    }
  }

  useEffect(() => {
    getRankList()
  }, [])

  // 榜单列表
  const rankListItems = rankList.map((item, index) => (
    <div className='item'>
      <div className='item-left'>
        <i className='item-num'>{index + 1}</i>
        <div className='item-con'>
          <div className='item-avatar' style={{backgroundImage: `url("${item.cover}")`}}></div>
          <div className='item-info'>
            <div className='item-name'>
              {item.name}
            </div>
            <div className='item-money'>
              地板 ¥{item.low}
            </div>
          </div>
        </div>
      </div>
      <div className='item-right'>
        <div className='item-right-percent'>+{item.range}</div>
        <div className='item-right-count'>量 ¥{item.pond}</div>
      </div>
    </div>
  ))

  return (
    <div className='app'>
      <header className='app-header w-full flex items-center'>
        <img className='app-header-logo' src='https://mangyang.com/static/img/logo.e4a996db.png' alt='logo'/>
        <h1 className='app-header-title'>茫洋</h1>
      </header>

      <section className='recommend'>
        <div className='subheader-header'>
          <h2 className='subheader-header-title'>青睐之光</h2>
          <a className='subheader-header-right' href='https://www.baidu.com'>
            今日
            <i className='iconfont icon-jinrujiantouxiao'></i>
          </a>
        </div>
        <div className='recommend-list'>
          {recommendListItems}
        </div>
      </section>

      <section className='rank'>
        <div className='subheader-header'>
          <h2 className='subheader-header-title'>热力排行</h2>
          <a className='subheader-header-right' href='https://www.baidu.com'>
            今日
            <i className='iconfont icon-jinrujiantouxiao'></i>
          </a>
        </div>

        <div className='rank-list'>
          {rankListItems}
        </div>
      </section>
    </div>
  );
}

export default App;
