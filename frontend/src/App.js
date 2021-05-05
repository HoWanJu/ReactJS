import axios from 'axios';
import { useState,  useEffect} from 'react';
import React from 'react';
import {Bar} from 'react-chartjs-2';

function App() {

    const [LRT, setLRT] = useState([]);
    const [LRT1, setLRT1] = useState([]);
    const [LRT2, setLRT2] = useState([]);

        useEffect(() => {
            //當頁面載入完成後自動執行
            fetchData();
        }, []); //後方[]可以加入某事件，也就是執行完某事件後才開始自動執行(但此處因為一載入頁面就要執行，所以為空的[])
    
        const fetchData = () => {
            axios.get('https://data.kcg.gov.tw/dataset/6f29f6f4-2549-4473-aa90-bf60d10895dc/resource/30dfc2cf-17b5-4a40-8bb7-c511ea166bd3/download/lightrailtraffic.json')
            .then((res) => {
                console.log(res.data);
                setLRT(res.data.slice(0,12));//抓出前12筆資料
                setLRT1(res.data.slice(12,24));//抓出中12筆資料
                setLRT2(res.data.slice(24,36));//抓出最後幾筆筆資料
            });
        };

    const data = {
        labels: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
        datasets: [
          {
            label: '107年輕軌日均運量',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: LRT.map(s => (s['日均運量']))
          }, 
          {
            label: '108年輕軌日均運量',
            backgroundColor: 'rgba(99,132,255,0.2)',
            borderColor: 'rgba(99,132,255,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(99,132,255,0.4)',
            hoverBorderColor: 'rgba(99,132,255,1)',
            data: LRT1.map(s => (s['日均運量']))
          }, 
          {
            label: '109年輕軌日均運量',
            backgroundColor: 'rgba(60, 179, 113,0.2)',
            borderColor: 'rgba(60, 179, 113,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(60, 179, 113,0.4)',
            hoverBorderColor: 'rgba(60, 179, 113,1)',
            data: LRT2.map(s => (s['日均運量']))
          }
        ]
      };

    
  return (
    <div>
        <h2><center>107~109年輕軌日均運量</center></h2>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: true,
            responsive: true,
          }}
        />

    </div>


  );
}
export default App;

// function App(){
//     const [LRT, setLRT] = useState([]);

//     useEffect(() => {
//         //當頁面載入完成後自動執行
//         fetchData();
//     }, []); //後方[]可以加入某事件，也就是執行完某事件後才開始自動執行(但此處因為一載入頁面就要執行，所以為空的[])

//     const fetchData = () => {
//         axios.get('https://data.kcg.gov.tw/dataset/6f29f6f4-2549-4473-aa90-bf60d10895dc/resource/30dfc2cf-17b5-4a40-8bb7-c511ea166bd3/download/lightrailtraffic.json')
//         .then((res) => {
//             console.log(res.data);
//             setLRT(res.data.slice(0,12));//抓出前12筆資料
//         });
//     };

//  return(
//  <div>

//      {/* <button onClick = {fetchData}>取得資料</button> */}
//      <ul> 
//          {/* JS的陣列若為空會是true */}
//          {LRT.length?(
//             LRT.map(s => (
//             <li>{s['年']} / {s['月']} ：日均運量{s['日均運量']}</li>
//             ))
//          ) : (<div>Loading...</div>)}
//      </ul>

//  </div>
// )
 
// }
// export default App;

