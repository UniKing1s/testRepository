'use client'
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
const Page = () => {
    const [favorite, setFavorite] = useState(false);
    return (
        <div className="flex justify-center items-center h-screen w-full">
            <button onClick={() => setFavorite(!favorite)}>
                {favorite ? <AiFillHeart size={30} /> : <AiOutlineHeart size={30} />}
            </button>
        </div>
    );
}

export default Page;
