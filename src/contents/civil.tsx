import React from 'react'
import '../App.css'; // この行を追加
import Grid from '@mui/material/Grid';

//土木
const Civil = () => {
  return (
    <div className="App">
      <Grid container>
        <Grid item>
      <h1>【土木工事業】</h1>
      <ul className="list">
  <li>総合的な企画・<span style={{ color: 'red', fontWeight: 'bold' }}>指導・調整のもとに</span>土木工作物を完成させる総合工事業</li>
  <li>地面に関わるさまざまなものの建設・修繕を行なう工事</li>
  <br/>
  <li>【代表的な工事】</li>
  <ul>
    <li>道路工事</li>
    <li>公道下等の下水道工事</li>
    <li>水路工事</li>
  </ul>
  <br/>

  <li>他の工事との違い</li>
  <ul>
    <li>公道下等の下水道の配管工事や下水処理場自体の敷地造成工事・・・「土木一式工事」<br/>
    <li>家屋やその他敷地内の配管工事、上水道等の排水小管を設置する工事・・・「管工事」</li>
    <li>上水道等の取水、浄水、配水等の施設や下水処理場内の処理設備を築造、設置する工事・・・「水道施設工事」</li>
</li>
  </ul>
</ul>

      </Grid>
      <Grid item>
      　　<img src="/images/civil1.jpeg" className="image"/>
      </Grid>
      </Grid>

    </div>
  )
}

export default Civil
