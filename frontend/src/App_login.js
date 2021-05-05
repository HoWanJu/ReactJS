import { useState } from 'react';

function App() {

  let [IsLoggedIn, SetIsLoggedIn] = useState(false);
  // 設定IsLoggedIn為我們要設置的狀態，SetIsLoggedIn為更新IsLoggedIn的方法

  const login = () => {
    SetIsLoggedIn(true);
  };

  const logout = () => {
    SetIsLoggedIn(false);
  };

  if (IsLoggedIn){
    return (
      <div>
        <div>歡迎使用者</div>
        <button onClick = {logout}>登出</button>
      </div>
    )
  }
  else{
    return(
      <div>
          <div>尚未登入</div>
          <button onClick = {login}>登入</button>
      </div>
    )
  }
}

export default App;
