import React, { useEffect, useState } from "react";
import Link from "next/link";
import Stories from "../../../components/Stories";
import Menus from "../../../components/Stories/Menu";
import { useRouter } from 'next/router'



function Published() {
    const router = useRouter()
    const [path, setPath] = useState("")
   
    useEffect(() => {
        let tempPath = router.asPath.split("/")
        setPath(tempPath[tempPath.length - 1])
    }, [])


  return (
    <Stories path={path}>
        {console.log(path)}
        <ul>
          <li className="py-4 border-b-2">
            <h3 className="text-xl font-semibold"> title </h3>
            <h5 className="text-truncate text-lg text-gray-400">
              {" "}
              some text text{" "}
            </h5>
            <div className="flex gap-4 items-center text-truncate text-base text-gray-400 mt-2">
              <p>Last edited: 5 days ago · 1 min read so far</p>
              <Menus>
                <li className="px-4 py-2">
                  <Link href="#">
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
          <li className="py-4 border-b-2">
            <h3 className="text-xl font-semibold"> title </h3>
            <h5 className="text-truncate text-lg text-gray-400">
              {" "}
              some text text{" "}
            </h5>
            <div className="flex gap-4 items-center text-truncate text-base text-gray-400 mt-2">
              <p>Last edited: 5 days ago · 1 min read so far</p>
              <Menus>
                <li className="px-4 py-2">
                  <Link href="#">
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
        </ul>
    </Stories>
  );
}

export default Published;
