import React from 'react'
import '../App.css'; // この行を追加
import Grid from '@mui/material/Grid';

//土木
const Buildass = () => {
  return (
    <div className="App">
      <Grid container>
        <Grid item>
      <h1>【建築一式工事業】</h1><span><img src="buildass.jpg" alt="建築工事一式"/></span>
   
      <ul className="list">
  <li><span style={{ color: 'red', fontWeight: 'bold' }}>総合的な企画、指導、調整</span>のもとに建築物を建設する工事</li>
  <li>元請業者の立場で、<span style={{ color:'red', fontWeight:'bold' }}>複数の下請業者</span>を管理して施工する大規模で複雑な工事</li>
  <h2>建築一式工事業の例</h2>
  <ul>
    <li>戸建新築工事</li>
    <li>共同住宅新築工事</li>
    <li>ビル新築工事</li>
    <li>商業施設新築工事</li>
    <li>建築確認を要する増改築工事</li>
    <li><span style={{color:'red',fontWeight:'bold'}}>複数の建設関連専門工事が重複する場合<br/>
    主たる工事が特定できない場合も建設一式工事とする事も可</span></li>
  </ul>
</ul>
      </Grid>
      <Grid item>
        <ul>TABMECの工事例</ul>
        <li>休憩所新設工事</li>
        <li>建屋新設工事</li>
      </Grid>
      </Grid>

    </div>
  )
}

export default Buildass
