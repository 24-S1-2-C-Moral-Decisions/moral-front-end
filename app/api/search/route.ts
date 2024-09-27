import axios from "axios";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const topic = searchParams.get("topic") || 'all';
    const keywords = searchParams.get("keywords") || '';
    const response = await axios.get(`${process.env.BACKEND_URL}/search`, {
        params: {
            topic: topic,
            keywords: keywords,
        }
    })

    return new Response(JSON.stringify(response.data), { status: 200 })
}