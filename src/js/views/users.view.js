import dataTable from "../components/data-table.js";

export function renderUsers(users){
    const rows=users.map(user=>`
<tr>
    <td><img class="table-avatar" src="${user.avatar_url??""}" alt=""></td>
    <td>${user.full_name??"-"}</td>
    <td>${user.roles?.name??"Viewer"}</td>
    <td>${new Date(user.created_at).toLocaleDateString("id-ID")}</td>
    <td>
        <button class="btn btn-primary edit-user" data-id="${user.id}">
            Edit
        </button>
    </td>
</tr>`).join("");

    return `
<section class="page-header">
    <h1>Users</h1>
</section>
${dataTable(
    ["Avatar","Nama","Role","Bergabung","Aksi"],
    rows
)}`;
}
