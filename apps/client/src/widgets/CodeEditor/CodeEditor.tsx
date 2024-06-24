import { useEffect, useRef } from "react";
import { EditorView, keymap, lineNumbers } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { defaultKeymap, indentWithTab } from "@codemirror/commands";
import { javascript } from "@codemirror/lang-javascript"
import { syntaxHighlighting, HighlightStyle } from "@codemirror/language";
import styled from "@emotion/styled";


const WrapperDiv = styled.div`
  width: "max-content";
  height: "max-content";
  border: 2px solid lightgrey;
	border-radius: 4px;
`

export interface ICodeEditorProps {
	doc: any
}

export const CodeEditor = (props: ICodeEditorProps) => {
  const viewRef = useRef<HTMLDivElement|null>(null);
	const { doc } = props;

	let startState = EditorState.create({
		doc: doc,
		extensions: [keymap.of([indentWithTab]), lineNumbers(), javascript()]
	})


  useEffect(() => {
    const codeViewer = new EditorView({
			state: startState,
      parent: viewRef.current as Element,
    })

    return () => {
      codeViewer.destroy();
    }
  },[doc])


  return (<WrapperDiv ref={viewRef}></WrapperDiv>)
}
