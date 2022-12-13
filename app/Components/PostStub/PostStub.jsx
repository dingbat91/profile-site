import supabase from "../../../Supabase/supabase";
import Link from "next/link";

export default async function PostStub() {
	const { data: posts } = await supabase.from("Posts").select();
	return (
		<div>
			{posts.map((post) => (
				<div key={post.id}>
					<h1>
						<Link href={`/post/${post.id}`}>{post.title}</Link>
					</h1>
					<p>{post.content}</p>
				</div>
			))}
		</div>
	);
}
