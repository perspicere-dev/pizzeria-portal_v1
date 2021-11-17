import React from 'react';
import styles from './WaiterOrderNew.module.scss';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

const WaiterOrderNew = () => {  

  const demoTables = [
    {id: 1, name: 'Table 1'},
    {id: 2, name: 'Table 2'},
    {id: 3, name: 'Table 3'},
    {id: 4, name: 'Table 4'},
    {id: 5, name: 'Table 5'},
    {id: 6, name: 'Table 6'},
  ];
 
  const demoMenu = [
    {
      id: 'salad',
      name: 'Nonno Alberto\'s Salad',
      price: 9,
      description: 'A delicious salad made of fresh, home-grown products on a crispy lettuce base.',
      params: {
        ingredients: {
          label: 'Ingredients',
          type: 'checkboxes',
          options: {
            cucumber: {
              label: 'Cucumber',
              price: 1, 
              default: true,
            },
            tomatoes: {
              label: 'Tomatoes',
              price: 1,
              default: true, 
            },
            olives: {
              label: 'Olives',
              price: 1,
              default: true,
            },
            feta: {
              label: 'Feta cheese',
              price: 1,
            },
            cheese: {
              label: 'Cheese',
              price: 1,
            },
            herbs: {
              label: 'Fresh herbs',
              price: 1,
              default: true,
            },
            pepper: {
              label: 'Black pepper',
              price: 1,
            },
          },
        },
        other_parameter: {
          label: 'Custom parameter',
          type: 'radios',
          options: {
            option1: {
              label: 'option1',
              price: 1,
            },
            option2: {
              label: 'option2',
              price: 1,
              default: true,
            },
            option3: {
              label: 'option3',
              price: 1,
            },
          },
        },
      },
    },
    {
      id: 'lopo',
      name: 'Popo lopo',
      price: 4,
      description: 'A delicious salad made of fresh, home-grown products on a crispy lettuce base.',
      params: {
        ingredients: {
          label: 'Ingredients',
          type: 'redios',
          options: {
            artichoke: {
              label: 'artichoke',
              price: 1, 
              default: true,
            },
          },
        },
      },
    },
    
  ];

  const [selectTable, setTable] = React.useState('');
  const selectedTableArray = [];

  const [selectProduct, setProduct] = React.useState('');
  const selectedProductArray = [];

  // const orderSummaryArray = [];
  
  let selectedProduct = demoMenu[0];

  const renderParamsOfSelectedProduct = () => {
    const renderedParamForms = [];
    for (let paramKey in selectedProduct.params) {
      const param = selectedProduct.params[paramKey];
      renderedParamForms.push(renderParamForm(param));
    }
    return renderedParamForms;
  };
  
  const renderParamForm = (param) => {
    return (<Container>
      <h2>{param.label}</h2>
      {renderOptionsForParam(param)}
    </Container>);
  };

  const renderOptionsForParam = (param) => {
    if (param.type === 'radios') {
      return renderRadioForm(param.options);
    } else {
      return renderCheckboxForm(param.options);
    }
  };

  const renderRadioForm = (options) => {

    let defaultOptionKey;

    for (let optionKey in options) {
      const option = options[optionKey];
      
      if (option.default) {
        defaultOptionKey = optionKey;
      }
    }

    return (
      <FormControl component="fieldset">
        
        <RadioGroup
          aria-label="gender"
          defaultValue={defaultOptionKey}
          name="radio-buttons-group"
        >
          {(() => {
            const views = [];

            for (let optionKey in options) {
              const option = options[optionKey];
              views.push((
                <FormControlLabel value={optionKey} control={<Radio />} label={option.label} />
              ));
            }

            return views;          
          })()}
        </RadioGroup>
      </FormControl>
    );
  };

  const renderCheckboxForm = (options) => {
    console.log('run renderCheckboxForm');
    return(
      <FormGroup>
        {(() => {
          const views = [];

          for (let optionKey in options) {
            const option = options[optionKey];
            views.push((
              <FormControlLabel control={<Checkbox />} label={option.label} />
            ));
          }
          return views;          
        })()}
      </FormGroup>
    );
  };

  return (
    <div className={styles.component}>
      <h2>New order</h2>
      <Container>
        <TableContainer className={styles.table} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow >
                <TableCell></TableCell>
                <TableCell key={demoTables.id} align="right">New order</TableCell>
              </TableRow>
            </TableHead>
            <TableBody> 
              <TableRow>
                <TableCell>Table number</TableCell>
                <TableCell>
                  <FormControl fullWidth>
                    <InputLabel id="table">Table</InputLabel>
                    <Select
                      labelId="TableId"
                      id="Table"
                      value={selectTable}
                      label="Table"
                      onChange={(event) => {
                        selectedTableArray.push(event.target.value);
                        setTable(event.target.value);
                        console.log('selectedTableArray', selectedTableArray);
                      } }
                    >{demoTables.map(table => (<MenuItem key={table.id} value={table.name}>{table.name}</MenuItem>))}
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>
                  <FormControl fullWidth>
                    <InputLabel id="Products">Product</InputLabel>
                    <Select
                      labelId="Menu"
                      id="menu"
                      value={selectProduct}
                      label="Menu"
                      onChange={(event) => {
                        setProduct(event.target.value);
                        console.log('event.target.value', event.target.value);
                        selectedProductArray.push(event.target.value);
                        console.log('selectedProductArray', selectedProductArray);
                      }}
                    >
                      {
                        demoMenu.map(product => (<MenuItem key={product.id} value={product.name}>{product.name}</MenuItem>))}
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Product options</TableCell>
                <TableCell>
                  {console.log(selectedProduct.params)}                  
                  {renderParamsOfSelectedProduct()}
                  <TableCell></TableCell>
                  <Button variant="outlined">Add to order</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Order summary</TableCell>
                <TableCell>
                  Table 1 order: <br />
                  {demoMenu[0].name}{selectedProductArray[0]} <strong>${demoMenu[0].price}</strong>
                  <br /> <strong>options:</strong> <br />
                  {demoMenu[0].params.ingredients.options.cucumber.label} <strong>${demoMenu[0].params.ingredients.options.cucumber.price}</strong><br />
                  {demoMenu[0].params.ingredients.options.olives.label} <strong>${demoMenu[0].params.ingredients.options.olives.price}</strong>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total:</TableCell>
                <TableCell><strong>$11</strong></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Container> 
        <Button variant="outlined">Save</Button>
        <Button variant="outlined">Cancel</Button>
      </Container>
    </div>
  );
};

export default WaiterOrderNew;