import { format } from 'date-fns'

export const COLUMNS = [
  // {
  //   Header: 'Id',
  //   Footer: 'Id',
  //   accessor: 'id',
  //   disableFilters: true,
  //   sticky: 'center'
  // },
  {
    Header: 'Name',
    Footer: 'Name',
    accessor: 'name',
    sticky: 'center'
  },
  {
    Header: 'Regd No',
    Footer: 'Regd No',
    accessor: 'regd'
  },
  {
    Header: 'Course',
    Footer: 'Course',
    accessor: 'course'
  },
  
  {
    Header: 'Sem',
    Footer: 'Sem',
    accessor: 'sem'
  },
  // {
  //   Header: 'Last Name',
  //   Footer: 'Last Name',
  //   accessor: 'last_name',
  //   sticky: 'left'
  // },
  // {
  //   Header: 'Date of Birth',
  //   Footer: 'Date of Birth',
  //   accessor: 'date_of_birth',
  //   Cell: ({ value }) => {
  //     return format(new Date(value), 'dd/MM/yyyy')
  //   }
  // },
  {
    Header: 'Branch',
    Footer: 'Branch',
    accessor: 'branch'
  },
 
 
]

export const GROUPED_COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id'
  },
  {
    Header: 'Name',
    Footer: 'Name',
    columns: [
      {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name'
      },
      {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name'
      }
    ]
  },
  {
    Header: 'Info',
    Footer: 'Info',
    columns: [
      {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth'
      },
      {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country'
      },
      {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone'
      }
    ]
  }
]
