

type SortOptionProps = {
  sortType: string,
  onClick: (sortType: string) => void
};

function SortOption({sortType, onClick}:SortOptionProps):JSX.Element{

  const sortClickHandler =()=>{
    onClick(sortType);
  };
  return (
    <li onClick={sortClickHandler}
      className="places__option "
      tabIndex={0}
    >
      {sortType}
    </li>
  );


}

export default SortOption;
