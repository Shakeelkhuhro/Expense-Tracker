import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px 0 10px;
  padding: 10px 22px;
  font-size: 18px;
  width: 100%;
  gap: 10px;
  font-weight: bold;
  & input {
    padding: 10px 12px;
    border-radius: 12px;
    background: #e6e8e9;
    border: 1px solid #e6e8e9;
    outline: none;
    width: 100%;
  }
`;

const Cell = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 2px;
  align-items: center;
  font-weight: normal;
  width: 100%;
  justify-content: space-between;
  border: 1px solid #e6e8e9;
  border-radius: 4px solid ${(props) => (props.isExpense ? "red" : "green")};
`;

const TransactionCell = ({ payload }) => {
  return (
    <Cell isExpense={payload?.type === "EXPENSE"}>
      <span>{payload.desc}</span>
      <span>${payload.amount}</span>
    </Cell>
  );
};

const TransactionComponent = (props) => {
  const [searchText, updateSearchText] = useState("");
  const [filteredTransaction, updateTxn] = useState(props.transactions);

  const filterData = (searchText) => {
    if (!searchText || !searchText.trim().length) {
      updateTxn(props.transactions);
      return;
    }
    let txn = [...props.transactions];
    txn = txn.filter((payload) =>
      payload.desc.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    updateTxn(txn);
  };

  useEffect(() => filterData(searchText), [props.transactions, searchText]);

  return (
    <div>
      <Container>
        Transaction
        <input
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            updateSearchText(e.target.value);
            filterData(e.target.value);
          }}
        />
        {filteredTransaction?.length ? (
          filteredTransaction.map((payload) => (
            <TransactionCell key={payload.id} payload={payload} />
          ))
        ) : (
          <p>No transactions found.</p>
        )}
      </Container>
    </div>
  );
};

export default TransactionComponent;
