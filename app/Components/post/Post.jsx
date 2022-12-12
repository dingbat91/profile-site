import supabase from "./../../../Supabase/supabase";

export default async function post() {
	const { data: posts } = await supabase.from("Posts").select();
	return (
		<div>
			<h1>Test posts</h1>
			{posts.map((post, x) => {
				<h1>{post.Title}</h1>;
			})}
		</div>
	);
}
