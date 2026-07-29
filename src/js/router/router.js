const Router={
    go(page){
        window.location.href=`../pages/${page}.html`;
    },
    replace(page){
        window.location.replace(`../pages/${page}.html`);
    },
    current(){
        const file=window.location.pathname.split("/").pop();
        return file.replace(".html","");
    },
    is(page){
        return this.current()===page;
    }
};
export default Router;
