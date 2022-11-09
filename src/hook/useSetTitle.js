import { useEffect } from "react";

const useSetTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - MrChef`;
    }, [title]);
};

export default useSetTitle;