import { type } from "os";
import { BaseEditor, createEditor, Descendant } from "slate";
import { ReactEditor } from "slate-react";

/*----Typescript delcarations ----*/

declare module "slate" {
	interface CustomTypes {
		Editor: BaseEditor & ReactEditor;
		Element: CustomElement;
		Text: CustomText;
	}
}

type CodeElement = { type: "code"; children: CustomText[] };
type DefaultElement = { type: "default"; children: CustomText[] };

/*-------------------*/
