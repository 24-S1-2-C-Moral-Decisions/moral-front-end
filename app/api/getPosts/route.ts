import { connectToDatabase } from "@/lib/connectDB";

const POSTS_PER_PAGE = 10;

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const { db } = await connectToDatabase();

    const page = searchParams.get("page") || '1';
    const topic = searchParams.get("topic") || 'all';
    const skip = (parseInt(page as string) - 1) * POSTS_PER_PAGE;

    // fetch new posts according to page and topic
    const data = await db
        .collection(topic)
        .find({})
        .sort({ num_comments: -1 })
        .skip(skip)
        .limit(POSTS_PER_PAGE)
        .toArray();

    // filter out irrelevant data
    const posts = data.map((post) => ({
        title: post.title,
        selftext: post.selftext,
        verdict: post.verdict,
        isExpand: false,
        assholeNumber: post.YTA,
        notAssholeNumber: post.NTA,
    }));

    return new Response(JSON.stringify(posts), { status: 200 });
}