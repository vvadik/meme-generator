
// теперь мы можем импортировать файл и editor.js вернет нам функцию editor

function onfill(doc)
{
    let canv=document.getElementById("img"),
        c=canv.getContext("2d");
    var file=doc.files[0],
        fileread=new FileReader();
    fileread.onload=function()
    {
        var img=new Image();
        img.src=fileread.result;
        img.onload=function()
        {
            canv.width=img.width;
            canv.height=img.height;
            c.drawImage(img,0,0);
            c.font="60px Arial";
            var text="тут текст";
            c.fillText("тут текст",canv.width/2-text.length/2*30,canv.height/2-15);
        }
    }
    fileread.readAsDataURL(file);
}

function get()
{
    let canv=document.getElementById("img"),
        c=canv.getContext("2d");
    var link=document.createElement("a");
    link.download="download";
    link.href=canv.toDataURL(["image/png"]);
    link.click();
}