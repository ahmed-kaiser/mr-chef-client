import useScrollTop from "../../hook/useScrollTop";
import useSetTitle from "../../hook/useSetTitle";

const Blog = () => {
    useSetTitle("Blog");
    useScrollTop();
    return (
        <div>
            <h1>Blog page</h1>
        </div>
    );
};

export default Blog;