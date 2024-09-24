/* eslint-disable @next/next/no-img-element */
import { db } from '../../../../firebase/config';
import { collection, query, getDocs } from "firebase/firestore";
// Import the fetchPosts function for static generation
import { fetchPosts } from './fetchPosts';
import Trending from '../../components/Trending';
import PostDetails from '../../components/PostDetails'


export async function generateStaticParams() {
    const postSlugs = await fetchPosts();
    return postSlugs;
}

export default function Page({ params }) {

  return (
    <PostDetails params={params} />
  );
}
