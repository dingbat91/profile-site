import React from "react";
import supabase from "../../../../Supabase/supabase";
import { notFound } from "next/navigation";

export default async function Post({ params }: { params: { id: number } }) {
	let id = params.id;
	const { data } = await supabase.from("Posts").select().match({ id }).single();

	if (!data) {
		notFound();
	}

	return (
		<div>
			<h1>{data.title}</h1>
			<p>{data.content}</p>
		</div>
	);
}
