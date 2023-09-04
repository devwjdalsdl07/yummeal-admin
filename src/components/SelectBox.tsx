import React from 'react'
import { ISearchMenu } from './SearchBar'

interface IProps {
    value:string,
    options:Array<ISearchMenu>,
    onChange:(e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectBox = ({
    value,
    options,
    onChange,
  }:IProps) => {
  return (
    <select
    className='select'
      onChange={onChange}
      value={value}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}

export default SelectBox