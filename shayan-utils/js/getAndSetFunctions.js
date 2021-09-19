export let selectedRowsInTable = [];

export const setSelectedRowsInTable = (newSelectedArray) => {
    selectedRowsInTable = newSelectedArray;
};

export const getSelectedRowsInTable = () => {
    return selectedRowsInTable;
};

export const getSelectedRowsIDsInTable = () => {
    if (selectedRowsInTable.length > 0) {
        let selectedRowsIDsInTable=[];
        for (let selectedRowsInTableElement of selectedRowsInTable) {
            selectedRowsIDsInTable.push(selectedRowsInTableElement.original._id);
        }
        return selectedRowsIDsInTable;
    } else {
        return selectedRowsInTable;
    }
};