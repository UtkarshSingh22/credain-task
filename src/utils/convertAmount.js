export default function formatAmount(amount) {
    if (amount >= 1000) {
        return amount / 1000 + "k";
    }
    return amount;
}
