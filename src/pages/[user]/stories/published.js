import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "../../../utils/axios"
import { useRouter } from 'next/router'
import { useDispatch } from "react-redux";
import * as actionCreators from "../../../utils/redux/actionCreators"

import Stories from "../../../components/Stories";
import Menus from "../../../components/Stories/Menu";




function Published({ blogs, drafts }) {
    const router = useRouter()
    const dispatch = useDispatch()
    const [path, setPath] = useState("")
   
    useEffect(() => {
      dispatch(actionCreators.setDrafts(drafts))
      dispatch(actionCreators.setPublished(blogs.length))
        let tempPath = router.asPath.split("/")
        setPath(tempPath[tempPath.length - 1])
    }, [])


  return (
    <Stories path={path}>
  
        <ul>
          {blogs.map((blog, idx) => {
            if(!blog.draft) {
              return (
                <li kre={idx} className="py-4 border-b-2">
            <h3 className="text-xl font-semibold"> {blog.title} </h3>
            <h5 className="text-truncate text-lg text-gray-400">
              {blog.preview}
            </h5>
            <div className="flex gap-4 items-center text-truncate text-base text-gray-400 mt-2">
              <p>Last edited: 5 days ago · 1 min read so far</p>
              <Menus>
                <li className="px-4 py-2">
                  <Link href={`/edit?type=p&id=${blog._id}`}>
                    <a>
                      <span className="text-gray-500 hover:text-black ">
                        Edit draft
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="px-4 py-2">
                  <Link href="#">
                    <a>
                      <span className="text-gray-500 hover:text-black ">
                        Delete draft
                      </span>
                    </a>
                  </Link>
                </li>
              </Menus>
            </div>
          </li>
              )
            }
          })}
          
        </ul>
    </Stories>
  );
}

export async function getServerSideProps(context) {
  try {

    let blogs = await axios.get(`/api/blogs`).then((res) => {

      if (res.statusText === "OK") {
        let blogs = [];
        let drafts = 0
        res.data.payload.blogs.map(blog => {
          if(!blog.draft) {
            blogs.push(blog)
          }else {
            drafts++
          }
        })
    
        return {blogs, drafts}
      }
    });

    return {
      props: {
        ...blogs

      }, // will be passed to the page component as props

    };
  } catch (err) {
    console.log(err);
    return { notFound: true };
  }
}



export default Published;
