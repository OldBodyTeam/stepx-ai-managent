"use client";
import dynamic from "next/dynamic";
import { EditorContentProps } from "./Editor";
import { FC } from "react";
const Editor = dynamic(() => import("./Editor"), {
  ssr: false,
});
const EditorPreview: FC<EditorContentProps> = (props) => {
  return (
    <div className="p-16 rounded-16 bg-FFFFFF mb-24 min-h-400">
      <Editor {...props} />
    </div>
  );
};
export default EditorPreview;
