import { connectToDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest){
    const {postId} = await req.json();

    console.log(postId);
    
    const { db } = await connectToDatabase();

    try {
        await db?.collection('all').updateOne(
          { _id: postId },
          { $inc: { clickcount: 1 } }
        );
    
        return NextResponse.json({message:"Update successfully"},{status:200});
      } catch (error) {
        console.error('Error updating clicks:', error);
        return NextResponse.json({error:"Failed to update"},{status:500});
      }
}