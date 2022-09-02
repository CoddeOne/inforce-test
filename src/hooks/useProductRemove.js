import { useCallback, useState } from 'react';
import { useRemoveProductMutation } from '../api';

export default function useProductRemove() {
    const [selectedForRemoval, setSelectedForRemoval] = useState();
    const [removeProduct] = useRemoveProductMutation();

    const deselectForRemoval = useCallback(() => setSelectedForRemoval(null), []);
    const confirmRemoval = useCallback(() => {
        if (selectedForRemoval) {
            removeProduct(selectedForRemoval.id);
            deselectForRemoval();
        }
    }, [deselectForRemoval, selectedForRemoval]);

    return {
        selectedForRemoval,
        setSelectedForRemoval,
        deselectForRemoval,
        confirmRemoval,
    };
}
