import React from "react";
import {ArrowFatDown, ArrowFatUp, ChatTeardrop} from "@phosphor-icons/react";


export interface CardProps  {
  user: {
    postComment: string;
    postTitle: string;
    name: string;
    avatar: string;
  };
  videoUrl?: string;
  meta: {
    date: string;
    likes: number;
    comments: number;
    downVotes: number;
  }
}

const Card: React.FunctionComponent<CardProps> = (
  {
    user,
    videoUrl,
    meta
  }
) => {
  return (
    <div
      className="w-full h-auto min-h-[8.2rem] cursor-pointer rounded bg-white/10 hover:bg-gradient-to-br from-blue-400 to-blue-600 duration-300 transition-all text-white p-0.5">
      <div className="h-full w-full bg-[#011019] rounded p-8">
        <div>
          <div className="flex flex-row gap-4">
            <div className="w-14 h-14 rounded-full bg-blue-400 flex items-center justify-center font-bold text-2xl">
              M
            </div>
            <div className="flex flex-col">
              <div>
                <h1 className="font-bold text-2xl">{user.name}</h1>
                <p className="text-xs opacity-50 mb-2">{meta.date}</p>
                <h1 className="opacity-50">{user.postComment}</h1>
              </div>
              <div className="w-auto flex gap-2 mt-4">
                <div className="flex gap-1">
                  <ArrowFatUp size={22} className="opacity-50"/>
                  <p className="opacity-30">{meta.likes}</p>
                </div>
                <div className="flex gap-1">
                  <ArrowFatDown size={22} className="opacity-50"/>
                  <p className="opacity-30">{meta.downVotes}</p>
                </div>
                <div className="flex gap-1">
                  <ChatTeardrop size={22} className="opacity-50"/>
                  <p className="opacity-30">{meta.comments}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {videoUrl && (
          <div className="h-80 w-full rounded bg-white/10 flex items-center justify-center mt-4">
            <p className="text-sm font-bold opacity-50">Video</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card;
