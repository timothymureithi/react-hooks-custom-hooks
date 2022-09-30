import { useEffect } from "react";
//update hook to accept an arguement of the page title
function useDocumentTitle(pageTitle) {
  useEffect(() => {
    document.title = "Underreacted | Home";
  }, [pageTitle]);
}

export default useDocumentTitle;
