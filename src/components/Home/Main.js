import React, { useEffect, useState } from 'react'
import axios from "../../utils/axios"

// --- components
import MainLeft from './MainLeft'
import MainRight from './MainRight'

function Main({ blogs }) {

    // let [blogs, setBlogs] = useState([])

    // useEffect(() => {
    //     axios
    //     .get(`/api/blogs`)
    //     .then((res) => {
    //       console.log(res);
    //       if (res.statusText === "OK") {
    //         let blog = res.data.payload.blogs;
    //         setBlogs(blog)
    //       }
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     });
    // }, [])

    return (
        < >
            <div className="col-span-6 lg:col-span-4 lg:pr-8 lg:border-r-2 ">
                <MainLeft blogs={blogs} />
            </div>
            <div className="hidden lg:block col-span-2 pl-8">
                <MainRight />
            </div>
        </>
    )
}

export default Main
