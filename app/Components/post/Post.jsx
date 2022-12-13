import supabase from "./../../../Supabase/supabase";

export default async function post() {
	const { data: posts } = await supabase.from("Posts").select();
	return (
		<div>
			{posts.map((post) => (
				<div key={post.id}>
					<h1>{post.Title}</h1>
					<p>{post.content}</p>
				</div>
			))}
		</div>
	);
}
