// fetchPosts.js
import { db } from '../../../../firebase/config';
import { collection, query, getDocs } from "firebase/firestore";

export async function fetchPosts() {
    const q = query(collection(db, "posts"));
    const querySnapshot = await getDocs(q);
    const postsData = querySnapshot.docs.map(doc => doc.data());
    return postsData.map((post) => ({
        slug: post.slug,
    }));
}
