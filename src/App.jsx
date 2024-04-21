import { useEffect } from 'react';
import './App.css';
import Breadcrumb from './components/Breadcrumb';

function App() {
  const breadcrumb_items = ["home", "products", "electronics", "laptops", "macbook air m2"];

  useEffect(() => {
    const new_list = breadcrumb_items?.filter(item => item?.length >= 5);
    console.log(new_list);
  }, []);

  return (
    <div>
      <Breadcrumb breadcrumb_items={breadcrumb_items} />
    </div>
  );
}

export default App;
