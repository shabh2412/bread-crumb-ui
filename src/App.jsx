import React, { useEffect } from 'react';
import './App.css';

function App() {
  const breadcrumb_items = ["home", "products", "electronics", "laptops", "macbook air m2"];

  useEffect(() => {
    const new_list = breadcrumb_items?.filter(item => item?.length >= 5);
    console.log(new_list);
  }, []);

  return (
    <>
      <style>
        {
          `
        .breadcrumb-container {
          display: flex;
          justify-content: start;
          align-items: center;
          gap: 4px;
        }
        .breadcrumb-container > p {
          text-decoration: underline;
          color: #fafafa;
        }
        `
        }
      </style>
      <div className='breadcrumb-container'>
        {
          breadcrumb_items?.map((item, idx) => <React.Fragment key={`${item}-${idx}`} >
            <p >{item}</p>
            {(idx < breadcrumb_items?.length - 1) && ">"}
          </React.Fragment>
          )
        }
      </div>
    </>
  );
}

export default App;
