import fileSize from "../utils/file-size.js";

export default function uploadSummary(files){

    let total=0;

    files.forEach(file=>{

        total+=file.size;

    });

    return `
<div class="card">

    <h3>Upload Summary</h3>

    <p>Total File : ${files.length}</p>

    <p>Total Size : ${fileSize(total)}</p>

</div>`;

}
