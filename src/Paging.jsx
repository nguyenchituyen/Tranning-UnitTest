import * as React from 'react';
import { Pager } from '@progress/kendo-react-data-tools';

const total = 200;
const pageSizes = [5, 10, 20];
const initialType = 'numeric';
const initialPageState = {
  skip: 0,
  take: 5,
  buttonCount: 5,
  type: initialType,
  info: true,
  pageSizes: true,
  previousNext: true
};

const Paging = () => {
  const [pageState, setPageState] = React.useState(initialPageState);
  let {
    skip,
    take,
  } = pageState;

  const handlePageChange = event => {
    const {
      skip,
      take
    } = event;
    setPageState({ ...pageState,
      skip: skip,
      take: take
    });
  };

  return <React.Fragment>
        <Pager 
        skip={skip} 
        take={take} 
        total={total} 
        buttonCount={pageState.buttonCount} 
        info={pageState.info} 
        type={pageState.type} 
        pageSizes={pageState.pageSizes ? pageSizes : undefined} 
        previousNext={pageState.previousNext} 
        onPageChange={handlePageChange} />
      </React.Fragment>;
};

export default Paging