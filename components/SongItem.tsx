"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import PlayButton from "./PlayButton";

interface SongItemProps {
    data: Song;
    onClick: (id: string) => void;
}

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
    const imagePath = useLoadImage(data);
  return (
    <div className="flex flex-col group relative rounded-md overflow-hidden items-center justify-center gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 p-3 transition" onClick={() => onClick(data.id)}>
      <div className="aspect-square h-full w-full rounded-md overflow-hidden relative">
        <Image className="object-cover" src={imagePath || "/images/liked.png"} fill alt="Image" />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{data.title}</p>
        <p className="pb-4 text-neutral-400 text-sm w-full truncate">By {data.author}</p>
      </div>
      <div className="absolute bottom-24 right-5">
        <PlayButton />
      </div>
    </div>
  )
}

export default SongItem
