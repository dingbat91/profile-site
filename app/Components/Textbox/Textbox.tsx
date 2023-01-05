"use client";

import React, { useState } from "react";
import {
	BaseEditor,
	createEditor,
	Descendant,
} from "Slate";
import { Slate, Editable, withReact, ReactEditor } from "slate-react";
import { RenderElementProps } from "slate-react/dist/components/editable";

// Typescript Declarations-----------------------------------------------------

type ParagraphElement = {
	type: "paragraph";
	align?: string;
	children: CustomText[];
};

type CodeElement = {
	type: "code";
	align?: string;
	children: CustomText[];
};

type CustomElement = ParagraphElement | CodeElement;

type CustomText = {
	text: string;
	bold?: true;
	italic?: true;
	underline?: true;
};

declare module "slate" {
	interface CustomTypes {
		Editor: BaseEditor & ReactEditor;
		Element: CustomElement;
		Text: CustomText;
	}
}

//----------------------------------------------------------------

//Elements--------------------------------------------------------
const CodeElement = (props:RenderElementProps) => {
return (
	<pre {...props.attributes}>
		<code>{props.children}</code>
	</pre>
)

}
//----------------------------------------------------------------

function Textbox() {
	const [editor] = useState(() => withReact(createEditor()));

	const initialValue: Descendant[] = [
		{
			type: "paragraph",
			children: [{ text: "Editor Text" }],
		},
	];

	return (
		<Slate editor={editor} value={initialValue}>
			<Editable />
		</Slate>
	);
}

export default Textbox;
