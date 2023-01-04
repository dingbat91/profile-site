"use client";

import React, { useState } from "react";
import { createEditor } from "Slate";
import { Slate, Editable, withReact } from "slate-react";

function Textbox() {
	const [editor] = useState(() => withReact(createEditor()));

	const initialValue = [
		{
			type: "Paragraph",
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
