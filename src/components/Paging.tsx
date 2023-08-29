import React from 'react';
import { Pagination } from 'antd';

const Paging: React.FC = () => <Pagination defaultCurrent={1} total={50}/>;
// pageSize : 페이지당 갯수 설정

export default Paging;