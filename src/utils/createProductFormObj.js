export const createProductFormObj = product => ({
    id: product?.id || '',
    name: product?.name || '',
    weight: product?.weight || '',
    imageUrl: product?.imageUrl || '',
    count: product?.count || '',
    width: product?.size?.width || '',
    height: product?.size?.height || '',
});

export const fromProductFormValue = formValue => ({
    id: formValue.id || null,
    name: formValue.name,
    weight: formValue.weight,
    imageUrl: formValue.imageUrl,
    count: formValue.count,
    size: {
        width: formValue.width,
        height: formValue.height,
    },
})
