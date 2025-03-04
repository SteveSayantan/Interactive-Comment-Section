export const getImgURL=(name)=>{
    /* 
    Description
    ===========
    We are iterating the array in data.js to render the comments. The array contains the name of the images. 
    
    We can simply keep the images in public and to access using root absolute path (e.g. /images/doreamon.png). Now, even if we change the 
    base url in vite.config.js, it would have no effect on these public images and the absolute path in the images would always refer to the default base.

    While deploying to github-pages, this behavior would cause problem. Hence, we use the following approach to dynamically import images.

    Note:
    ====
    -> `../images/${name}`: the relative path to the image from this directory
    -> import.meta.url : provides the base URL

    */
    return new URL(`../images/${name}`,import.meta.url).href; // we return the href string

}