import * as React from 'react';
import { DataTable } from 'react-native-paper';

const optionsPerPage = [2, 3, 4];

const listItems = [
    {
        name: 'Eggs',
        cost: '$1.59',
        amount: '12',
        id: 1
    },
    {
        name: 'Frozen Yogurt',
        cost: '$2.19',
        amount: '4',
        id: 2
    },
    {
        name: 'Iced Coffee',
        cost: '$1.59',
        amount: '1',
        id: 3
    },
    {
        name: 'Chips',
        cost: '$2.89',
        amount: '2',
        id: 4
    },
    {
        name: 'Cereal',
        cost: '$3.49',
        amount: '3',
        id: 5
    }
];

const ShoppingList = () => {
    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>Item</DataTable.Title>
                <DataTable.Title numeric>Cost</DataTable.Title>
                <DataTable.Title numeric>#</DataTable.Title>
            </DataTable.Header>

            {listItems.map((item, index) => (
                <DataTable.Row key={index}>
                    <DataTable.Cell>{item.name}</DataTable.Cell>
                    <DataTable.Cell numeric>{item.cost}</DataTable.Cell>
                    <DataTable.Cell numeric>{item.amount}</DataTable.Cell>
                </DataTable.Row>
            ))}

            <DataTable.Pagination
                page={page}
                numberOfPages={0}
                onPageChange={(page) => setPage(page)}
                optionsPerPage={optionsPerPage}
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
                showFastPagination
                optionsLabel={'Rows per page'}
            />
        </DataTable>
    );
}

export default ShoppingList;