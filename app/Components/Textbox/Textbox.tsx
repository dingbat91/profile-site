/*
This is the object to render the rich text editor at it's base level.
Additional elemental components are detailed in the elements folder
*/

"use client";

import React, { useCallback, useState } from "react";
import { BaseEditor, createEditor, Descendant } from "slate";
import {
	Slate,
	Editable,
	withReact,
	ReactEditor,
	RenderElementProps,
} from "slate-react";
import { CodeElement, DefaultElement } from "./elements/paragraphElements";

export default function Textbox() {
	const renderElement = useCallback((props: RenderElementProps) => {
		switch (props.element.type) {
			case "code":
				return <CodeElement {...props} />;
			default:
				return <DefaultElement {...props} />;
		}
	}, []);

	const [editor] = useState(() => withReact(createEditor()));
	return (
		<Slate editor={editor}>
			<Editable renderElement={renderElement} />
		</Slate>
	);
}
