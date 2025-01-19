"use client";

import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import { useState, useEffect, FC } from "react";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import {
  // DomEditor,
  IDomEditor,
  IEditorConfig,
  IToolbarConfig,
  i18nChangeLanguage,
} from "@wangeditor/editor";
import { uploadNoLimitCreateAction } from "@/app/(home)/[userId]/settings/actions";
export interface EditorContentProps {
  value?: string;
  onChange?: (value: string) => void;
}
i18nChangeLanguage("en");
const EditorContent: FC<EditorContentProps> = (props) => {
  const { value = "", onChange } = props;
  const [editor, setEditor] = useState<IDomEditor | null>(null); // TS 语法
  // useEffect(() => {
  //   if (editor == null) return;
  //   const toolbar = DomEditor.getToolbar(editor);

  //   const curToolbarConfig = toolbar?.getConfig();
  //   console.log(curToolbarConfig?.toolbarKeys); // 当前菜单排序和分组
  // }, [editor]);
  // 编辑器内容

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {
    excludeKeys: [
      "fullScreen",
      "group-video",
      "emotion",
      "headerSelect",
      "blockquote",
      "group-more-style",
      "bgColor",
      "bulletedList",
      "numberedList",
      "todo",
      "group-justify",
      "group-indent",
      "insertLink",
      "insertTable",
      "codeBlock",
      "divider",
      "undo",
      "redo",
      "insertImage",
      "italic",
      "fontFamily",
      "lineHeight",
    ],
  }; // TS 语法

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    // TS 语法
    placeholder: "placeholder input content",
    MENU_CONF: {
      uploadImage: {
        async customUpload(file: File, insertFn: any) {
          const { data } = (await uploadNoLimitCreateAction(file)) ?? {};
          insertFn(data?.url);
        },
      },
    },
  };

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);
  return (
    <>
      <div
        style={{
          border: "0px solid #F0F0F0",
          zIndex: 100,
        }}
        className="rounded-16 relative [&_.w-e-bar-divider]:!hidden"
      >
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
          style={{ borderBottom: "1px solid #F0F0F0" }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={value}
          onCreated={setEditor}
          onChange={(editor) => onChange?.(editor.getHtml())}
          mode="default"
          style={{ height: "500px", overflowY: "hidden" }}
        />
      </div>
    </>
  );
};
export default EditorContent;
