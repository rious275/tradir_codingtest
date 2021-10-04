import React, { forwardRef, useEffect, useState } from 'react'
import styled from 'styled-components';

import { Checkbox } from 'antd';

import MaterialTable from 'material-table'

import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';

const tableIcons = {
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  };

const BeerList = () => {
  const [ beerList, setBeerList ] = useState([]);
  const [ filterList, setFilterList ] = useState([]);
  const [ titles ] = useState([
    { title: "Name", field: "name" },
    { title: "First Brewed", field: "firstBrewed" },
    { title: "ABV", field: "abv" },
    { title: "IBU", field: "ibu" },
    { title: "SRM", field: "srm" },
    { title: "ph", field: "ph" },
  ]);
  
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((data) => setBeerList(data));
  }, []);

  const filterBeer = (e) => {
    const { value, checked } = e.target;
    const spliter = value.split('-');
    const filtering = beerList.filter(
      (beer) => spliter[0] < beer.abv && beer.abv <= spliter[1]
    )

    if (checked) return setFilterList([...filterList, ...filtering])
    else if (!checked) {
      for(let i = 0; i < filterList.length; i++) {
        for (let j = 0; j < filtering.length; j++)
          if (filterList[i].id === filtering[j].id) {
            filterList.splice(i, 1);
          }
      } return setFilterList([...filterList])
    }
  };

  return (
    <BeerListWrab>
      <FilterContainer onClick={filterBeer}>
        <div>ABV Filter: </div>
        <div>
          <Checkbox value="5-7"> 5-7</Checkbox>
        </div>
        <div>
          <Checkbox value="7-9"> 7-9</Checkbox>
        </div>
        <div>
          <Checkbox value="9-11"> 9-11</Checkbox>
        </div>
        <div>
          <Checkbox value="11-15"> 11-15</Checkbox>
        </div>
        <div>
          <Checkbox value="15-55"> 15more</Checkbox>
        </div>
      </FilterContainer>
      <MaterialTable
        icons={tableIcons}
        columns={titles}
        data={filterList.length ? filterList : beerList.map((beer) => ({
          name: beer.name,
          firstBrewed: beer.first_brewed,
          abv: beer.abv,
          ibu: beer.ibu,
          srm: beer.srm,
          ph: beer.ph,
        }))}
        title={<i class="fas fa-beer fa-2x"></i>}
      />
    </BeerListWrab>
  );
}

export default BeerList;

const BeerListWrab = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-end;

  margin: 4rem 8rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 20px;

  div {
    margin: 0 14px;
  }
`;