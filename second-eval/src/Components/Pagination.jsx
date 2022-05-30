import "./style.css"

export const Pagination = ({ total, selected, onPageChange }) => {
  let prev = "<";
  let next = ">";
  return <div className="pageContainer">
    <div hidden={selected < 1} onClick={() => onPageChange(selected - 1)}>{prev}</div>
    {Array(total).fill(0).map((el, index) => {
      return <PageCell key={index} value={index + 1} selected={selected} onPageChange={onPageChange} />
    })}
    <div hidden={selected == total-1} onClick={() => onPageChange(selected + 1)}>{next}</div>
  </div>;

};

function PageCell({ value, selected, onPageChange }) {
  return (
    <>
      <div style={{ border: selected === value - 1 ? "1px solid dodgerblue" : "" }} onClick={() => onPageChange(value - 1)}>
        {value}
      </div>
    </>
  )
}