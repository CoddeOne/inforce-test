export default function getSortedProducts(products, sortKey) {
    switch (sortKey) {
        case 'count': {
            return [...products].sort((p1, p2) => p1.count - p2.count);
        }
        default: {
            return [...products].sort((p1, p2) => p1.name.localeCompare(p2.name, 'en'))
        }
    }
}
