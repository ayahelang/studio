const COLORS={
    assigned:"#64748b",
    working:"#2563eb",
    review:"#f59e0b",
    approved:"#16a34a",
    rejected:"#dc2626",
    published:"#7c3aed"
};

export default function statusBadge(status){
    const color=COLORS[status]??"#64748b";
    return `
<span class="status-badge" style="background:${color}">
    ${status}
</span>`;
}
