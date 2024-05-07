import React from 'react'
import '../App.css'; // この行を追加
import Grid from '@mui/material/Grid';

const Jumping = () => {
  return (
    <div className="App">
      <Grid container>
        <Grid item>
      <h1>とび・土工工事業</h1>
      <ul className="list">
        <li>総合的な企画、指導、調整のもとに建築物を建設する工事</li>
        <li>基本的に一式工事とされる大規模、複雑な工事等が該当</li>
        <li>電気工事、管工事、内装仕上工事等の単一工事であっても、<br/>工事の規模、複雑性等からみて個別の専門工事として<br/>施工することが困難なものは建築一式工事に含まれる</li>
        <li></li>
      </ul>
      </Grid>
      <Grid item>
      　　<img src="/images/dummy.jpg" className="image"/>
      </Grid>
      </Grid>

    </div>
  )
}

export default Jumping
