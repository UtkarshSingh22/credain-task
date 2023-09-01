export default function sortTransactions(
    transactions,
    sortBy,
    ascending = true
) {
    const sortOrder = ascending ? 1 : -1;
    return transactions.slice().sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1 * sortOrder;
        if (a[sortBy] > b[sortBy]) return 1 * sortOrder;
        return 0;
    });
}
