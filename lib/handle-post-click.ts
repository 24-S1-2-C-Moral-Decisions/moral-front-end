import { useRouter } from "next/navigation";

export async function HandlePostClick(postId:string) {

    try {
        await fetch('/api/updateClicks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ postId }),
        });

    } catch (error) {
        console.error('Failed to update clicks:', error);
    }
}