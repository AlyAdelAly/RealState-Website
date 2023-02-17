import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => <Fragment>
  <img src={spinner} alt="Loading..." className='w-52 m-auto block' />
</Fragment>

export default Spinner;