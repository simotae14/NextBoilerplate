import React from "react";
import Link from "next/link";

import Nav from './../components/Nav';
import posts from '../data/posts';

export default () => (
    <div>
        <Nav />
        <hr />
        <ul>
            {
                posts.map((post, index) => (
                    <li key={index}>
                        <Link
                            // maskered url
                            as={`/post/${index}`} 
                            href={{ pathname: '/second', query: { id: index } }}
                        >
                            <a>{ post.title }</a>
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
);