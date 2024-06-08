'use client'
import { categoryApi } from "@/until/apiService";
import { useEffect, useState } from "react";
interface Category{
  name: string,
  configurations: string[]
}
export default function Home() {
  const [data, setData] = useState<Category[]>([]);
  useEffect(() => {
    categoryApi("/","GET",{}).then((res:any)=>{
      if (res.status === 200) {
        setData(res.data.categories);
      }
    })
  }, []);
  return (
    <div>{data.map((item)=>{return <div key={item.name}>{item.name}</div>})}</div>
  );
}
