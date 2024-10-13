"use client";

import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  type MDXEditorProps,
  type MDXEditorMethods,
  toolbarPlugin,
  UndoRedo, 
  BoldItalicUnderlineToggles,
  linkDialogPlugin,
  CreateLink,
  ListsToggle,
  BlockTypeSelect

} from "@mdxeditor/editor";
import { FC } from "react";
import '@mdxeditor/editor/style.css'

interface EditorProps extends MDXEditorProps {
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>;
  handleEditorChange: (markdown: string) => void; // Prop for handling content changes
}

const Editor: FC<EditorProps> = ({ editorRef, handleEditorChange, markdown, ...props }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <MDXEditor
        className="border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        onChange={handleEditorChange} // Call the parent's handler on content change
        ref={editorRef} // Use the ref for editor methods
        markdown={markdown} // Pass the markdown state
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
          markdownShortcutPlugin(),
          linkDialogPlugin(),
          toolbarPlugin({
            toolbarContents: () => (
              <div className="flex items-center space-x-4 bg-gray-100 p-2 rounded-t-md border-b border-gray-300">
                <UndoRedo />
                <BoldItalicUnderlineToggles  />
                <CreateLink/>
                <ListsToggle/>
                <BlockTypeSelect/>
              </div>
            ),
          }),
        ]}
        {...props} // Spread any other props
      />
    </div>
  );
};

export default Editor;
