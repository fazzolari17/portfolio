import React from 'react';
import axios from 'axios';
import config from '../../../config';
import { Fragment } from 'react';
// import Card from '../../Card';
import { useIsMobile } from '../../../contexts/ViewportProvider';
import {
  FilePenLine,
  X
} from 'lucide-react';
import SearchBar from '../searchbar/SearchBar';
import Button from '@mui/material/Button';
import MileageEntryModal  from '../../modal/MileageEntryModal';

const Mileage = () => {
  const initialFormValues = {
    eventDate: '',
    startingMileage: '',
    endingMileage: '',
    client: '',
    invoiceNumber: '',
    description: '',
    id: ''
  };

  const [mileageData, setMileageData] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState('');
  const [sortList, setSortList] = React.useState('Ascending');
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [searchFilterValue, setSearchFilterValue] = React.useState('event_date');
  const [mileageFormValues, setMileageFormValues] = React.useState(initialFormValues);
  const { isMobile } = useIsMobile();
  // const { width } = useContext(viewportContext);
  // const isMobile = width < 768;

  const primaryBackgroundColor = 'var(--header-background)';
  const errorColor = 'var(--error-color)';

  React.useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.BACKEND_API_URI}/mileage`);
        if (response.status === 200) {
          setMileageData(response.data);
        }
      } catch (error) {
        console.error(error);
      }

    };

    fetchData();

  }, []);


  const header = ['Date', 'Start Mileage', 'End Mileage', 'Total', 'Client', 'Invoice Number', 'Description'];


  const gridStyle = {
    grid: {
      display: 'grid',
      gridTemplateColumns: '120px 120px 120px 120px 180px 180px 1fr 80px',
      gap: '20px',
      padding: '8px 16px',
      marginTop: 0,
      marginBottom: 0,
      alignItems: 'center',
    },
    align: {
      textAlign: 'center'
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${config.BACKEND_API_URI}/mileage/${id}`);
      if (response.status === 200 && response.data.success) {
        const updatedMileage = mileageData.filter(item => item.id !== id);
        setMileageData(updatedMileage);


      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderMobileView = (item) => {
    return <div style={{
      borderBottom: '1px solid #ccc',
      padding: '16px',
      fontSize: '14px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
        <span>{item.event_date.split('T')[0]}</span>
        <span style={{ color: '#007AFF' }}>{item.client}</span>
      </div>

      <div style={{ margin: '8px 0', color: '#555' }}>
        <strong>{item.starting_mileage}</strong> → <strong>{item.ending_mileage}</strong>
        <span style={{ fontSize: '12px', marginLeft: '8px' }}>
          ({item.ending_mileage - item.starting_mileage} mi)
        </span>
      </div>

      <div style={{ fontStyle: 'italic', color: '#666', marginBottom: '8px' }}>
        {item.description}
      </div>

      {item.invoice_number && (
        <span style={{ background: '#f0f0f0', padding: '2px 6px', borderRadius: '4px', fontSize: '11px' }}>
          # {item.invoice_number}
        </span>
      )}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '8px' }}>
        <span title={'Edit'} style={{ cursor: 'pointer' }}>
          <FilePenLine color={primaryBackgroundColor} onClick={() => handeEntryUpdate(item.id)} />
        </span>
        <span onClick={() => handleDelete(item.id)} title={'Delete'} style={{ cursor: 'pointer' }}>
          <X color={errorColor} />
        </span>
      </div>
    </div>;
  };

  const renderDesktopView = (data) => {
    return (<>
      <div>
        <div style={ gridStyle.grid }>
          <span style={gridStyle.align}>{data.event_date.split('T')[0]}</span>
          <span style={gridStyle.align}>{data.starting_mileage}</span>
          <span style={gridStyle.align}>{data.ending_mileage}</span>
          <span style={gridStyle.align}>
            {
              (() => {
                const miles = (Number(data.ending_mileage) || 0) - (Number(data.starting_mileage) || 0);
                return miles > -1 ? (
                  <>{miles}<span style={{ fontSize: '12px', marginLeft: '8px' }}>mi</span></>
                ) : null;
              })()
            }
          </span>
          <span style={gridStyle.align}>{data.client}</span>
          <span style={gridStyle.align}>{data.invoice_number && '#'} {data.invoice_number}</span>
          <span style={gridStyle.align}>{data.description}</span>
          <span style={{ display: 'flex', justifyContent: 'space-around' }}>
            <span title={'Edit'} style={{ cursor: 'pointer' }}>
              <FilePenLine color={primaryBackgroundColor} onClick={(() => handeEntryUpdate(data.id))} />
            </span>
            <span title={'Delete'} style={{ cursor: 'pointer' }}>
              <X onClick={() => handleDelete(data.id)} color={errorColor}/>
            </span>
          </span>
        </div>
      </div>
    </>);

  };



  const renderHeader = () => {
    return <>
      <div style={{ ...gridStyle.grid, fontWeight: 'bold', borderBottom: '2px solid #ccc'  }}>
        {header.map(data => {
          return <Fragment key={data}>
            <span style={gridStyle.align}>{data}</span>
          </Fragment>;
        })}
      </div>

      <br></br>
    </>;
  };

  const renderSearchBar = () => {
    return (<div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' :'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchFilterValue={searchFilterValue}
          setSearchFilterValue={setSearchFilterValue}
          sort={sortList}
          setSort={setSortList}
        />
      </div>
      <Button variant='contained' style={{ height: 'fit-content', background: primaryBackgroundColor, marginLeft: '10px' }} onClick={() => setIsModalOpen(true)}>
        Add New Entry
      </Button>
    </div>);
  };

  const handleSubmit = async (values) => {
    try {
      const isUpdate = !!values.id;
      const url = isUpdate
        ? `${config.BACKEND_API_URI}/mileage/${values.id}`
        : `${config.BACKEND_API_URI}/mileage`;

      const method = isUpdate
        ? 'patch'
        : 'post';

      const response = await axios[method](url, values);

      if (response.status === 200) {
        const { event_date, starting_mileage, ending_mileage, client, invoice_number, description, id } = response.data;

        setIsModalOpen(false);
        setMileageData((previousData) => {

          if (isUpdate) {
            return previousData.map(item => item.id === id
              ? { event_date, starting_mileage, ending_mileage, client, invoice_number, description, id }
              : item);
          } else {
            const newEntry = {
              event_date,
              starting_mileage,
              ending_mileage,
              client,
              invoice_number,
              description,
              id
            };
            return [...previousData, newEntry];
          }
        });
        setMileageFormValues(initialFormValues);
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handeEntryUpdate = async (id) => {
    try {
      // console.log('ID::', id);
      const entryData = mileageData.filter(item => item.id === id)[0];
      console.log('Entry Update', entryData.invoice_number);
      const formData = {
        eventDate: entryData.event_date.split('T')[0],
        startingMileage: entryData.starting_mileage,
        endingMileage: entryData.ending_mileage,
        client: entryData.client,
        invoiceNumber: entryData.invoice_number,
        description: entryData.description,
        id
      };
      setMileageFormValues(formData);
      setIsModalOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  return <>
    {renderSearchBar()}

    <MileageEntryModal
      modalOpen={isModalOpen}
      initialFormValues={mileageFormValues}
      setFormValues={setMileageFormValues}
      onSubmit={handleSubmit}
      // error={error}
      onClose={() => setIsModalOpen(false)}
    />
    {!isMobile && renderHeader()}
    {(mileageData && [...mileageData]
      .sort((a, b) => (
        sortList === 'Ascending'
          ? a[searchFilterValue].localeCompare((b[searchFilterValue]))
          : b[searchFilterValue].localeCompare(a[searchFilterValue]))
      )
      .filter((d) => {
        return d[searchFilterValue].toLowerCase().includes(searchValue);
        // d[searchFilterValue].includes(searchValue)
      })
      .map(data => {
        return (<Fragment key={`${data.id}-main`}>
          <br></br>


          {
            isMobile
              ? <>
                {renderMobileView(data)}
              </>
              : <>
                {renderDesktopView(data)}
              </>
          }
        </Fragment>);
      }))
    }
  </>;
};

export default Mileage;