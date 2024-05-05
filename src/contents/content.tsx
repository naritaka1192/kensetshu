import React from 'react'
import '../App.css'; // この行を追加
import Grid from '@mui/material/Grid';

const Content = () => {
  return (
    <div className="App">
      <Grid container>
        <Grid item>
      <h1>【表題】</h1>
      <ul className="list">
        <li>こういう事がやりたい</li>
        <li style={{color:'red',fontWeight:'bold'}}>fafafa</li>
        <li>だができない</li>
        <li>だができない</li>

      </ul>
      </Grid>
      <Grid item>
      　　<img src="/images/dummy.jpg" className="image"/>
      えいえいおー

      </Grid>
      </Grid>

    </div>
  )
}

export default Content
